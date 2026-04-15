export type TeamMember = {
  name: string;
  role: string;
  education: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
  github: string;
};

export const members: TeamMember[] = [
  {
    name: "Sam Sorensen",
    role: "Full Stack Developer",
    education: "B.S. Computer Science, 2026",
    bio: "Hi, I'm Sam, a Computer Science student at the University of Utah. I'm interested in how software comes together across the full stack, from databases to user interfaces. That led me to focus on full stack development, DevOps, and building reliable CI/CD pipelines that support consistent, low-friction releases. On the SplitMate capstone project, I acted as team lead. I set up deployment on Vercel, defined code review workflows and branching conventions, and contributed to both the backend API and the marketing site. My focus was ensuring features moved smoothly from development to production without bottlenecks. I also built the checkout integration connecting the iOS app to our web payment flow. Outside of school, I spend time skiing, rock climbing, and working on side projects using Swift and TypeScript. I aim to build software that feels simple to use, where the engineering stays invisible and the experience stands out.",
    image: "/member-pictures/sam.png",
    email: "samdsorensen@gmail.com",
    linkedin: "https://www.linkedin.com/in/sam-sorensen/",
    github: "https://github.com/samsorensen",
  },
  {
    name: "Elijah Watchalotone",
    role: "Frontend Developer",
    education: "B.S. Computer Science, 2026",
    bio: "Hey, I'm Elijah, a Computer Science student at the University of Utah. I like frontend development because it's where the design and the logic come together. On SplitMate, I served as Scrum Master while also helping lead the frontend work. I organized sprints, ran standups, tracked blockers, and helped keep the team moving. I also turned Figma designs into working views and worked with the backend team to make sure everything connected smoothly. That mix of leadership and development taught me a lot about communication and knowing when to step in or delegate. Outside of coding, I like the outdoors, reading, and playing ultimate frisbee.",
    image: "/member-pictures/elijah.png",
    email: "ewatchalotone@gmail.com",
    linkedin: "https://www.linkedin.com/in/elijah-watchalotone/",
    github: "https://github.com/ewatchalotone",
  },
  {
    name: "Oliver Liston",
    role: "Backend Developer",
    education: "B.S. Computer Science, 2026",
    bio: "Hi, I'm Oliver, a Computer Science student at the University of Utah. I focus on backend systems, including API design, efficient queries, and making complex processes feel fast and seamless to users. I'm particularly interested in machine learning, computer vision, and turning unstructured data into useful outputs. On the SplitMate capstone, I built core backend services, including an AI-powered receipt scanner that extracts and splits line items from photos. I integrated vision models, developed parsing logic for inconsistent receipt formats, and optimized the pipeline for speed and accuracy. I also worked on expense calculations, group balance reconciliation, and REST APIs to keep user data in sync in real time. Outside of school, I enjoy hiking, playing guitar, and reading research papers. I also experiment with self-hosted systems. I aim to build intelligent backend systems that solve real problems while keeping complexity hidden from users.",
    image: "/member-pictures/oliver.png",
    email: "listonoliver@gmail.com",
    linkedin: "https://www.linkedin.com/in/oliver-liston/",
    github: "https://github.com/liston9",
  },
  {
    name: "Emily Thai",
    role: "VP of Engineering",
    education: "B.S. Computer Science, 2026",
    bio: "Hi, I'm Emily, a Computer Science student at the University of Utah. I’m interested in both the technical and organizational sides of engineering, including how teams coordinate, set priorities, and turn ideas into reliable products. That perspective led me toward roles where I can influence both system design and development process. As VP of Engineering on SplitMate, I guided technical direction, led sprint planning, and helped maintain a clean, scalable codebase. I contributed to features across the iOS app and backend while reviewing pull requests, resolving merge conflicts, and supporting teammates with code quality improvements. Maintaining high standards without slowing progress required clear communication and trust. Outside of academics, I enjoy traveling, exploring local coffee shops, and working on digital illustration and photography. I also volunteer and stay involved in the tech community. I aim to lead engineering teams that build dependable products with strong culture and disciplined execution.",
    image: "/member-pictures/emily.png",
    email: "emily.c.thai@gmail.com",
    linkedin: "https://www.linkedin.com/in/emilychanthai/",
    github: "https://github.com/emilythai24",
  },
];
