# Astrology Consultation Website

A modern, responsive multipage React website built with Vite, Tailwind CSS, and React Router. Features include hero slider, service listings, booking form, Google reviews integration, and more.

## 🚀 Features

- **Multipage React Application** with React Router
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Hero Image Slider** - Swiper-powered autoplay slider
- **Service Catalog** - Filterable services with booking integration
- **Booking System** - Form validation with react-hook-form
- **Reviews Section** - Google Reviews integration (placeholder ready)
- **Media Page** - YouTube video embeds and photo gallery
- **Articles/Blog** - Article listing with tag filtering
- **WhatsApp & Phone CTAs** - Floating action buttons
- **SEO Optimized** - Meta tags and structured data
- **Accessibility** - WCAG 2.1 AA compliant components

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A code editor (VS Code recommended)

## 🛠️ Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd Astro
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and add your values:
   ```env
   VITE_PHONE=+919696717305
   VITE_WA_NUMBER=919696717305
   VITE_SITE_URL=https://yourdomain.com
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
  components/
    NavBar.jsx          # Navigation with mobile menu
    HeroSlider.jsx      # Hero image slider
    ServiceCard.jsx     # Service card component
    ReviewCard.jsx      # Review card component
    ReviewsCarousel.jsx # Reviews carousel
    VideoEmbed.jsx      # YouTube video embed
    Footer.jsx          # Footer with links
    BookingForm.jsx     # Booking form with validation
    FloatingCTAs.jsx    # WhatsApp & Phone buttons
  pages/
    Home.jsx            # Homepage
    Services.jsx        # Services listing
    About.jsx           # About page
    Media.jsx           # Media & press mentions
    Articles.jsx        # Articles/blog listing
    Book.jsx            # Booking page
  hooks/
    useGoogleReviews.js # Google Reviews hook
  utils/
    api.js              # Axios configuration
    seo.js              # SEO utilities
  App.jsx               # Main app component with routing
  main.jsx              # Entry point
  index.css             # Global styles
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the primary color:
```js
colors: {
  primary: 'var(--primary-color)', // Change this
}
```

Or update `src/index.css`:
```css
:root {
  --primary-color: #8b5cf6; /* Your brand color */
}
```

### Images

**Hero Slider Images (Astrology-themed):**
The slider currently uses astrology-themed images from Unsplash. To use your own images:

1. **Add images to `public/` directory:**
   - `public/hero-1.jpg` - First slide (Kundali/astrology chart themed)
   - `public/hero-2.jpg` - Second slide (Stars/cosmic themed)  
   - `public/hero-3.jpg` - Third slide (Mystical/spiritual themed)

2. **Update `src/components/HeroSlider.jsx`:**
   Replace the Unsplash URLs with local paths:
   ```javascript
   image: '/hero-1.jpg',  // Instead of Unsplash URL
   ```

**Other Images:**
- `public/profile-photo.jpg` - Astrologer profile photo

**Image Specifications:**
- Size: 1920×1080 pixels (16:9 ratio) for hero images
- Format: JPG or WebP
- File Size: Under 500KB (compress using TinyPNG or similar)

See `IMAGE_SETUP.md` for detailed image setup instructions.

### Content

Edit the content in:
- `src/pages/Home.jsx` - Homepage content
- `src/pages/Services.jsx` - Service listings
- `src/pages/About.jsx` - About page content
- `src/pages/Articles.jsx` - Article listings

## 🔌 Google Reviews Integration

### Option 1: Server-Side Proxy (Recommended)

Create a serverless function (Netlify/Vercel) to fetch reviews:

**Netlify Function Example** (`netlify/functions/reviews.js`):
```javascript
exports.handler = async (event) => {
  const placeId = event.queryStringParameters.placeId
  const apiKey = process.env.GOOGLE_PLACES_KEY
  
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
  )
  
  const data = await response.json()
  return {
    statusCode: 200,
    body: JSON.stringify(data.result.reviews || []),
  }
}
```

Then update `src/hooks/useGoogleReviews.js` to call this endpoint.

### Option 2: Static Reviews

If you have review screenshots or text, add them directly to `src/pages/Home.jsx` or `src/components/ReviewsCarousel.jsx`.

## 📝 Booking Form Backend

The booking form currently logs to console. To connect to a backend:

1. **Create API endpoint** (e.g., `/api/booking`):
   ```javascript
   // Example: netlify/functions/booking.js
   exports.handler = async (event) => {
     const data = JSON.parse(event.body)
     // Send email via SendGrid, Mailgun, etc.
     // Or save to database
     return { statusCode: 200, body: JSON.stringify({ success: true }) }
   }
   ```

2. **Update `src/components/BookingForm.jsx`**:
   ```javascript
   await axios.post('/api/booking', data)
   ```

## 🚢 Deployment

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify

1. Push to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables in Netlify dashboard

### Build for Production

```bash
npm run build
```

The `dist/` folder contains the production build.

## 📱 WhatsApp & Phone Links

The site uses environment variables for contact information:
- `VITE_PHONE` - Phone number (e.g., `+919696717305`)
- `VITE_WA_NUMBER` - WhatsApp number (e.g., `919696717305` - without +)

WhatsApp links format: `https://wa.me/{VITE_WA_NUMBER}?text={encoded_message}`
Phone links format: `tel:{VITE_PHONE}`

## 🔍 SEO

### Meta Tags

Each page updates meta tags via `useEffect`. For better SEO:

1. Add structured data (JSON-LD) in `index.html` or via `src/utils/seo.js`
2. Create `sitemap.xml` and `robots.txt` in `public/`
3. Submit to Google Search Console

### Structured Data Example

Add to `index.html`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Astrology Consultation",
  "telephone": "+919696717305",
  "url": "https://yourdomain.com"
}
</script>
```

## 🎯 Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text for images
- Focus indicators

## 📚 Dependencies

- **react** & **react-dom** - React framework
- **react-router-dom** - Routing
- **swiper** - Image slider
- **framer-motion** - Animations
- **axios** - HTTP requests
- **react-hook-form** - Form handling
- **yup** - Form validation
- **tailwindcss** - Styling

## 🐛 Troubleshooting

### Images not loading
- Ensure images are in `public/` directory
- Use relative paths starting with `/` (e.g., `/hero-1.jpg`)

### Build errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18+)

### Routing not working (404 on refresh)
- For Vercel: Add `vercel.json` with rewrite rules
- For Netlify: Add `_redirects` file in `public/` with `/* /index.html 200`

## 📄 License

This project is private and proprietary.

## 🤝 Support

For issues or questions, contact the development team.

---

**Note:** This is a production-ready template. Remember to:
- Replace placeholder content with real content
- Add real images
- Set up backend APIs for booking and reviews
- Configure Google Analytics/Plausible
- Add privacy policy and terms pages
- Test on multiple devices and browsers

