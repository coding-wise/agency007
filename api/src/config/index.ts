export const config = {
  http: {
    host: process.env.HTTP_HOST || '0.0.0.0',
    port: process.env.VIRTUAL_PORT || process.env.PORT || 3000,
  },
  auth: {
    google: {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['https://www.googleapis.com/auth/userinfo.profile', , 'https://www.googleapis.com/auth/userinfo.email'],
    },
    providers: {
      google: 'googleProvider',
    },
    successLoginRedirectUrl: process.env.SUCCESS_LOGIN_REDIRECT_URL,
  },
  logLevel: process.env.LOG_LEVEL || 'debug',
  env: process.env.NODE_ENV || 'development',
  nodeClusterEnabled:
    (process.env.ENABLE_NODE_CLUSTER && process.env.ENABLE_NODE_CLUSTER.toLowerCase() === 'true') || false,
  knex: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || {
      port: process.env.DB_CONN_PORT || 5432,
      host: process.env.DB_CONN_HOST || 'localhost',
      database: process.env.DB_CONN_DATABASE || 'api-db',
      user: process.env.DB_CONN_USER || 'user',
      password: process.env.DB_CONN_PASSWORD || 'password',
      multipleStatements: true,
    },
    pool: {
      min: +process.env.DATABASE_POOL_MIN || 0,
      max: +process.env.DATABASE_POOL_MAX || 10,
    },
    migrations: {
      directory: `${__dirname}/../../db/pg/migrations`,
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: `${__dirname}/../../db/pg/seeds`,
    },
  },
  integrations: {
    pivotal: {
      url: 'https://www.pivotaltracker.com/services/v5',
      token: process.env.PIVOTAL_TOKEN,
    },
  },
}
