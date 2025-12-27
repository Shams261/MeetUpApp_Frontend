# 🎉 MeetUp App - Frontend

A modern, responsive React application for discovering and exploring meetup events. Built with React 19, React Router, and React Bootstrap.

![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)
![React Router](https://img.shields.io/badge/React_Router-7.11.0-CA4245?logo=reactrouter)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Integration](#-api-integration)
- [Components Deep Dive](#-components-deep-dive)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## 🎯 Overview

MeetUp App is a full-stack event discovery platform that enables users to browse, filter, and view details of upcoming events. This repository contains the **frontend** client built with React, designed with scalability, maintainability, and performance in mind.

---

## ✨ Features

| Feature                    | Description                                                            |
| -------------------------- | ---------------------------------------------------------------------- |
| 🏠 **Landing Page**        | Welcoming homepage with CTA to explore events                          |
| 📃 **Event Listing**       | Grid layout displaying all available events                            |
| 🔍 **Search & Filter**     | Real-time search by title/tags + filter by event type (Online/Offline) |
| 📄 **Event Details**       | Comprehensive event information with speakers, venue, pricing          |
| 📱 **Responsive Design**   | Mobile-first design using Bootstrap grid system                        |
| ⚡ **Async Data Fetching** | Efficient API calls with loading and error states                      |

---

## 🛠 Tech Stack

| Technology              | Purpose                                         |
| ----------------------- | ----------------------------------------------- |
| **React 19**            | UI library with functional components and hooks |
| **React Router DOM v7** | Client-side routing and navigation              |
| **React Bootstrap**     | Pre-styled responsive UI components             |
| **Axios**               | HTTP client for API requests                    |
| **Bootstrap 5**         | CSS framework for responsive design             |

---

## 🏗 Architecture

The application follows a **component-based architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────────┐
│                        App.js                                │
│                    (Router Configuration)                    │
├─────────────────────────────────────────────────────────────┤
│                        Navbar                                │
│                   (Global Navigation)                        │
├──────────────┬──────────────────┬───────────────────────────┤
│    Home      │    EventList     │      EventDetails         │
│   (Page)     │     (Page)       │        (Page)             │
│              │        │         │                           │
│              │   ┌────┴────┐    │                           │
│              │   │         │    │                           │
│              │ Filter   Cards   │                           │
└──────────────┴─────────────────┴───────────────────────────┘
                        │
                        ▼
              ┌─────────────────┐
              │  eventService   │
              │   (API Layer)   │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │  Backend API    │
              │   (REST API)    │
              └─────────────────┘
```

### Design Patterns Used

1. **Container/Presentational Pattern**: Pages handle data fetching; components handle rendering
2. **Lifting State Up**: Filter state managed in `EventList` and passed down to children
3. **Service Layer Pattern**: API calls abstracted into `eventService.js`
4. **Controlled Components**: Form inputs in `EventFilter` are fully controlled

---

## 📁 Project Structure

```
meetupfrontend/
├── public/
│   ├── index.html          # HTML template
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots file
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── EventCard.jsx   # Individual event card
│   │   ├── EventFilter.jsx # Search and filter controls
│   │   └── Navbar.jsx      # Navigation bar
│   ├── pages/              # Route-level components
│   │   ├── Home.jsx        # Landing page
│   │   ├── EventList.jsx   # Events listing with filters
│   │   └── EventDetails.jsx# Single event details
│   ├── services/           # API integration layer
│   │   └── eventService.js # Event API calls
│   ├── App.js              # Root component with routes
│   ├── App.css             # Global styles
│   └── index.js            # Application entry point
├── vercel.json             # Vercel deployment config
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 16.x
- **npm** >= 8.x or **yarn** >= 1.22.x

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/meetup-frontend.git

# Navigate to project directory
cd meetupfrontend

# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:3000`

### Available Scripts

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm start`     | Runs the app in development mode            |
| `npm test`      | Launches the test runner                    |
| `npm run build` | Builds the app for production               |
| `npm run eject` | Ejects from Create React App (irreversible) |

---

## 🔌 API Integration

### Service Layer (`src/services/eventService.js`)

The application communicates with a REST API backend. All API calls are centralized in the service layer:

```javascript
// Base URL configuration
const API_URL = "https://your-backend-url.vercel.app/api/events";

// Available methods
getEvents(); // GET /api/events - Fetch all events
getEventById(id); // GET /api/events/:id - Fetch single event
```

### Expected Event Schema

```javascript
{
  _id: String,           // MongoDB ObjectId
  title: String,         // Event title
  topic: String,         // Event topic/category
  description: String,   // Detailed description
  date: Date,            // Event date and time
  type: "Online" | "Offline",
  price: Number,         // Ticket price in INR
  image: String,         // Event cover image URL
  venue: {
    name: String,        // Venue name
    address: String      // Full address
  },
  speakers: [{
    name: String,        // Speaker name
    role: String         // Speaker designation
  }],
  tags: [String],        // Event tags for filtering
  additionalInfo: String // Extra information
}
```

---

## 🧩 Components Deep Dive

### `Navbar.jsx`

**Purpose**: Global navigation bar present on all pages

**Features**:

- Responsive collapse menu for mobile
- Brand logo linking to home
- Navigation links to Events page
- Dark theme styling

---

### `EventCard.jsx`

**Purpose**: Displays event preview in a card format

**Props**:
| Prop | Type | Description |
|------|------|-------------|
| `event` | Object | Event data object |

**Features**:

- Fixed-height image with `object-fit: cover`
- Event title, date, and type display
- "View Details" button linking to event page

---

### `EventFilter.jsx`

**Purpose**: Provides search and filter controls for events

**Props**:
| Prop | Type | Description |
|------|------|-------------|
| `filterType` | String | Current filter value |
| `setFilterType` | Function | Filter state setter |
| `searchTerm` | String | Current search value |
| `setSearchTerm` | Function | Search state setter |

**Features**:

- Dropdown for event type (Both/Online/Offline)
- Text input for search by title or tags
- Real-time filtering (controlled components)

---

### `Home.jsx`

**Purpose**: Landing page with welcome message and CTA

**Features**:

- Centered layout with Bootstrap Container
- Hero text with app description
- Primary CTA button to events listing

---

### `EventList.jsx`

**Purpose**: Main events page with listing and filters

**State Management**:

```javascript
events; // All events from API
filteredEvents; // Events after applying filters
filterType; // Current type filter
searchTerm; // Current search query
```

**Features**:

- Fetches all events on mount
- Client-side filtering for instant feedback
- Responsive 3-column grid layout
- Filter by type (Online/Offline/Both)
- Search by title or tags (case-insensitive)

---

### `EventDetails.jsx`

**Purpose**: Displays comprehensive details for a single event

**State Management**:

```javascript
event; // Event data
loading; // Loading state
error; // Error message if any
```

**Features**:

- Fetches event by ID from URL params
- Loading and error states handling
- Full event information display
- Speakers list with roles
- Tags display

---

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Create React App
   - Click "Deploy"

3. **Environment Variables** (if needed)
   - Add `REACT_APP_API_URL` in Vercel dashboard
   - Update `eventService.js` to use `process.env.REACT_APP_API_URL`

### `vercel.json` Configuration

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

This configuration ensures React Router handles all routes correctly (prevents 404 on direct URL access).

---

## 🔮 Future Enhancements

- [ ] User authentication (Login/Register)
- [ ] Event registration/RSVP functionality
- [ ] Event creation form for organizers
- [ ] Favorites/Bookmarks feature
- [ ] Calendar integration
- [ ] Social sharing buttons
- [ ] Pagination for large event lists
- [ ] Dark/Light theme toggle
- [ ] Unit and integration tests

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Made with ❤️ for Community
</p>
