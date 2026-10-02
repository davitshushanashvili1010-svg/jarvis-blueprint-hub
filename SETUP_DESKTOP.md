# Jarvis Blueprint Hub - Desktop Setup Guide

## Quick Start (Windows, Mac, Linux)

### Step 1: Install Node.js
- Download from https://nodejs.org/ (LTS version recommended)
- Install it completely

### Step 2: Download & Extract Project
1. Go to: https://github.com/davitshushanashvili1010-svg/jarvis-blueprint-hub
2. Click **Code** (green button)
3. Click **Download ZIP**
4. Extract the ZIP file to your Desktop or Documents folder

### Step 3: Open Terminal/Command Prompt
**Windows:**
- Open folder in File Explorer
- Right-click inside folder → "Open PowerShell window here"
- Or press `Shift + Right-click` → Open PowerShell

**Mac/Linux:**
- Open Terminal
- Type: `cd ` then drag the folder into terminal
- Press Enter

### Step 4: Install Dependencies
Copy and paste this command:
```bash
npm install
```
Wait for it to finish (1-2 minutes)

### Step 5: Run the App
Copy and paste this command:
```bash
npm run dev
```

You'll see output like:
```
> jarvis-blueprint-hub@0.1.0 dev
> next dev

  ▲ Next.js 14.2.15
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 1234ms
```

### Step 6: Open in Browser
- Copy this URL: `http://localhost:3000`
- Paste it into Chrome, Firefox, Safari, or Edge
- The app will load!

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```
Then use `http://localhost:3001`

**"npm: command not found"**
- Node.js wasn't installed correctly
- Restart your computer after installing Node.js

**Still having issues?**
- Make sure you're in the correct folder (should see package.json)
- Try: `npm cache clean --force` then `npm install` again

## Stop the Server
Press `Ctrl + C` in the terminal

Enjoy! 🚀
