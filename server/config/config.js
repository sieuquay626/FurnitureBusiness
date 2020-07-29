module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'MySecret',
  URI: process.env.MONGODB_URI || 'mongodb://localhost/FurnitureBusiness',
  DATABASE: process.env.DATABASE,
  PASSWORD: process.env.DATABASE_PASSWORD,
  SESSION_USER: process.env.SESSION_USER,
  SESSION_PASS: process.env.SESSION_PASS,
  SENGIRD_API: process.env.SENDGIRD_API,
};
