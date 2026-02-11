# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Copy `.env.example` to `.env` and update:
```env
VITE_PHONE=+919696717305
VITE_WA_NUMBER=919696717305
VITE_SITE_URL=https://yourdomain.com
```

### 3. Add Your Images
Place these images in the `public/` folder:
- `hero-1.jpg` (1920×1080 recommended)
- `hero-2.jpg`
- `hero-3.jpg`
- `profile-photo.jpg`

### 4. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173`

### 5. Customize Content
Edit content in:
- `src/pages/Home.jsx` - Homepage
- `src/pages/Services.jsx` - Services list
- `src/pages/About.jsx` - About page
- `src/pages/Articles.jsx` - Articles

### 6. Update Contact Info
Edit `.env` file with your phone numbers and WhatsApp number.

### 7. Build for Production
```bash
npm run build
```

The `dist/` folder contains your production build.

## 📝 Next Steps

1. **Replace YouTube Video IDs** in `src/pages/Media.jsx`
2. **Add Real Reviews** - Update `src/components/ReviewsCarousel.jsx` or set up Google Reviews API
3. **Connect Booking Form** - Set up backend API endpoint (see README.md)
4. **Deploy** - Push to GitHub and deploy on Vercel/Netlify

## 🎨 Customization Quick Tips

### Change Primary Color
Edit `src/index.css`:
```css
:root {
  --primary-color: #your-color;
}
```

### Update Site Name
Search and replace "Astrology Consultation" in all files, or update in:
- `src/components/Footer.jsx`
- `src/components/NavBar.jsx`
- `index.html`

### Add More Services
Edit `src/pages/Services.jsx` - add items to the `allServices` array.

## ⚠️ Important Notes

- **Press Mentions**: Currently marked as "Demo" in Media page. Replace with real mentions or remove.
- **Articles**: Currently static. Set up markdown/CMS for dynamic content.
- **Booking Form**: Needs backend API. See README.md for implementation details.
- **Google Reviews**: Requires server-side proxy. See README.md for setup.

## 🆘 Common Issues

**Images not showing?**
- Check file paths start with `/` (e.g., `/hero-1.jpg`)
- Ensure files are in `public/` folder

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Routing not working after deploy?**
- Vercel: `vercel.json` already configured
- Netlify: `public/_redirects` already configured


