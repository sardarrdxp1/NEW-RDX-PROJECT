# Facebook Messenger Bot - Priyansh

## Overview
A feature-rich Facebook Messenger bot built with Node.js using the ws3-fca (Facebook Chat API) library. The bot includes numerous commands for entertainment, utility, and group management.

## Recent Changes (October 27, 2025)
- **Fixed**: ThreadID length detection issue for new groups
  - Changed `is_group_thread` detection from `>= 16` to `>= 15` in `sendTypingIndicatorV2.js`
  - This fixes Error 1545012 where bot couldn't send messages in groups with 15-character threadIDs
  - Example problematic threadID: "654192467479608" (15 characters)
  
## Project Architecture
- **Main Entry**: `index.js` - Starts Express server and spawns bot process
- **Bot Core**: `Priyansh.js` - Main bot initialization and command/event loading
- **FCA Library**: `ws3-fca/` - Custom Facebook Chat API with MQTT support
- **Commands**: `Priyansh/commands/` - 200+ bot commands
- **Events**: `Priyansh/events/` - Event handlers (join, leave, reactions, etc.)
- **Database**: SQLite (`includes/database/`) for user/thread data

## Key Features
- MQTT-based message listening for real-time updates
- Automatic reconnection with UUID generation (26-60 min intervals)
- Command system with prefix support
- User/thread database management
- Event handling (join, leave, typing, reactions)
- Rich media support (images, videos, stickers)

## Configuration
- Config file: `config.json`
- AppState: `appstate.json` (Facebook login cookies)
- Prefix: `/` (default)
- Admin IDs configured in `config.json`

## Running the Bot
The bot runs via `index.js` which:
1. Starts Express server on port 8080 for uptime monitoring
2. Spawns `Priyansh.js` process with error handling
3. Auto-restarts up to 5 times on crash

## Dependencies
- `priyanshu-fca` - Base Facebook Chat API
- `express` - Web server
- `sequelize` - Database ORM
- `axios` - HTTP requests
- `moment-timezone` - Time handling
- And 30+ other npm packages for various features

## User Preferences
- None documented yet

## Notes
- Bot uses custom ws3-fca implementation with MQTT improvements
- Supports both HTTP and MQTT message sending
- Includes extensive error handling and logging
