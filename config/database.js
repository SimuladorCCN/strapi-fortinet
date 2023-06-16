module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-151.railway.app'),
      port: env.int('PGPORT', 6136),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'tDiurNzrgDn8lc7VfH6e'),
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});
