// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Leevandr', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 0, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['Leevandr/java-exercise'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
      },
    },
  },
  seo: {
    title: 'Portfolio of Lev Ustimenko',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'lev-ustimenko',
    twitter: 'leevandr_lev',
    mastodon: 'levandr@mastodon.social',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'leevandr',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '@leevandr',
    website: 'https://levandr.me/',
    phone: '',
    email: 'leva3175@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Spring',
    'PostgreSQL',
    'MySQL',
    'Docker',
    'Linux',
    'GitHub',
    'Gradle',
  ],
  experiences: [
    {
      company: 'Edu51',
      position: 'INTERN',
      from: 'September 2022',
      to: 'December 2022',
      companyLink: 'https://edu-51.ru',
    },
    {
      company: 'Edu51',
      position: 'Junior Developer',
      from: 'December 2022',
      to: 'January 2024',
      companyLink: 'https://edu-51.ru',
    },
  ],
  educations: [
    {
      institution:
        'Russian Academy of National Economy and Public Administration under the President of the Russian Federation (RANEPA)',
      degree: 'Bachelor',
      from: '2022',
      to: '2026',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Levandr <a 
      class="text-primary" href="https://github.com/Leevandr"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
