const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=7vZXUDbA#ocJ38S70Hu_WHBYz9Z-UDqF8VOhFTauQcsfDMtR0GkE' : process.env.SESSION_ID,
    PREFIX: process.env.PREFIX || '.',
    FOOTER: process.env.FOOTER || "*✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦*",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tC37Q7B/20241220-122443.jpg",
    PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
    SUDO: process.env.SUDO === undefined ? '9473737373,9363636367' : process.env.SUDO,
    ALIVE_MSG: process.env.ALIVE_MSG === undefined ? "*Hello, I am alive now!!*" : process.env.ALIVE_MSG,
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? "true" : process.env.AUTO_READ_STATUS,
    MODE: process.env.MODE === undefined ? "public" : process.env.MODE,
    ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
    ANTI_LINK: process.env.ANTI_LINK === undefined ? "true" : process.env.ANTI_LINK,
    ANTI_CALL: process.env.ANTI_CALL === undefined ? "true" : process.env.ANTI_CALL,
    ANTI_DELETE: process.env.ANTI_DELETE === undefined ? "true" : process.env.ANTI_DELETE,
    ANTI_BOT: process.env.ANTI_BOT === undefined ? "true" : process.env.ANTI_BOT,
    READ_CMD: process.env.READ_CMD === undefined ? "true" : process.env.READ_CMD,
    RECORDING: process.env.RECORDING === undefined ? "true" : process.env.RECORDING,
    AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
    AUTO_SONG_SENDER: process.env.AUTO_SONG_SENDER === undefined ? "true" : process.env.AUTO_SONG_SENDER,
    POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:@Asitha2005b@db.waiqbrnuxkjebghzhovz.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL,
};