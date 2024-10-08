const mysql = require('mysql2/promise');

async function connect() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      charset: process.env.DB_CHARSET,
    });
    return connection;
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
}

async function disconnect(connection) {
  if (connection) {
    try {
      await connection.end();
    } catch (err) {
      console.error('Error disconnecting from the database:', err);
      throw err;
    }
  } else {
    console.error('No connection to disconnect');
  }
}

module.exports = {
  connect,
  disconnect,
};
