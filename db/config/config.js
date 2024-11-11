require('dotenv').config();




module.exports =  {
  "development": {
    "username": process.env.DB_user,
    "password": process.env.DB_pass,
    "database": process.env.DB_base,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_dialect
  },
  "test": {
    "username": process.env.DB_user,
    "password": process.env.DB_pass,
    "database": process.env.DB_base,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_dialect
  },
  "production": {
    "username": process.env.DB_user,
    "password": process.env.DB_pass,
    "database": process.env.DB_base,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_dialects
  }
}
