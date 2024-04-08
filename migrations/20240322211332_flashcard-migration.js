/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('array_methods', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.text('definition');
        table.text('code');
    });

    await knex.schema.createTable('object_methods', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.text('definition');
        table.text('code');
    });

    await knex.schema.createTable('algos_methods', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.text('definition');
        table.text('code');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists('algos_methods');
    await knex.schema.dropTableIfExists('object_methods');
    await knex.schema.dropTableIfExists('array_methods');
}
