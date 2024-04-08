import { arrayMethods } from "../seed-data/arrayMethods-data.js";
import { objectMethods } from "../seed-data/objectMethods-data.js";
import { algosMethods } from "../seed-data/algosMethods-data.js";

export async function seed(knex) {
    try {
        await knex("array_methods").del();
        await knex("array_methods").insert(arrayMethods);
        console.log("arrayMethods data inserted successfully.");

        await knex("object_methods").del();
        await knex("object_methods").insert(objectMethods);
        console.log("objectMethods data inserted successfully.");

        await knex("algos_methods").del();
        await knex("algos_methods").insert(algosMethods);
        console.log("algosMethods data inserted successfully.");
    } catch (error) {
        console.error("Error seeding data:", error);
    }
}
