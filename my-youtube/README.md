# 🎬 MyYouTube

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-9.1.1-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.22.3-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

**A modern, feature-rich YouTube clone built with React and Tailwind CSS**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Screenshots](#-screenshots)

</div>

---

## ✨ Features

### 🎯 Core Functionality
- **📺 Video Browsing** - Browse trending videos with a beautiful grid layout
- **🔍 Smart Search** - Real-time search suggestions with debouncing
- **📱 Responsive Design** - Seamless experience across all devices
- **🎨 Modern UI** - Glassmorphism effects, smooth animations, and polished interactions
- **⚡ Live Chat** - Real-time live chat simulation for streaming videos
- **💬 Comments Section** - Interactive comments with nested replies
- **📂 Category Filtering** - Filter videos by categories (Music, Games, Movies, etc.)

### 🎨 UI/UX Highlights
- **Glassmorphism Header** - Sticky header with backdrop blur effects
- **Smooth Animations** - Staggered fade-ins, slide-ups, and micro-interactions
- **Gradient Effects** - Beautiful gradient backgrounds and hover states
- **Dark Mode Ready** - Modern color scheme with easy dark mode integration
- **Accessibility** - ARIA labels and keyboard navigation support

### 🚀 Performance
- **Optimized Rendering** - Efficient React component structure
- **State Management** - Redux Toolkit for predictable state updates
- **Code Splitting** - Route-based code splitting for faster loads
- **Caching** - Search results caching for improved performance

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Helmet Async** - SEO and meta tag management

### APIs
- **YouTube Data API v3** - Video data, search, and statistics
- **Google Suggest API** - Search autocomplete suggestions

### Development Tools
- **Create React App** - Build tooling
- **ESLint** - Code linting
- **PostCSS** - CSS processing

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- YouTube Data API key ([Get one here](https://console.cloud.google.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-youtube.git
   cd my-youtube
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_YOUTUBE_API_KEY=your_api_key_here
   ```
   
   Or update the API key directly in `src/utils/constants.js`

4. **Start the development server**
   ```bash
   npm start
   ```
   
   The app will open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Creates a production build |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App (irreversible) |

---

## 📁 Project Structure

```
my-youtube/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Body.js        # Main layout wrapper
│   │   ├── Head.js        # Header with search
│   │   ├── Sidebar.js     # Navigation sidebar
│   │   ├── VideoCard.js   # Video card component
│   │   ├── VideoContainer.js  # Video grid container
│   │   ├── WatchPage.js   # Video watch page
│   │   ├── LiveChat.js    # Live chat component
│   │   └── ...
│   ├── utils/             # Utilities and Redux
│   │   ├── store.js       # Redux store configuration
│   │   ├── navSlice.js    # Navigation state
│   │   ├── searchSlice.js # Search state & caching
│   │   ├── categorySlice.js # Category filtering
│   │   └── constants.js   # API endpoints & config
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── tailwind.config.js     # Tailwind configuration
├── package.json           # Dependencies
└── README.md             # This file
```

---

## 🎨 Screenshots

> _Add your screenshots here to showcase the UI_

### Home Page
![Home Page](screenshots/home.png)

### Video Watch Page
![Watch Page](screenshots/watch.png)

### Search with Suggestions
![Search](screenshots/search.png)

---

## 🔑 Key Features Explained

### 🔍 Smart Search
- **Debounced API calls** - Reduces unnecessary requests
- **Result caching** - Stores search suggestions in Redux
- **Real-time suggestions** - Instant feedback as you type
- **Smooth animations** - Staggered fade-in effects

### 📺 Video Management
- **Trending videos** - Fetches most popular videos
- **Category filtering** - Filter by Music, Games, Movies, etc.
- **Video details** - View count, likes, and statistics
- **Responsive grid** - Adapts to screen size

### 💬 Interactive Comments
- **Nested replies** - Thread-like comment structure
- **Live updates** - Simulated real-time comments
- **User avatars** - Visual user representation

### 🎨 Modern Design
- **Glassmorphism** - Frosted glass effects
- **Gradient accents** - YouTube-inspired red gradients
- **Micro-interactions** - Hover effects and transitions
- **Smooth scrolling** - Custom scrollbar styling

---

## 🎯 Roadmap

- [ ] Dark mode toggle
- [ ] User authentication
- [ ] Playlist creation
- [ ] Video upload (simulation)
- [ ] Advanced search filters
- [ ] Video recommendations
- [ ] Channel pages
- [ ] Subscriptions management
- [ ] History and watch later
- [ ] Keyboard shortcuts

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- YouTube for the design inspiration
- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- All the open-source contributors

---

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/my-youtube](https://github.com/yourusername/my-youtube)

---

<div align="center">

**Made with ❤️ and React**

⭐ Star this repo if you find it helpful!

</div>
