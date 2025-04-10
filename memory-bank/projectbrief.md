# Project Brief: Discord Voice Recorder

## Overview
Discord Voice Recorder is a Discord bot that enables users to record voice conversations in Discord voice channels. The bot provides simple command-based interaction for recording, storing, and sharing voice conversations.

## Core Requirements

### Essential Features
1. Voice Channel Recording
   - Join voice channels on command
   - Record all voice activity in the channel
   - Support multiple users in the same channel

2. Audio Processing
   - Record audio in suitable quality for voice
   - Convert recordings to MP3 format
   - Store files locally on the host machine

3. File Management
   - Save recordings to local filesystem
   - Upload processed recordings to Discord
   - Clean up temporary files after upload

### Command Interface
- `!record`: Start recording
  - Bot joins user's current voice channel
  - Initiates recording of all voice activity
- `!stop`: Stop recording
  - Bot stops recording
  - Processes audio to MP3
  - Uploads file to Discord channel

## Technical Constraints
- Runtime: Node.js
- Primary Library: discord.js
- Audio Processing: ffmpeg
- Storage: Local filesystem only (no cloud storage)
- Deployment: Local machine hosting

## Success Criteria
1. Successfully record voice conversations from Discord channels
2. Maintain audio quality suitable for voice recording
3. Reliably convert and upload recordings
4. Provide simple, intuitive user commands
5. Operate efficiently on local machine resources
