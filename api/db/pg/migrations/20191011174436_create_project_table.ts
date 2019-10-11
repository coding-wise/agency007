import Knex from 'knex'

exports.up = (knex: Knex) => {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.json('pivotal')
    table.timestamps(false, true)
  })
}

exports.down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('projects')
}
