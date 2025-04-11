const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice');
const ffmpeg = require('fluent-ffmpeg');
require('dotenv').config();

// Create Discord client with necessary intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ]
});

// Handle ready event
client.once('ready', () => {
    console.log('Bot is ready!');
});

// Handle messages
client.on('messageCreate', async message => {
    // Ignore messages from bots
    if (message.author.bot) return;

    // Handle !record command
    if (message.content === '!record') {
        // Check if user is in a voice channel
        if (!message.member.voice.channel) {
            return message.reply('You need to be in a voice channel first!');
        }

        try {
            // Join the voice channel
            const connection = joinVoiceChannel({
                channelId: message.member.voice.channel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator,
            });

            message.reply('Started recording! Use !stop to stop recording.');
        } catch (error) {
            console.error('Error joining voice channel:', error);
            message.reply('Failed to join voice channel.');
        }
    }

    // Handle !stop command
    if (message.content === '!stop') {
        const connection = getVoiceConnection(message.guild.id);
        if (connection) {
            connection.destroy();
            message.reply('Recording stopped and bot disconnected.');
        } else {
            message.reply('Bot is not in a voice channel.');
        }
    }
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN);
