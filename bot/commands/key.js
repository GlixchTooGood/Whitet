const { SlashCommandBuilder } = require('@discordjs/builders');
const path = require("path");
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const crypto = require('crypto');
const mysql = require("mysql2");

// Create database connection
const db = mysql.createConnection({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPass,
    database: process.env.dbDb,
    charset: process.env.dbCharSet,
});

// Function to generate a random base64 string
function generateRandomBase64String(length) {
    const randomBytes = crypto.randomBytes(length);
    return randomBytes.toString('base64');
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('getkey')
        .setDescription('Gets your access key for whitet'),
    async execute(interaction) {
        const randomB64 = generateRandomBase64String(36);
        const user = interaction.user;
        console.log(`Command sent by: ${user.username} (ID: ${user.id})`);
        const [check] = await db.promise().query("SELECT * FROM accessKeys WHERE discordName = ?", [user.id]);

        if (check.length === 0) {
            await db.promise().query("INSERT INTO accessKeys (discordName, token) VALUES (?, ?)", [user.id, randomB64]);
            await interaction.reply({
                content: `Here's your token, \`\`\`${randomB64}\`\`\` welcome to Whitet.`,
                ephemeral: true
            });
        } else {
            await interaction.reply({
                content: `You already have a token, please login or register. The token being, \`${check[0].token}\`. If something isn't right, contact SOUNDGOD.`,
                ephemeral: true
            });
        }
    },
};
