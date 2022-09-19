// gitprofile.config.js

const config = {
  github: {
    username: 'eadroma', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 15, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'saif-boukottaya',
    twitter: 'eadroma',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: '',
    phone: '+33 6 45 94 90 28',
    email: 'boukottaya.jr@gmail.com',
  },
  skills: [
    'JavaScript',
    'React.js',
    'Vue.js',
    'Node.js',
    'Express.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
    'Bootstrap',
    'Python',
    'C'
  ],
  experiences: [
    {
      company: 'Olympus',
      position: 'Developer Web',
      from: 'September 2022',
      to: 'now'
    },
    {
      company: 'Reeasy',
      position: 'Full Stack Developer',
      from: 'April 2021',
      to: 'April 2022',
    },
  ],
  education: [
    {
      institution: 'OpenClassrooms',
      degree: 'Web Developer',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'Epitech',
      degree: '1 year',
      from: '2019',
      to: '2020',
    },
    {
      institution: 'Marie Curie Highschool',
      degree: 'High school diploma',
      from: '2018',
      to: '2018',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 3, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  // hotjar: {
  //   id: '2617601', //  Please remove this and use your own id or keep it empty
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
