import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import db from '../db.js';

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await db.select('*').from('users').where({ id }).first();
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

// Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await db.select('*').from('users').where({ email: profile.emails[0].value }).first();
        
        if (!user) {
            const [newUser] = await db('users').insert({
                email: profile.emails[0].value,
                name: profile.displayName,
                auth_provider: 'google',
                auth_provider_id: profile.id
            }).returning('*');
            user = newUser;
        }
        
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

// GitHub Strategy
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await db.select('*').from('users').where({ auth_provider_id: profile.id, auth_provider: 'github' }).first();
        
        if (!user) {
            const [newUser] = await db('users').insert({
                email: profile.emails?.[0]?.value || `${profile.username}@github.com`,
                name: profile.displayName || profile.username,
                auth_provider: 'github',
                auth_provider_id: profile.id
            }).returning('*');
            user = newUser;
        }
        
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

export default passport;
