# Technical Context: Discord Voice Recorder

## Development Environment

### Runtime
- Node.js (Latest LTS version recommended)

### Required Software
- ffmpeg: For audio processing and conversion
  - Must be installed and available in system PATH
  - Used for converting audio to MP3 format

## Dependencies

### Core Dependencies
```json
{
  "discord.js": "^14.x",
  "@discordjs/voice": "^0.x",
  "prism-media": "^1.x",
  "ffmpeg-static": "^5.x",
  "sodium": "^3.x"  // For voice support
}
```

### Development Dependencies
```json
{
  "nodemon": "^2.x"  // Optional: For development auto-reload
}
```

## Project Structure
```
discord-voice-recorder/
├── index.js           # Main bot file
├── package.json       # Project configuration
├── .env              # Environment variables (Discord token)
├── .gitignore        # Git ignore file
└── recordings/       # Temporary storage for recordings
```

## Configuration

### Environment Variables
```env
DISCORD_TOKEN=your_bot_token_here
```

### Bot Permissions
Required Discord permissions:
- View Channels
- Send Messages
- Join Voice Channels
- Speak in Voice Channels
- Attach Files

## Development Setup Steps

1. Install Node.js and npm
2. Install ffmpeg
3. Clone repository
4. Install dependencies: `npm install`
5. Create .env file with Discord token
6. Start bot: `node index.js`

## Technical Constraints

### Audio Processing
- Format: MP3
- Quality: Voice optimized
- Storage: Local filesystem

### Performance Considerations
- Memory usage for audio buffering
- Disk space for temporary files
- Network bandwidth for uploads

## Development Workflow
1. Local development
2. Manual testing with Discord
3. Run on local machine

## Debugging

### Common Issues
- ffmpeg not found in PATH
- Missing Discord permissions
- Voice connection errors
- File system permissions

### Logging
- Console logging for development
- Basic error reporting
- Command acknowledgments

## Security Considerations
- Token protection
- File cleanup
- Permission validation
- Error handling

## Maintenance
- Keep dependencies updated
- Monitor disk usage
- Regular cleanup of temporary files
