## About

<!-- Center the image -->
<p align="center">
    <img src="YouTubeMusic.png" alt="YouTube Music" width="256" />
</p>

- Basic **YouTubeMusic AppImage**. You can build it yourself or just run the script. 
- **[Dependencies](#install-dependencies)** must be installed first.

## Install Dependencies

- [Electron](https://www.electronjs.org/)
- [NodeJS](https://nodejs.org/en)
- [NPM](https://www.npmjs.com/)

### Arch Linux:

- `sudo pacman -S nodejs npm`

### Fedora

- `sudo dnf install nodejs`

### Ubuntu/Debian:

- `sudo apt install nodejs npm`

## Build

- `npm install`
- `npm start` - **Use this if you want to keep tweaking settings**
- `npm run build` - **Use this if you want to build the application into an AppImage**.

## Installation
- `./Setup.sh` - **Use this if you want an all in one**.
- You can [read](https://github.com/DaleHuntGB/YTMusic/blob/main/Setup.sh) the script here.
    - TL;DR:<br>
    → Check NodeJS/NPM.<br>
    → Install Depedencies for NPM.<br>
    → Build & Rename AppImage.<br>
    → Create Directories.<br>
    → Move Files to Respective Directories.<br>
    → Make the AppImage executable.<br>
    → Create Desktop Shortcut.<br>
    → Fix Desktop Shortcut Permissions.<br>
    → Move Desktop Shortcut.<br>
    → Remove Build Files.<br>