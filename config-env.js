import fs from 'fs';
import dotenv from 'dotenv';
import envv2 from './config-v2.js';

const configEnvExists = fs.existsSync('config.env');
if (configEnvExists) {
    dotenv.config({ path: './config.env' });
}

let rf = process.env.AUTH_PATH || "auth_info_baileys";
let username = 'unknown_user';

try {
    username = fs.readFileSync(`${rf}-github_username.txt`, 'utf8').trim();
} catch (err) {
    }

const GITHUB_TOKEN =
    process.env.GITHUB_AUTH_TOKEN ||
    envv2.GITHUB_AUTH_TOKEN ||
    process.env.DB ||
    process.env.DATABASE ||
    process.env.DB_URL ||
    process.env.MONGODB ||
    process.env.MYSQL ||
    process.env.POSTGRESQL ||
    envv2.DB ||
    envv2.DATABASE ||
    envv2.DB_URL ||
    envv2.MONGODB ||
    envv2.MYSQL ||
    envv2.POSTGRESQL;

const BOT_NUMBER = process.env.BOT_NUMBER || envv2.BOT_NUMBER;
const SESSION_ID = process.env.SESSION_ID || envv2.SESSION_ID;

export default {
    SESSION_ID, 'PRABATH-MD~IFVy0BAxxJa44ne',
    BOT_NUMBER, '32467410178',
    GITHUB_USERNAME: 'kingbrthr',
    GITHUB_AUTH_TOKEN: 'postgres://koyeb-adm:npg_z1fDlsGoXQP7@ep-orange-violet-a1p2ny7k.ap-southeast-1.pg.koyeb.app/koyebdb',
};
