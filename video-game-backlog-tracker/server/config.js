import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
};