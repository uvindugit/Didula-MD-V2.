
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    // Essential Configuration
    SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID,
    PREFIX: process.env.PREFIX || '.',
    PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
    SUDO: process.env.SUDO === undefined ? '94741671668' : process.env.SUDO,
    MODE: process.env.MODE === undefined ? "public" : process.env.MODE,
    FOOTER: process.env.FOOTER || "*✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦*",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tC37Q7B/20241220-122443.jpg",

    // Message Handling
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? "true" : process.env.AUTO_READ_STATUS,
    READ_CMD: process.env.READ_CMD === undefined ? "true" : process.env.READ_CMD,
    ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE === undefined ? "false" : process.env.ALLWAYS_OFFLINE,

    // Protection Features
    ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
    ANTI_LINK: process.env.ANTI_LINK === undefined ? "true" : process.env.ANTI_LINK,
    ANTI_CALL: process.env.ANTI_CALL === undefined ? "true" : process.env.ANTI_CALL,
    ANTI_DELETE: process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
    ANTI_BOT: process.env.ANTI_BOT === undefined ? "true" : process.env.ANTI_BOT,
    BAD_NO_BLOCK: process.env.BAD_NO_BLOCK === undefined ? "false" : process.env.BAD_NO_BLOCK,
    DELETEMSGSENDTO: process.env.DELETEMSGSENDTO === undefined ? '94741671668' : process.env.DELETEMSGSENDTO,

    // Group Features
    WELCOME_GOODBYE: process.env.WELCOME_GOODBYE === undefined ? "false" : process.env.WELCOME_GOODBYE,

    // AI Features
    AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
};
