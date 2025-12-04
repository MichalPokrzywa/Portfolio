// src/data/projectsData.js
const projects = [
  {
    id: 'Nerd',
    title: 'Demo Nerd Simulator',
    shortDescription:
      'Indie game with absurd combination of a simulator and RPG. ',
    thumbnail: `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3128220/7bfbf163b020bad9ffa5e6d5574f6975b992e2a3/header.jpg?t=1764424464`,
    heroImage: `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3128220/7bfbf163b020bad9ffa5e6d5574f6975b992e2a3/header.jpg?t=1764424464`,
    technologies: ['Unity', 'C#', 'HLSL'],
    year: '2024-2025',
    role: 'Unity Developer',
    description:
      'Absurd combination of a simulator and RPG. I was working on this game in Radikate to demo release. I was responsible for many basic system of the game (Interaction system, Cutscenes, Dialog system, Quest system), created many minigames for ingame system (Catch a gold, hack traffic lights, taking care of the fish, register for job, tracking phone). I had great time working on this game and teached me about creating basic systems in games',
    gallery: [
      `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3525010/ss_2de926a0abd62fc84531cb54e9db0d542067a115.1920x1080.jpg?t=1757365456`,
      `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3525010/ss_052d20a259ceee8f46f0f0601635e4c8e1f053cf.1920x1080.jpg?t=1757365456`,
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3525010/ss_13bf7b4121fbe9ffde37f07872195fafedf50d46.1920x1080.jpg?t=1757365456',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3525010/ss_e9eaa1ab977021522f6140356e6d5ff3572e4de4.1920x1080.jpg?t=1757365456',
    ],
    youtubeIds: ['Dtc4rLfI4Jk'], // jeśli nie masz filmiku, zostaw puste
    videoSrcs: '', // lub usuń to pole
    githubUrl: '',
    liveUrl: 'https://store.steampowered.com/app/3525010/Nerd_Simulator_Demo/',
  },
  {
    id: 'ss',
    title: 'Secret Seeker',
    shortDescription:
      'Indie game where a combination of roguelite, horror, pressure, and secrets that are better left untouched.',
    thumbnail: `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3528320/dedffa1376c938347107ee443a2dcf7f07a42c1f/header.jpg?t=1764642081`,
    heroImage: `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3528320/dedffa1376c938347107ee443a2dcf7f07a42c1f/header.jpg?t=1764642081`,
    technologies: ['Unity', 'C#', 'HLSL'],
    year: '2025',
    role: 'Unity Developer',
    description:
      'Rougelite horror combined with finding items in time. I was responsible for creating some useable items, backend systems and connecting Steam API. I was working with Radikate at start of the production of the game, later left for the personal project.',
    gallery: [
      `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3528320/e307edb0da95f82fdbcc8f21282ae611b958af41/ss_e307edb0da95f82fdbcc8f21282ae611b958af41.1920x1080.jpg?t=1764642081`,
      `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3528320/b9caa3b5c8512958ba8cd7cc943b7dafc0828f19/ss_b9caa3b5c8512958ba8cd7cc943b7dafc0828f19.1920x1080.jpg?t=1764642081`,
    ],
    youtubeIds: ['fKxIBNn00vY'], // PODMIEŃ na ID swojego filmiku z YouTube
    videoSrcs: '', // PODMIEŃ na swoją ścieżkę lub usuń
    pdfSrc: ``,
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'glitchReboot',
    title: 'Glitch Reboot',
    shortDescription:
      'Puzzle game using basic programming to fix glitching world together with spider buddy Buggy',
    thumbnail: `${process.env.PUBLIC_URL}/img/glitchreboot.png`,
    heroImage: `${process.env.PUBLIC_URL}/img/glitchreboot5.png`,
    technologies: ['Unity', 'C#', 'HLSL'],
    year: '2025',
    role: 'Project Manager | Unity Developer | Level Designer',
    description:
      'You are a Robot – a brilliant machine created by the Creator, whose simulated world is starting to glitch. You’re given a mission to restore order. Together with Buggy, you traverse the tower’s labyrinth, solving puzzles to reach the system’s core and bring stability back to the simulation. \n  Game was created for ZTGK 2025 competition, where as a team "Generic Name Studio" we achived finals. In project i was responsible for the core systems (Terminal and code execution, spider procedural walking, cutscene system, loading systems, animation for main character), graphical shaders (glitch shader, terminal shader, skybox shader, cctv camera effect, loading shader) and creating levels (all levels are were handcrafted by me from scrach).',
    gallery: [
      `${process.env.PUBLIC_URL}/img/glitchreboot2.png`,
      `${process.env.PUBLIC_URL}/img/glitchreboot3.png`,
      `${process.env.PUBLIC_URL}/img/glitchreboot4.png`,
    ],
    youtubeIds: [], // PODMIEŃ na ID swojego filmiku z YouTube
    videoSrcs: ['https://github.com/user-attachments/assets/a002c74d-41ca-49b2-9a2c-194af807778e', `${process.env.PUBLIC_URL}/videos/GlitchRebootDemo.mkv`], // PODMIEŃ na swoją ścieżkę lub usuń
    pdfSrc: ``,
    githubUrl: 'https://github.com/MichalPokrzywa/GlitchReboot',
    liveUrl: '',
  },
  {
    id: 'slime',
    title: 'Slime Slayer',
    shortDescription:
      'The knight Sir Roland decided to kill all slimes in slimes  realm. You are the chosenone slime who must stop him.',
    thumbnail: `https://img.itch.zone/aW1hZ2UvMTU4ODQwNC85Mjg4ODUzLnBuZw==/original/pEN3h%2B.png`,
    heroImage: `https://img.itch.zone/aW1hZ2UvMTU4ODQwNC85Mjg4NzQzLnBuZw==/original/t5PFHi.png`,
    technologies: ['Unity'],
    year: '2023',
    role: 'Level Designer | Game Designer',
    description:
      'A 3D "zelda type" game, where you play as slime and can absorb other slimes, upgrade your stats, explore the realm, find the artifacts and fight. In team, i was a level designer and game designer. Game was created for ZTGK 2022, where we claimed TOP3',
    gallery: [
      `https://img.itch.zone/aW1hZ2UvMTU4ODQwNC85Mjg0OTkxLnBuZw==/original/0EmcTc.png`,
      `https://img.itch.zone/aW1hZ2UvMTU4ODQwNC85Mjg4NzQ1LnBuZw==/original/mdBcpI.png`,
      'https://img.itch.zone/aW1hZ2UvMTU4ODQwNC85Mjg4NzQ3LnBuZw==/original/ffMFYM.png',
      'https://img.itch.zone/aW1hZ2UvMTU4ODQwNC85Mjg0OTg4LnBuZw==/original/EGfBoF.png'
    ],
    youtubeIds: '', // PODMIEŃ na ID swojego filmiku z YouTube
    videoSrcs: [`${process.env.PUBLIC_URL}/videos/Slime Slayer - trailer (720p No Audio)-VEED.mp4`], // PODMIEŃ na swoją ścieżkę lub usuń
    pdfSrc: ``,
    githubUrl: '',
    liveUrl: 'https://skngwigk.itch.io/slime-slayer',
  },
  {
    id: 'ant',
    title: 'Adventure',
    shortDescription:
      'Unity game where 2 players are trying to hack system.',
    thumbnail: `https://github.com/user-attachments/assets/b15141ce-d4d1-400d-8063-54899f3c7584`,
    heroImage: `https://github.com/user-attachments/assets/b15141ce-d4d1-400d-8063-54899f3c7584`,
    technologies: ['Unity',"C#"],
    year: '2024',
    role: 'Unity Developer',
    description:
      '3D Game where 2 players are trying to hack system. One player is playing as a "AntDron" to move and attack enemies, where second player is a Hacker and helps hacking system, renew supplies for "AntDron" by playing music (Guitar Hero Minigame). Game is playable only ',
    gallery: [],
    youtubeIds: ['YKJX14YCSx8'], // PODMIEŃ na ID swojego filmiku z YouTube
    videoSrcs: [], // PODMIEŃ na swoją ścieżkę lub usuń
    pdfSrc: ``,
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'lua',
    title: 'LuaLoop',
    shortDescription:
      'Unity game where 2 players are trying to hack system.',
    thumbnail: `https://github.com/user-attachments/assets/cc590282-1f50-4c91-9047-8cc28a4021e1`,
    heroImage: `https://github.com/user-attachments/assets/cc590282-1f50-4c91-9047-8cc28a4021e1`,
    technologies: ['Unity',"C#","Lua"],
    year: '2024',
    role: 'Unity Developer',
    description:
      '3D logic game where, you need to break from room loop by solving terminal code. Game had implemented a Lua code interpreter for terminal code, which i was responsible for. This game was created during Gliwice Bit Festival Hackaton Game Jam 2024, where we claimed 2nd place overall. This game was a prototype for the "Glitch Reboot" game',
    gallery: [],
    youtubeIds: ['yAXDF75BFck'], // PODMIEŃ na ID swojego filmiku z YouTube
    videoSrcs: [], // PODMIEŃ na swoją ścieżkę lub usuń
    pdfSrc: ``,
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'silesia',
    title: 'Autoshop App',
    shortDescription:
      'A mobile app to showcase models of cars, photos and option to register for testdrives',
    thumbnail: `https://github.com/user-attachments/assets/722e9db3-a343-4954-8e29-1fcc974e8359`,
    heroImage: `https://github.com/user-attachments/assets/722e9db3-a343-4954-8e29-1fcc974e8359`,
    technologies: ['Unity',"C#"],
    year: '2023',
    role: 'Intern Unity Developer',
    description:
      'A mobile app to showcase models of cars, photos and option to register for testdrives. Was created during my intership in ItSilesia. App used many API requests for photos and testdrives',
    gallery: [],
    youtubeIds: [], // PODMIEŃ na ID swojego filmiku z YouTube
    videoSrcs: [], // PODMIEŃ na swoją ścieżkę lub usuń
    pdfSrc: ``,
    githubUrl: 'https://github.com/MichalPokrzywa/CarPresentationApp',
    liveUrl: '',
  },
  {
    id: 'terrain',
    title: 'Scene Terrain Generator',
    shortDescription:
      'A project where i was working on the basic untiy terrain, to implement many popular terrain algorytms',
    thumbnail: `https://github.com/user-attachments/assets/54180b0e-dda6-4c46-8d0a-e0251c2cbc38`,
    heroImage: `https://github.com/user-attachments/assets/54180b0e-dda6-4c46-8d0a-e0251c2cbc38`,
    technologies: ['Unity',"C#"],
    year: '2023',
    role: 'Unity Developer',
    description:
      'A project where i was working on the basic untiy terrain, to implement many popular algorytms (Vonoroid, MidPoint Displacement, Perlin Noise) to create a natural looking scene. Outside of creating terrain also added opitons like adding Textures, Vegetation, Details, Water, Shoreline, option to save/lode heightmap of the terrain. In project i also created a custom editor to better showcase all the options',
    gallery: [],
    youtubeIds: [], // PODMIEŃ na ID swojego filmiku z YouTube
    videoSrcs: [], // PODMIEŃ na swoją ścieżkę lub usuń
    pdfSrc: ``,
    githubUrl: 'https://github.com/MichalPokrzywa/TerrainGenerationPP',
    liveUrl: '',
  },
  {
    id: 'wyspy',
    title: '(Research) Implementation of the procedural generation of a terrain model containing floating islands in the Unity engine',
    shortDescription:
      'Bachelor’s thesis about creating a system for procedural generation of terrain model, where one of the options are "Floating islands" inside Unity engine.',
    thumbnail: `https://github.com/user-attachments/assets/f66c8617-63a9-4b79-99d3-1b1781efdcce`,
    heroImage: `https://github.com/user-attachments/assets/f66c8617-63a9-4b79-99d3-1b1781efdcce`,
    technologies: ['Unity',"C#"],
    year: '2024',
    role: 'Unity Developer',
    description:
      'The purpose of this thesis was to implement the procedural generation of a terrain model containing flying islands in the Unity engine. The implementation includes terrain creation, selection of a terrain model to generate where one of the options is "Floating islands", procedural terrain expansion, and allows saving and loading of generated terrains.  inside UNITY engine. Terrain is created with voxels created from scratch using unity mesh system. For pararell creating i used IJobPararell class. The final result of the project is presented in the form of a Windows platform program that demonstrates terrain generation and parameter modification capabilities.',
    gallery: [`${process.env.PUBLIC_URL}/img/Picture1.png`,
      `${process.env.PUBLIC_URL}/img/Picture2.png`,],
    youtubeIds: ['VfMCmproKoY'], // PODMIEŃ na ID swojego filmiku z YouTube
    videoSrcs: [], // PODMIEŃ na swoją ścieżkę lub usuń
    pdfSrc: `${process.env.PUBLIC_URL}/docs/RAU-INZ-295732-2024.pdf`,
    githubUrl: 'https://github.com/MichalPokrzywa/VoxelGenerator',
    liveUrl: '',
  },
  {
    id: 'vrmobility',
    title: '(Research) Immersion Mobility in VR',
    shortDescription:
      'Research where we examine differences in user perception and experience when using two different methods of movement in a VR environment.',
    thumbnail: `https://github.com/user-attachments/assets/0a1e8899-2205-454c-8ab1-3cd27b59609e`,
    heroImage: `https://github.com/user-attachments/assets/0a1e8899-2205-454c-8ab1-3cd27b59609e`,
    technologies: ['Unity',"C#"],
    year: '2024',
    role: 'Unity Developer',
    description:
      'PBL made in Silesian University Of Technology where we examine differences in user perception and experience when using two different methods of movement in a VR environment. Was main programmer where i was responsible for creating basic movement in VR from scrach',
    gallery: [],
    youtubeIds: [], // PODMIEŃ na ID swojego filmiku z YouTube
    videoSrcs: [], // PODMIEŃ na swoją ścieżkę lub usuń
    pdfSrc: `${process.env.PUBLIC_URL}/docs/RaportImersion.pdf`,
    githubUrl: 'https://github.com/MichalPokrzywa/PBL_VRImersion',
    liveUrl: '',
  },
  {
    id: 'autism',
    title: '(Research) A social interaction simulation environment to support the diagnosis of autism spectrum disorders',
    shortDescription:
      'My Master thesis where a research and developed prototype of social interaction simulation environment to support the diagnosis of autism spectrum disorders',
    thumbnail: `${process.env.PUBLIC_URL}/img/autism1.png`,
    heroImage: `${process.env.PUBLIC_URL}/img/autism1.png`,
    technologies: ['Unity',"C#","Praat"],
    year: '2025',
    role: 'Unity Developer',
    description:
      'Social interaction is an effective method for identifying symptoms of autism spectrum disorders. However, subjective evaluation significantly affects the comparability of results obtained from different patients and medical professionals. Modern technologies enable the use of game engines to create simulations that provide consistent and controlled conditions for social interactions. This allows for an objective assessment of the conducted research outcomes. The project aims to develop an environment that supports diagnostics by simulating social interactions within a virtual setting. As part of the thesis, a prototype of such an environment was designed and implemented, and a pilot study was carried out, confirming the technical feasibility of the solution and indicating a promising diagnostic potential of selected eye-tracking and acoustic metrics.',
    gallery: [`${process.env.PUBLIC_URL}/img/autism2.png`,
              `${process.env.PUBLIC_URL}/img/heatmap_ASD.png`,
              `${process.env.PUBLIC_URL}/img/heatmap_Control.png`,
            ],
    youtubeIds: [], // PODMIEŃ na ID swojego filmiku z YouTube
    videoSrcs: [], // PODMIEŃ na swoją ścieżkę lub usuń
    pdfSrc: `${process.env.PUBLIC_URL}/docs/RAu-MGR-295732-2025.pdf`,
    githubUrl: 'https://github.com/MichalPokrzywa/ASDScenarioTest',
    liveUrl: 'https://github.com/MichalPokrzywa/ASDScenarioTest/releases/tag/v1.0.1',
  },
];

export default projects;
