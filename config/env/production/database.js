module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "containers-us-west-58.railway.app"),
      port: env.int("PGPORT", 7472),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "mGfsQip74thQbBQCutSG"),
      ssl: env.bool(true),
    },
  },
});
