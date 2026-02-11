# Image Setup Guide

## Hero Slider Images

The hero slider currently uses astrology-themed images from Unsplash. To use your own images:

### Option 1: Use Local Images (Recommended)

1. **Add your images to the `public/` folder:**
   - `hero-1.jpg` - First slide (Kundali/astrology chart themed)
   - `hero-2.jpg` - Second slide (Stars/cosmic themed)
   - `hero-3.jpg` - Third slide (Mystical/spiritual themed)

2. **Update `src/components/HeroSlider.jsx`:**
   Replace the Unsplash URLs with local paths:
   ```javascript
   const defaultSlides = [
     {
       image: '/hero-1.jpg',  // Your local image
       headline: 'Discover Your True Path',
       // ...
     },
     // ...
   ]
   ```

### Option 2: Use Your Own Image URLs

Replace the Unsplash URLs in `src/components/HeroSlider.jsx` with your own hosted image URLs.

### Recommended Image Specifications

- **Size:** 1920×1080 pixels (16:9 aspect ratio)
- **Format:** JPG or WebP (optimized for web)
- **File Size:** Under 500KB per image (compressed)
- **Theme Suggestions:**
  - Slide 1: Kundali chart, horoscope wheel, or astrology symbols
  - Slide 2: Stars, night sky, cosmic/galaxy imagery
  - Slide 3: Spiritual, meditation, or mystical ambiance

### Image Optimization Tips

1. **Compress images** using tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (Mac)

2. **Use WebP format** for better compression:
   - Convert: `hero-1.jpg` → `hero-1.webp`
   - Update paths in component

3. **Lazy loading** is already handled by Swiper

### Current Temporary Images

The slider currently uses these astrology-themed Unsplash images:
- Slide 1: Astrology chart/Kundali style image
- Slide 2: Stars and cosmic imagery
- Slide 3: Mystical/spiritual meditation image

These are placeholders and should be replaced with your own professional images.

## Other Images Needed

### Profile Photo
- **Location:** `public/profile-photo.jpg`
- **Size:** 800×800 pixels (square)
- **Used in:** About page and Home page

### Service Icons (Optional)
- Add custom icons to `public/icons/` if you want custom service icons
- Otherwise, default SVG icons are used

## Image Sources (Free Resources)

If you need free astrology-themed images:

1. **Unsplash** - Search for: "astrology", "horoscope", "kundali", "stars", "cosmic"
   - URL: https://unsplash.com
   - Free to use with attribution

2. **Pexels** - Search for: "astrology", "spiritual", "mystical"
   - URL: https://pexels.com
   - Free to use

3. **Pixabay** - Search for: "astrology", "horoscope chart"
   - URL: https://pixabay.com
   - Free to use

## Quick Setup

To quickly set up with local images:

```bash
# 1. Download or create your hero images
# 2. Place them in public/ folder
# 3. Name them: hero-1.jpg, hero-2.jpg, hero-3.jpg
# 4. The component will automatically use them if Unsplash URLs fail
```

The component has fallback logic that will try local images if the remote URLs fail to load.


