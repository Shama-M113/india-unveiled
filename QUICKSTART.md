# 🚀 Quick Start Guide - India Unveiled

Get up and running in 30 seconds!

## Option 1: Local File (Easiest)

1. **Download** the project files
2. **Open** `index.html` by double-clicking it
3. **Enjoy!** Start exploring the 28 states

That's it! No installation needed.

## Option 2: Local Server (Recommended)

### Using Python

```bash
cd India-Unveiled
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

### Using Node.js

```bash
npm install -g http-server
http-server
# Open http://localhost:8080 in your browser
```

### Using Live Server (VS Code)

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## How to Use

### 👀 First Time

1. **Page opens** with beautiful closed book cover
2. **Click anywhere** on the cover to open the book
3. **State grid** appears with all 28 states

### 📖 Reading a State

1. **Click** on any state card
2. **Book reader** opens with double-page layout
3. **Navigate** using:
   - Arrow buttons (Next/Previous)
   - Keyboard arrows (← →)
   - Progress bar shows where you are

### 🔙 Going Back

- Click "Back to States" to return to selection grid
- Click "Back to Cover" in navbar to return to book cover

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| ← Arrow | Previous page |
| → Arrow | Next page |
| Ctrl+P or Cmd+P | Print |
| Esc | Close reader (from book) |

## Tips & Tricks

### Print the Book

1. Open the book and navigate to desired state
2. Press Ctrl+P (Windows) or Cmd+P (Mac)
3. Choose printer and print settings
4. Click Print

### Share

1. Copy the URL from browser address bar
2. Share with others
3. They can access the same experience

### Customize

Edit `states-data.js` to change content:
- Modify state information
- Add more details
- Change emoji icons
- Update festivals or attractions

## Troubleshooting

### Page Not Loading?

- ✓ Try refreshing browser (Ctrl+R or Cmd+R)
- ✓ Clear browser cache
- ✓ Try a different browser
- ✓ Check that all files are in correct folders
- ✓ Ensure you have the full folder structure

### Book Cover Not Opening?

- ✓ Click directly on the book image
- ✓ JavaScript might be disabled - enable it in browser settings
- ✓ Try closing and reopening the page

### Pages Not Showing?

- ✓ The content is loaded in JavaScript
- ✓ Ensure `states-data.js` is in the project root
- ✓ Check browser console for errors (F12)

### Mobile Issues?

- ✓ Try landscape orientation for better view
- ✓ Zoom out to see full pages (Ctrl+- or Cmd+-)
- ✓ Use responsive design - all features work on mobile

## File Structure Quick Reference

```
📁 India-Unveiled/
  ├── 📄 index.html         ← Open this!
  ├── � styles.css
  ├── 📄 book.css
  ├── 📄 app.js
  ├── 📄 book-engine.js
  ├── 📄 states-data.js
  ├── 📄 README.md
  ├── 📄 QUICKSTART.md      ← You are here
  ├── 📄 DEPLOYMENT.md
  └── 📄 VISUAL_GUIDE.md
```

**All files must be in the project root for it to work!**

## Quick Customization

### Change Book Title

Edit `index.html`, find:
```html
<h1 class="cover-title">India Unveiled</h1>
```

Change to:
```html
<h1 class="cover-title">Your Title Here</h1>
```

### Change Colors

Edit `styles.css`, find `:root` section:
```css
--primary: #FF9933;    /* Saffron - change this */
--tertiary: #138808;   /* Green - change this */
```

### Add New Content to a State

Edit `states-data.js`, find the state, and add to its `pages` array:
```javascript
{
    title: 'My Page Title',
    content: '<h2>Content Here</h2><p>Your text...</p>'
}
```

## Performance Tips

- ✓ Keep content concise for faster loading
- ✓ Compress images before adding
- ✓ Use modern browser (Chrome, Firefox, Safari, Edge)
- ✓ Close other tabs for faster performance

## Next Steps

1. **Read README.md** - Full documentation
2. **Check DEPLOYMENT.md** - Deploy online
3. **Customize content** - Make it your own
4. **Share with others** - Spread the knowledge

---

**That's it!** You're all set to explore India's magnificent 28 states. 

🇮🇳 Enjoy your journey! ✨
