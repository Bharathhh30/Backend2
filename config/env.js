import { config } from "dotenv";

config({path:`.env.${process.env.NODE_ENV || 'development'}.local`});
// console.log(process.env);
export const {PORT,NODE_ENV} = process.env;