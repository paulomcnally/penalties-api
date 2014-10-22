module.exports = {
  db: {
    name: 'db',
    connector: 'postgresql',
    host: process.env.PENALTIES_API_POSTGRESQL_HOST,
    username: process.env.PENALTIES_API_POSTGRESQL_USERNAME,
    password: process.env.PENALTIES_API_POSTGRESQL_PASSWORD,
    database: process.env.PENALTIES_API_POSTGRESQL_DATABASE,
    ssl: true
  }
};
