# 🇮🇳 India Unveiled: A Journey Through the 28 States

## Project Overview

A beautiful, interactive web-based book experience showcasing all 28 Indian states with comprehensive information about their geography, culture, history, economy, and unique features.

### Features

✨ **Book-Like Experience**
- Starts with a beautiful closed book cover
- Click to open and explore
- Page-turning navigation with smooth animations
- Double-page spread layout like a real book

📖 **All 28 States Covered**
- Complete information about each state
- Multiple pages per state (5 pages each)
- Rich content with facts, statistics, and cultural highlights
- Beautiful typography and design

🎨 **Aesthetic Design**
- Indian flag colors (Saffron, White, Green)
- Professional typography
- Smooth animations and transitions
- Responsive design (desktop, tablet, mobile)
- Print-friendly formatting

### States Included

1. Andhra Pradesh
2. Arunachal Pradesh
3. Assam
4. Bihar
5. Chhattisgarh
6. Goa
7. Gujarat
8. Haryana
9. Himachal Pradesh
10. Jharkhand
11. Karnataka
12. Kerala
13. Madhya Pradesh
14. Maharashtra
15. Manipur
16. Meghalaya
17. Mizoram
18. Nagaland
19. Odisha
20. Punjab
21. Rajasthan
22. Sikkim
23. Tamil Nadu
24. Telangana
25. Tripura
26. Uttar Pradesh
27. Uttarakhand
28. West Bengal

## Project Structure

```
India-Unveiled/
├── index.html                 # Main entry point
├── styles.css                 # Main application styling
├── book.css                  # Book reader styles
├── app.js                    # Main app logic
├── book-engine.js            # Page turning logic
├── states-data.js            # All 28 states data
├── README.md                 # This file
├── QUICKSTART.md             # Quick start guide
├── DEPLOYMENT.md             # Deployment instructions
└── VISUAL_GUIDE.md           # Visual design overview
```

## Getting Started

### Prerequisites
- No external dependencies required
- Just a modern web browser
- Static HTML/CSS/JavaScript only

### Installation

1. **Download the project**
   ```bash
   git clone <repository-url>
   cd India-Unveiled
   ```

2. **Open in browser**
   - Double-click `index.html` to open locally
   - Or serve with Python: `python -m http.server 8000`
   - Or use any web server (nginx, Apache, etc.)

### Quick Start

1. Open `index.html` in your web browser
2. Click on the book cover to open it
3. Browse the state selection grid
4. Click on any state to read about it
5. Use arrow buttons or keyboard arrows to navigate pages
6. Click "Back to States" to return to the grid

## Features Explained

### Book Cover
- Beautiful closed book design
- Hover effect shows back cover
- Click anywhere to enter the reading experience

### State Grid
- All 28 states displayed as clickable cards
- State emoji, name, and capital shown
- Smooth animations on load and hover
- Responsive grid layout

### Book Reader
- Double-page spread layout
- Left and right pages with page numbers
- Smooth page turning animations
- Progress bar showing reading progress
- Keyboard navigation (Arrow Left/Right)
- Print-friendly formatting

### Content Organization

Each state has 5 pages covering:
1. **Introduction & Geography** - Location, area, population, major features
2. **History & Culture** - Historical background, languages, festivals, arts
3. **Economy & Development** - Industries, major cities, education
4. **Tourism & Landmarks** - Must-visit destinations, UNESCO sites
5. **Food & Unique Features** - Local cuisine, special characteristics

## Customization

### Adding More Content

Edit `states-data.js` to add or modify state information:

```javascript
'State Name': {
    emoji: '🏛️',
    capital: 'Capital Name',
    area: 'XXX,XXX km²',
    population: 'X,XXX,XXX',
    districts: XX,
    assembly: XXX,
    council: XX,
    pages: [
        {
            title: 'Page Title',
            content: '<h2>Heading</h2><p>Content here...</p>'
        },
        // ... more pages
    ]
}
```

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #FF9933;      /* Saffron */
    --secondary: #FFFFFF;     /* White */
    --tertiary: #138808;      /* Green */
    --accent: #1F4788;        /* Navy blue */
}
```

### Modifying Fonts

Change font family in `body` selector in `styles.css`:

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

## Deployment

See `DEPLOYMENT.md` for detailed instructions on deploying to:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting
- Docker containers
- And more...

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Load time: < 1 second
- No external dependencies
- Optimized CSS and JavaScript
- Responsive images (when added)
- Print-optimized

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- High contrast colors
- Font scaling support
- ARIA labels (can be enhanced)

## License

This project is created for educational and informational purposes.

## Version

**Version:** 1.0.0  
**Release Date:** August 2026  
**Last Updated:** August 30, 2026

## Credits

- Content sourced from Government of India databases
- UNESCO World Heritage information
- State government official sources
- Wikimedia Commons for image references

## Support & Feedback

For issues, suggestions, or improvements:
1. Check the QUICKSTART.md file
2. Review DEPLOYMENT.md for setup issues
3. Verify browser compatibility
4. Clear browser cache if experiencing issues

## Future Enhancements

Planned features for future versions:
- [ ] High-resolution images for each state
- [ ] Interactive maps
- [ ] Video content
- [ ] Multi-language support
- [ ] Search functionality
- [ ] Bookmarking system
- [ ] Export to PDF
- [ ] Mobile app version

## FAQ

**Q: Can I modify the content?**
A: Yes! Edit `states-data.js` to customize content for each state.

**Q: Can I use this commercially?**
A: Yes, with proper attribution to source material.

**Q: How do I add images?**
A: Add image HTML in the page content and serve images from the same domain.

**Q: Can I print the book?**
A: Yes! Print-friendly styling is included. Use Ctrl+P or Cmd+P.

**Q: Is there a dark mode?**
A: Currently no, but you can add it by modifying the CSS.

---

**Enjoy your journey through India's magnificent 28 States!** 🇮🇳✨

For more information, visit official state tourism websites and government portals.
