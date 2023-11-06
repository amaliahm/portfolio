import {
    mobile,
    backend,
    creator,
    web,
    firebase,
    flutter,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    sqlite,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    audio_player_app,
    snake_game,
    youtube,
    travel_app_design,
    travel_app,
    timetable_app,
    smart_home_app,
    shoes_store,
    registration_pages,
    portfolio,
    payment_app,
    music_app_design,
    meet_app_design,
    fitness_registration_app,
    filmy_site,
    dashboard,
    chat_application,
    chat_app_design,
    buy_and_sell_app_design,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mobile Developer",
    },
    {
      title: "Designer",
    },
    {
      title: "Frontend developer",
    },
  ];

  const technologies = [
    {
      name: 'css',
      image: css
    },
    {
      name: 'html',
      image: html
    },
    {
      name: 'figma',
      image: figma
    },
    {
      name: 'firebase',
      image: firebase
    },
    {
      name: 'flutter',
      image: flutter
    },
    {
      name: 'git',
      image: git
    },
    {
      name: 'github',
      image: github
    },
    {
      name: 'javascript',
      image: javascript
    },
    {
      name: 'reactjs',
      image: reactjs
    },
    {
      name: 'sqlite',
      image: sqlite 
    },
    {
      name: 'tailwind',
      image: tailwind
    },
  ]

  const projects = [
    {
      name: 'audio player app',
      image: audio_player_app,
      description: 'Flutter application where you can - play audio - stop audio - repeat audio - release audio - fast forward - slow forward - auto stop when navigate - all audios are in local API',
      source_code_link: 'https://github.com/amaliahm/audio_player.git',
      tags: ['flutter'],
    },
    {
      name: 'snake game',
      image: snake_game,
      description: 'flutter application: snake game',
      source_code_link: 'https://github.com/amaliahm/snake.git',
      tags: ['flutter'],
    },
    {
      name: 'youtube',
      image: youtube,
      description: 'youtube redesing',
      tags: ['figma'],
      source_code_link: 'none',
    },
    {
      name: 'travel app design',
      image: travel_app_design,
      description: 'travel app desing',
      source_code_link: 'none',
      tags: ['figma'],
    },
    {
      name: 'travel app',
      image: travel_app,
      description: 'Trips is flutter application for the ones who like travelling, the application will show some information about that place, like price, stars, location and a bit description about it, where you can book for 5 persons or less. The application works with API request the load data using flutter cubit/bloc',
      source_code_link: 'https://github.com/amaliahm/trips.git',
      tags: ['flutter'],
    },
    {
      name: 'timetable app',
      image: timetable_app,
      description: "Application for organize your day where you can add tasks with some information for each task and display each day's tasks . Timetable is flutter application with sqflite, where you can: change theme mode (dark / light) - see the date today and all the days after - add task - mark it as completed - delete task - you can add some information about the task like: title note or description for more details - choose the date of your task - choose start time and end time - choose color for the background of the task when display it",
      tags: ['sqlite', 'flutter'],
      source_code_link: 'https://github.com/amaliahm/schedule.git',
    },
    {
      name: 'smart home app',
      image: smart_home_app,
      description: 'single page of homesmart application where you can control Smart TV Smart Light Smart AC Smart Fan',
      source_code_link: 'https://github.com/amaliahm/home.git',
      tags: ['flutter']
    },
    {
      name: 'shoes store',
      image: shoes_store,
      description: 'shoes store app design',
      source_code_link: 'none',
      tags: ['figma'],
    },
    {
      name: 'registration pages',
      image: registration_pages,
      description: 'sign in/up pages desing',
      source_code_link: 'none',
      tags: ['figma']
    },
    {
      name: 'portfolio',
      image: portfolio,
      source_code_link: 'https://github.com/amaliahm/portfolio.git',
      description: 'i made this portfolio',
      tags: ['reactJs', 'firebase']
    },
    {
      name: 'payment app',
      image: payment_app,
      description: 'Flutter mobile application where you can pay your bills all at once, using API',
      tags: ['flutter'],
      source_code_link: 'https://github.com/amaliahm/payment_app.git',
    },
    {
      name: 'music app design',
      image: music_app_design,
      description: 'music app design',
      source_code_link: 'none',
      tags: ['figma']
    },
    {
      name: 'meet app design',
      image: meet_app_design,
      description: 'meet app desing',
      source_code_link: 'none',
      tags: ['figma']
    },
    {
      name: 'fitness registration app',
      image: fitness_registration_app,
      description: 'Fitness Flutter mobile application registration UI: Welcome page - Sign up page - Sign in page -Forget password page',
      tags: ['flutter'],
      source_code_link: 'https://github.com/amaliahm/fitness_app.git'
    },
    {
      name: 'filmy site',
      image: filmy_site,
      description: 'website for films and series',
      source_code_link: 'none',
      tags: ['figma']
    },
    {
      name: 'dashboard',
      image: dashboard,
      description: 'dashboard design',
      source_code_link: 'none',
      tags: ['figma']
    },
    {
      name: 'chat application',
      image: chat_application,
      description: 'chat application where you can -> sign in with google -> have a conversation with your friends ( you can send message, image ) -> set settings',
      tags: ['flutter', 'firebase'],
      source_code_link: 'https://github.com/amaliahm/chat_app.git'
    },
    {
      name: 'chat app design',
      image: chat_app_design,
      description: 'ui design for chat application',
      source_code_link: 'none',
      tags: ['figma'],
    },
    {
      name: 'buy and sell app design',
      image: buy_and_sell_app_design,
      description: 'buy and sell app design',
      source_code_link: 'none',
      tags: ['figma']
    },
  ]
  
  export { services, technologies, projects };