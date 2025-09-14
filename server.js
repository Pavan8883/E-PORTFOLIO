const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

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
  res.render('home', {
    title: 'Home - E-Portfolio',
    data: portfolioData
  });
});


app.get('/achievements', (req, res) => {
  res.render('achievements', {
    title: 'Achievements - E-Portfolio',
    data: portfolioData
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact - E-Portfolio',
    data: portfolioData
  });
});

app.get('/education', (req, res) => {
  res.render('education', {
    title: 'Education - E-Portfolio',
    data: portfolioData
  });
});

app.get('/skills', (req, res) => {
  res.render('skills', {
    title: 'Skills - E-Portfolio',
    data: portfolioData
  });
});

app.get('/experience', (req, res) => {
  res.render('experience', {
    title: 'Experience - E-Portfolio',
    data: portfolioData
  });
});

// Download resume route
app.get('/download-resume', (req, res) => {
  const resumePath = path.join(__dirname, 'public', 'Sai_Pavan_Kumar_Mutyala_Resume2.pdf');
  res.download(resumePath, 'Sai_Pavan_Kumar_Mutyala_Resume2.pdf', (err) => {
    if (err) {
      console.error('Error downloading resume:', err);
      res.status(404).send('Resume not found');
    }
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`E-Portfolio server running on http://localhost:${PORT}`);
});
