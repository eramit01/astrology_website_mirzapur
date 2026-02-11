# Better Astrology Images for Slider

## Recommended Image Sources

Since the current Unsplash images may not be loading perfectly, here are better alternatives:

### Option 1: Pexels (Free, High Quality)
Pexels has excellent astrology-themed images. Recommended searches:
- "astrology chart"
- "horoscope wheel"
- "kundali"
- "zodiac signs"
- "night sky stars"
- "galaxy nebula"

**URL Format:**
```
https://images.pexels.com/photos/[PHOTO_ID]/pexels-photo-[PHOTO_ID].jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop
```

### Option 2: Direct Unsplash Search
Search on Unsplash.com for:
- "astrology wheel"
- "horoscope chart"
- "zodiac"
- "starry night"
- "nebula galaxy"

### Option 3: Use Local Professional Images
Best option for production:

1. **Download from these sources:**
   - Freepik (free account): Search "astrology background"
   - Pixabay: Search "astrology", "horoscope"
   - Pexels: Search "astrology chart"

2. **Recommended image themes:**
   - **Slide 1:** Kundali chart / horoscope wheel with Indian astrology symbols
   - **Slide 2:** Starry night sky with constellations
   - **Slide 3:** Mystical cosmic/galaxy background with spiritual elements

3. **Image specifications:**
   - Resolution: 1920×1080 (Full HD)
   - Format: JPG (optimized) or WebP
   - File size: Under 500KB per image
   - Color: Dark backgrounds work best for text overlay

### Option 4: CSS Gradient Fallback
If images don't load, you can use beautiful CSS gradients:

Update `src/components/HeroSlider.jsx` to use gradients as fallback:

```javascript
// Example gradient backgrounds
const gradientSlides = [
  {
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Purple mystical
    // ... other properties
  },
  {
    gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', // Deep blue cosmic
    // ... other properties  
  },
  {
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)', // Dark cosmic
    // ... other properties
  }
]
```

## Quick Fix: Update Image URLs

Replace the current image URLs in `src/components/HeroSlider.jsx` with these better alternatives:

### Better Pexels URLs (if you have photo IDs):

```javascript
const defaultSlides = [
  {
    image: 'https://images.pexels.com/photos/[ID]/pexels-photo-[ID].jpeg?auto=compress&cs=tinysrgb&w=1920',
    // ... rest
  },
  // ... more slides
]
```

### Or Use These Specific Unsplash Collections:

Search Unsplash for these specific collections:
- "Astrology" collection
- "Horoscope" collection  
- "Zodiac Signs" collection
- "Cosmic" collection

## Current Image Status

The slider currently uses these Unsplash images:
1. **Slide 1:** Astrology chart theme
2. **Slide 2:** Starry night sky
3. **Slide 3:** Galaxy/nebula cosmic

**If images aren't showing:**
- Check your internet connection
- Images may be blocked by ad blockers
- Try using local images instead (see Option 3)

## Best Practice Solution

For production, **use your own professional images**:
1. Hire a designer to create custom astrology-themed backgrounds
2. Or purchase from stock photo sites (Shutterstock, Getty Images)
3. Or use free sources like Pexels/Pixabay with proper attribution

## Quick Test

To test if images are loading:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Refresh page
4. Check if image requests are successful (status 200)

If images fail, the component will automatically try local images (`/hero-1.jpg`, etc.) as fallback.


