import { config } from "dotenv";

config({path:`.env.${process.env.NODE_ENV || 'development'}.local`});
// console.log(process.env);
// console.log("Loaded ENV:", process.env.DB_URI);

export const {PORT,NODE_ENV ,
     DB_URI,JWT_SECRET,JWT_EXPIRE_IN,ARCJET_ENV,ARCJET_KEY,QSTASH_URL,QSTASH_TOKEN,SERVER_URL,EMAIL_PASSWORD} = process.env;