## About

<!-- Center the image -->
<p align="center">
    <img src="YouTubeMusic.png" alt="YouTube Music" width="256" />
</p>

- Basic **YouTubeMusic AppImage**. You can build it yourself or just run the script. **[Dependencies](#install-dependencies)** must be installed first.

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

```bash
#!/bin/bash
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'
BOLD='\033[1m'

CHECK="✓"
CROSS="✗"
ARROW="→"

echo -e "${BOLD}${MAGENTA}"
echo "╔════════════════════════════════════════╗"
echo "║   YouTube Music AppImage Installer     ║"
echo "╚════════════════════════════════════════╝"
echo -e "${NC}"

echo -e "${CYAN}${ARROW} Checking Dependencies...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}${CROSS} Error: Node.js is not installed.${NC}"
    exit 1
fi
if ! command -v npm &> /dev/null; then
    echo -e "${RED}${CROSS} Error: npm is not installed.${NC}"
    exit 1
fi
echo -e "${GREEN}${CHECK} Node.js $(node --version)${NC}"
echo -e "${GREEN}${CHECK} npm $(npm --version)${NC}"
echo ""

echo -e "${CYAN}${ARROW} Installing NPM Dependencies...${NC}"
npm install
echo ""

echo -e "${CYAN}${ARROW} Building AppImage...${NC}"
npm run build
echo ""

echo -e "${CYAN}${ARROW} Renaming AppImage...${NC}"
mv dist/*.AppImage dist/YouTubeMusic.AppImage
echo -e "${GREEN}${CHECK} Renamed to YouTubeMusic.AppImage${NC}"
echo ""

echo -e "${CYAN}${ARROW} Creating Directories...${NC}"
mkdir -p $HOME/Applications
mkdir -p $HOME/Applications/Logos
echo -e "${GREEN}${CHECK} Directories Created!${NC}"
echo ""

echo -e "${CYAN}${ARROW} Moving Files...${NC}"
echo -e "  ${ARROW} Moving YouTube Music Logo to Applications/Logos"
cp YouTubeMusic.png $HOME/Applications/Logos/
echo -e "  ${ARROW} Moving YouTube Music AppImage to Applications"
mv dist/YouTubeMusic.AppImage $HOME/Applications/
echo -e "${GREEN}${CHECK} Files Moved Successfully!${NC}"
echo ""

echo -e "${CYAN}${ARROW} Making AppImage Executable...${NC}"
chmod +x $HOME/Applications/YouTubeMusic.AppImage
echo ""

echo -e "${CYAN}${ARROW} Creating Desktop Entry...${NC}"
cat > /tmp/YouTubeMusic.desktop << EOF
[Desktop Entry]
Name=YouTube Music
Exec=$HOME/Applications/YouTubeMusic.AppImage
Icon=$HOME/Applications/Logos/YouTubeMusic.png
Type=Application
Categories=AudioVideo;Audio;Player;
Terminal=false
StartupWMClass=youtube-music
EOF
chmod 644 /tmp/YouTubeMusic.desktop
sudo mv /tmp/YouTubeMusic.desktop /usr/share/applications/
echo -e "${GREEN}${CHECK} Application Shortcut Created!${NC}"
echo ""

echo -e "${CYAN}${ARROW} Updating Desktop Database...${NC}"
sudo update-desktop-database /usr/share/applications/
echo -e "${GREEN}${CHECK} Icon Database Updated!${NC}"
echo ""

echo -e "${BOLD}${GREEN}"
echo "╔════════════════════════════════════════╗"
echo "║      Installation Complete! 🎵         ║"
echo "╚════════════════════════════════════════╝"
echo -e "${NC}"
echo -e "${YELLOW}Enjoy!${NC}"
echo ""

echo -e "${CYAN}${ARROW} Cleaning Up...${NC}"
echo -e "  ${ARROW} Removing node_modules..."
rm -rf node_modules
echo -e "  ${ARROW} Removing dist..."
rm -rf dist
echo -e "  ${ARROW} Removing package-lock.json..."
rm package-lock.json
echo -e "${GREEN}${CHECK} Cleanup Complete!${NC}"
echo ""

echo -e "${BOLD}${BLUE}Thank you for using YouTube Music AppImage Installer!${NC}"
```