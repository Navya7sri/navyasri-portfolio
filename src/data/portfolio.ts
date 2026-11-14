export const profile = {
  name: 'Vallakati Navyasri', shortName: 'Navyasri Vallakati', email: 'navya7vallakati@gmail.com',
  github: 'https://github.com/Navya7sri', linkedin: 'https://www.linkedin.com/in/navyasri-vallakati-698708251/',
  resume: '/resume.pdf'
};

export const experiences = [
  { role: 'Software Engineer | Full Stack Developer', company: 'Capgemini', client: 'Telia', location: 'Bangalore, India', date: 'September 2025 — Present', current: true,
    points: ['Developed and enhanced Java backend services for client Telia, implementing REST APIs, Controller and Service-layer components, business logic, and JPA/MySQL integrations.', 'Developed an Alert Management feature, including backend logic for alert generation and processing, with real-time notifications using WebSocket.'], skills: ['Java', 'REST APIs', 'JPA', 'MySQL', 'WebSocket'] },
  { role: 'AI Trainer', company: 'Deccan AI Automation Pvt. Ltd.', location: 'Hyderabad, India', date: 'April 2025 — August 2025',
    points: ['Annotated and quality-checked large-scale Python and SQL datasets, maintaining data integrity across 50+ tasks per week.', 'Evaluated AI model responses using RLHF and provided structured feedback to improve accuracy, reliability, and overall model performance.'], skills: ['Python', 'SQL', 'AI', 'RLHF'] },
  { role: 'Junior Mentor Intern — HackerKid Department', company: 'GUVI Geek Network Pvt. Ltd. (An HCL Initiative)', location: 'Remote', date: 'March 2025 — June 2025',
    points: ['Led interactive live coding sessions and project-based modules in Python, Java, Generative AI, and Web Development.', 'Provided one-on-one mentorship, resolved technical questions, tracked learner progress, and supported engagement with a structured curriculum.'], skills: ['Python', 'Java', 'Generative AI', 'Web Development'] }
];

export const projects = [
  { slug: 'deepfake-detection', number: '01', title: 'Real-Time Deepfake Detection', subtitle: 'Deep learning techniques for media integrity', date: 'March 2024 — June 2024', type: 'Artificial Intelligence', description: 'A deepfake detection system combining LSTM and ResNeXt CNN architectures to identify manipulated media.', highlights: ['94.16% accuracy in identifying manipulated media', 'Automated deepfake video detection pipeline', 'Designed to support media integrity and combat misinformation'], stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Scikit-learn'], github: 'https://github.com/Navya7sri/DEEPFAKE-VIDEO-DETECTION', visual: 'deepfake' },
  { slug: 'craft-corner', number: '02', title: 'Craft Corner', subtitle: 'E-commerce for small-scale handicraft industries', date: 'August 2023 — January 2024', type: 'Mobile Application', description: 'A Flutter-based Android application connecting Kondapalli Toy artisans with global markets.', highlights: ['Connected artisans with customers and broader markets', 'Enabled secure transactions and real-time data insights', 'Streamlined communication between manufacturers and customers'], stack: ['Flutter', 'Android Studio', 'Firebase'], github: 'https://github.com/Navya7sri/CraftCorner--An-E-commerce-Application', visual: 'craft' },
  { slug: 'efficient-care', number: '03', title: 'Efficient Care', subtitle: 'A database-powered hospital management solution', date: 'September 2022 — January 2023', type: 'Web Application', description: 'An interactive hospital information management and appointment booking application built with PHP and MySQL.', highlights: ['Hospital information management', 'Appointment booking functionality', 'Database-driven data handling and interactive user interface'], stack: ['HTML', 'CSS', 'PHP', 'MySQL', 'UI/UX'], github: 'https://github.com/Navya7sri/HOSPITAL-MANAGEMENT-SYSTEM', visual: 'care' }
];

export const skillGroups = [
  { name: 'Programming', items: ['Java', 'Python', 'C', 'SQL'] },
  { name: 'Backend', items: ['Java Backend Development', 'REST APIs', 'JPA', 'WebSocket'] },
  { name: 'Frontend', items: ['Flutter', 'HTML', 'CSS', 'UI/UX'] },
  { name: 'Databases', items: ['MySQL', 'Firebase'] },
  { name: 'AI & Machine Learning', items: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { name: 'Cloud & Platforms', items: ['Google Cloud AI Platform', 'AWS', 'Salesforce', 'Windows', 'Linux', 'Ubuntu'] },
  { name: 'Tools', items: ['VS Code', 'JetBrains IDEs', 'Git'] }
];

export const certifications = [
  { name: 'Certified Application Developer (CAD)', issuer: 'ServiceNow', date: 'March 2025', url: 'https://drive.google.com/file/d/1Se9fYY8PgNSWxouEcP6GRh5FT7wC6Ax4/view?usp=sharing' },
  { name: 'Certified System Administrator (CSA)', issuer: 'ServiceNow', date: 'February 2025', url: 'https://drive.google.com/file/d/1TjPsagsdxfItIc-L7IHZntOe84yVSyFz/view?usp=sharing' },
  { name: 'Google Cloud Associate Cloud Engineer', issuer: 'Google Cloud', date: 'June 2024', url: 'https://drive.google.com/file/d/1gCAKUpp0tTi6rg_M2of6vmr8Rc7cHuor/view?usp=sharing' }
];
