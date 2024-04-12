/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary().unsigned();//this "unsigned() is necessary since I put it on the referencing ids in the other tables as well. Without it I'll get errors."
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
        table.string('email').notNullable().unique();
    });
    await knex.schema.createTable('array_methods', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.text('definition');
        table.text('code');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
    });


    await knex.schema.createTable('object_methods', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.text('definition');
        table.text('code');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
    });

    await knex.schema.createTable('algos_methods', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.text('definition');
        table.text('code');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
    });

};

export async function down(knex) {
    await knex.schema.dropTableIfExists('algos_methods');
    await knex.schema.dropTableIfExists('object_methods');
    await knex.schema.dropTableIfExists('array_methods');
    await knex.schema.dropTableIfExists('users');
};
