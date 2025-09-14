# E-Portfolio Application

## Overview

This is a comprehensive personal e-portfolio web application built with Node.js and Express.js. The application showcases a complete professional profile with all requested sections: Personal Information, Education, Skills, Work Experience, Projects, Achievements & Awards, Reflections/Personal Statement, Work Samples, Extracurricular & Volunteering, References, and Contact information. The portfolio features a modern, responsive design with server-side rendering using EJS templates, providing a professional presentation suitable for career development and job applications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Template Engine**: EJS (Embedded JavaScript) for server-side rendering
- **Static Assets**: CSS and JavaScript files served from the `public` directory
- **Responsive Design**: Modern CSS with flexbox layout and mobile-first approach
- **Interactive Features**: Smooth scrolling navigation, mobile hamburger menu, and scroll-based animations
- **Styling**: Custom CSS with Inter font family, backdrop filters, and modern UI patterns

### Backend Architecture
- **Framework**: Express.js 5.1.0 with minimal middleware setup
- **Server Structure**: Single-file server configuration (`server.js`)
- **Data Storage**: In-memory JavaScript object for portfolio data (no persistent database)
- **Route Handling**: RESTful routes for different portfolio sections
- **Static File Serving**: Express static middleware for CSS, JS, and asset files
- **Form Processing**: Express URL-encoded body parser for form data handling

### Data Model
The portfolio data is structured as a comprehensive JavaScript object containing:
- Personal information (name, title, bio, contact details)
- Educational background
- Technical and soft skills arrays
- Work experience history
- Project portfolio
- Achievements and certifications
- Work samples
- Extracurricular activities
- Professional references

### View Layer
- **Template Structure**: EJS templates in the `views` directory
- **Component Approach**: Reusable templates for different portfolio sections
- **Data Binding**: Dynamic content rendering through EJS template variables
- **Responsive Layout**: CSS Grid and Flexbox for adaptive layouts

## External Dependencies

### Core Dependencies
- **Express.js 5.1.0**: Web application framework for Node.js
- **EJS 3.1.10**: Embedded JavaScript templating engine for server-side rendering

### Frontend Assets
- **Inter Font**: Google Fonts integration for typography
- **CSS3**: Modern styling with backdrop filters, transitions, and responsive design
- **Vanilla JavaScript**: Client-side interactivity without external frameworks

### Development Environment
- **Node.js**: Runtime environment for server execution
- **NPM**: Package management for dependencies
- **Port Configuration**: Environment-based port configuration (default: 5000)

Note: The current implementation uses in-memory data storage, which means all portfolio information is reset when the server restarts. This architecture is suitable for demonstration purposes but would benefit from persistent storage integration for production use.