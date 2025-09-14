const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Portfolio data
const portfolioData = {
  personalInfo: {
    name: '',
    title: '',
    bio: '',
    email: '',
    phone: '',
    location: '',
    profileImage: ''
  },
  education: [],
  skills: {
    technical: [],
    soft: []
  },
  experience: [],
  projects: [],
  achievements: [],
  workSamples: [],
  extracurricular: [],
  references: []
};

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'E-Portfolio',
    data: portfolioData
  });
});

app.get('/resume', (req, res) => {
  res.render('resume', {
    title: 'Resume - E-Portfolio',
    data: portfolioData
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`E-Portfolio server running on http://0.0.0.0:${PORT}`);
});