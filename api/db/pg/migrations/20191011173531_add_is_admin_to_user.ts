import Knex from 'knex'

exports.up = (knex: Knex) => {
  return knex.schema.table('users', (table) => {
    table.boolean('is_admin').defaultTo(false)
  })
}

exports.down = (knex: Knex) => {
  return knex.schema.table('users', (table) => {
    table.dropColumn('is_admin')
  })
}
