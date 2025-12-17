# YouTube Triple-Click Navigation Extension

A Chrome/Edge browser extension that enhances YouTube video playback with intuitive triple-click navigation gestures.

## Features

- **Triple-click left side** of the video player: Skip backward 5 seconds ⏪
- **Triple-click right side** of the video player: Skip forward 5 seconds ⏩
- Visual feedback showing the skip action
- Works seamlessly with YouTube's interface
- No additional permissions required

## Installation

### Chrome/Edge (Unpacked Extension)

1. **Download the extension files**

   - Create a new folder called `youtube-triple-click-navigation`
   - Save all the extension files (`manifest.json`, `content.js`, `README.md`) into this folder

2. **Create placeholder icons** (optional but recommended)

   - You can use any PNG images or create simple icons
   - Name them: `icon16.png`, `icon48.png`, `icon128.png`
   - Or remove the icons section from `manifest.json` if you skip this step

3. **Load the extension in Chrome/Edge**

   - Open Chrome/Edge and navigate to `chrome://extensions/` (or `edge://extensions/`)
   - Enable "Developer mode" using the toggle in the top-right corner
   - Click "Load unpacked"
   - Select the `youtube-triple-click-navigation` folder

4. **Verify installation**
   - The extension should appear in your extensions list
   - Navigate to any YouTube video to test it

## Usage

1. Go to any YouTube video
2. **To skip backward**: Triple-click on the **left half** of the video player
3. **To skip forward**: Triple-click on the **right half** of the video player
4. You'll see visual feedback confirming the skip action

### Tips

- The clicks must be within 500ms of each other to be registered as a triple-click
- Works on fullscreen and theater mode
- Doesn't interfere with normal YouTube controls

## How It Works

The extension:

1. Injects a content script into YouTube pages
2. Listens for click events on the video player
3. Detects triple-clicks and determines if they occurred on the left or right side
4. Adjusts the video's `currentTime` property by ±5 seconds
5. Shows a brief visual indicator of the skip action

## Troubleshooting

### Extension not working?

- Make sure Developer mode is enabled
- Refresh the YouTube page after installing the extension
- Check the browser console for any error messages (F12 → Console)

### Clicks not being detected?

- Ensure you're clicking directly on the video player area
- Try clicking a bit faster to register as a triple-click
- Make sure YouTube has fully loaded before attempting triple-clicks

### Conflicts with other extensions?

- Try disabling other YouTube-related extensions temporarily
- Some extensions may interfere with click event handling

## Customization

You can modify the behavior by editing `content.js`:

- **Change skip duration**: Modify the `SKIP_SECONDS` constant (default: 5)
- **Adjust triple-click timing**: Change `CLICK_DELAY` (default: 500ms)
- **Customize visual feedback**: Edit the `showSkipFeedback()` function

## Privacy

This extension:

- Does NOT collect any data
- Does NOT track your browsing
- Does NOT require any special permissions
- Only runs on YouTube pages
- All processing happens locally in your browser

## Technical Details

- **Manifest Version**: 3
- **Supported Browsers**: Chrome, Edge, Brave (Chromium-based)
- **Content Script**: Runs on `https://www.youtube.com/*`
- **Permissions**: None required

## Contributing

Feel free to fork and improve this extension! Suggestions for improvements:

- Customizable skip duration
- Settings page
- Support for more gesture types
- Keyboard shortcuts integration

## License

Free to use and modify. No attribution required.

## Version History

- **1.0** (2025-12-17): Initial release
  - Triple-click navigation
  - Visual feedback
  - Support for dynamic YouTube navigation

---

Enjoy your enhanced YouTube experience! 🎥✨
