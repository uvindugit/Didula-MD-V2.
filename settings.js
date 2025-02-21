
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

const convertToBool = (text, fault = 'true') => text === fault;

const DEFAULT_CONFIG = {
    SESSION_ID: '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=7vZXUDbA#ocJ38S70Hu_WHBYz9Z-UDqF8VOhFTauQcsfDMtR0GkE',
    PREFIX: '.',
    FOOTER: "*✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦*",
    ALIVE_IMG: "https://i.ibb.co/tC37Q7B/20241220-122443.jpg",
    PORT: "8000",
    HEART_REACT: 'false',
    SUDO: '94743381623,94789123880',
    ALIVE_MSG: "*Hello, I am alive now!!*",
    AUTO_READ_STATUS: "true",
    MODE: "public",
    ANTI_BAD: "false",
    ANTI_LINK: "true", 
    ANTI_CALL: "true",
    ANTI_DELETE: "true",
    ANTI_BOT: "true",
    READ_CMD: "true",
    RECORDING: "true",
    AI_CHAT: "false",
    AUTO_SONG_SENDER: "true",
    DELETEMSGSENDTO: "",
    MAX_SIZE: 100,
    WELCOME_GOODBYE: "true",
    BAD_NO_BLOCK: "true",
    ALLWAYS_OFFLINE: "false"
};

const config = Object.fromEntries(
    Object.entries(DEFAULT_CONFIG).map(([key, defaultValue]) => [
        key,
        process.env[key] ?? defaultValue
    ])
);

const booleanFields = [
    'HEART_REACT', 'AUTO_READ_STATUS', 'ANTI_BAD', 'ANTI_LINK',
    'ANTI_CALL', 'ANTI_DELETE', 'ANTI_BOT', 'READ_CMD',
    'RECORDING', 'AI_CHAT', 'AUTO_SONG_SENDER', 'WELCOME_GOODBYE',
    'BAD_NO_BLOCK', 'ALLWAYS_OFFLINE'
];

booleanFields.forEach(field => {
    config[field] = convertToBool(config[field]);
});

config.PORT = parseInt(config.PORT, 10);
config.MAX_SIZE = parseInt(config.MAX_SIZE, 10);

if (!config.SESSION_ID) {
    console.error('Configuration Error: Missing SESSION_ID');
    process.exit(1);
}

module.exports = config;
