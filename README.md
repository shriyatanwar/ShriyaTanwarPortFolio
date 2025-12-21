# Modern Portfolio Website

A beautiful, modern, and responsive portfolio website built with React.js and CSS.

## Features

- **Modern Design**: Sleek and aesthetic design with smooth animations
- **Fully Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Components**: Hover effects and animations throughout
- **Multiple Sections**:
  - Hero Section with animated introduction
  - About Me section with personal details
  - Skills section with animated progress bars
  - Projects showcase with filtering
  - Experience & Education timeline
  - Contact form with social links
  - Professional footer

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd modern-portfolio
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Customization

### Update Your Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Update your name and title
   - Change the description

2. **About Section** (`src/components/About.js`):
   - Update personal information (name, email, location, degree)
   - Modify the about text
   - Add your profile image

3. **Skills Section** (`src/components/Skills.js`):
   - Update the skills array with your technologies
   - Adjust skill levels (percentages)
   - Add or remove skill categories

4. **Projects Section** (`src/components/Projects.js`):
   - Replace placeholder projects with your actual projects
   - Update project details, technologies, GitHub links, and live demo URLs
   - Add project images

5. **Experience Section** (`src/components/Experience.js`):
   - Update work experience and education details
   - Modify dates, roles, companies, and achievements

6. **Contact Section** (`src/components/Contact.js`):
   - Update email, phone, and location
   - Change social media links
   - Configure form submission (currently shows success message)

### Adding Your Images

Replace the placeholder elements with actual images:

1. Add your images to `src/assets/` (create this folder if needed)
2. Import and use them in the components:

```javascript
import profileImage from '../assets/profile.jpg';

// Then replace:
<div className="image-placeholder">...</div>

// With:
<img src={profileImage} alt="Your Name" />
```

### Color Customization

Edit the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #6366f1;    /* Main theme color */
  --secondary-color: #8b5cf6;  /* Secondary color */
  --accent-color: #ec4899;     /* Accent color */
  /* ... more colors */
}
```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be in the `build/` directory, ready to deploy.

## Deployment

You can deploy this portfolio to various platforms:

- **GitHub Pages**: Configure and use `gh-pages` package
- **Netlify**: Connect your repository and deploy
- **Vercel**: Import your repository and deploy
- **Heroku**: Use the buildpack for React apps

## Technologies Used

- React.js
- CSS3 (with modern features like CSS Grid, Flexbox, CSS Variables)
- Modern JavaScript (ES6+)
- Responsive Design
- CSS Animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

---

Built with ❤️ using React.js
