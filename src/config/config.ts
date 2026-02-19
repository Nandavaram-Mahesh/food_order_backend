import { config as conf } from "dotenv";


conf({path:'.env.dev'});

const _config = {
    port: process.env.PORT,
    databaseUrl: process.env.MONGODB_URI,
    env: process.env.NODE_ENV,
}

const config = Object.freeze(_config);

export {config}