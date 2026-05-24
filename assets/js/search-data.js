// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Hands-on test automation work and side experiments.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A snapshot of my professional history, skills, and certifications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-career",
          title: "career",
          description: "The longer story behind the CV — how I ended up an SDET.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/career/";
          },
        },{id: "post-here-we-go-again",
        
          title: "Here We Go Again",
        
        description: "Laid off from Giv. Pointing my energy at a new to-do list app and its full testing stack.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/here-we-go-again/";
          
        },
      },{id: "post-i-got-an-interview-plus-python-page-object-model-refresher",
        
          title: "I Got An Interview! Plus Python Page-Object-Model Refresher",
        
        description: "First interview in months — and scaffolding a Python + Selenium Page Object Model project to get back into shape.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/i-got-an-interview-and-python-pom/";
          
        },
      },{id: "post-web-development-and-lots-of-job-apps",
        
          title: "Web Development and Lots of Job Apps",
        
        description: "Shouting into the LinkedIn void, drafting a first-pass career story for the site, and learning CSS Grid.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/webdev-and-job-apps/";
          
        },
      },{id: "post-web-development-test-automation-portfolio-organization-and-a-live-blog",
        
          title: "Web Development, Test Automation Portfolio Organization, and a Live Blog",
        
        description: "Three rejections before lunch, picking The Odin Project back up, and tidying the test-automation portfolio repo.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/github-page-web-development-and-readmes/";
          
        },
      },{id: "post-welcome-to-my-blog",
        
          title: "Welcome to My Blog!",
        
        description: "Kicking off this blog as a working log of what I&#39;m building, learning, and studying day to day.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/welcome-to-my-daily-log/";
          
        },
      },{id: "projects-test-portfolio",
          title: 'test-portfolio',
          description: "A working portfolio of test automation samples across Cypress, Playwright, Python Selenium, and Pact.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_test_portfolio/";
            },},{id: "projects-travwritescode-github-io",
          title: 'travwritescode.github.io',
          description: "This site — a Jekyll-based portfolio and blog, deployed to GitHub Pages.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_this_site/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%72%61%76%69%73.%61%6E%64%65%72%73%6F%6E%33%30@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/travwritescode", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/travis-anderson-sdet", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
