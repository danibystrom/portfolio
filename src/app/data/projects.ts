export interface Project {
  id: number;
  title: string;
  image: string;
  slug: string;
  pageTitle: string;
  pageSubtitle: string;
  description: string;
  video?: string;
  mobileVideo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DANI VUITTON",
    image: "/danivuitton-mockup.jpg",
    slug: "dani-vuitton",
    pageTitle: "Dani Vuitton.",
    pageSubtitle:
      "This project is a collaborative e-commerce platform, 'Dani Vuitton,' showcasing modern luxury. Built with React, TypeScript, Next.js, and the Material-UI design system, the platform allows users to explore products, view details, add items to their cart, and make purchases seamlessly. The goal was to develop a polished, user-friendly webshop with a sophisticated design.",
    description:
      "This project is a collaborative effort to build a modern e-commerce platform called 'Dani Vuitton' using React, TypeScript, Next.js, and the Material-UI design system with the goal of providing users a seamless shopping experience where they can browse products, view details, add items to their cart, and make purchases. Key technologies include React, a popular library for user interfaces, TypeScript for enhanced code quality, Next.js for server-side rendering, and Material-UI for consistent design. The webshop features a product catalog with detailed descriptions and images, a shopping cart, and an admin dashboard for managing products, all within a responsive design that adapts to different devices.",
    video: "/danivuitton-video.mp4",
    mobileVideo: "/danivuitton-mobilevideo.mp4",
  },
  {
    id: 2,
    title: "ANANAS",
    image: "/ananas-mockup.jpg",
    slug: "ananas",
    pageTitle: "Ananas.",
    pageSubtitle:
      "Ananas is your go-to destination for the latest technology at the best prices. This project is a group assignment where we developed an online store using React, Next.js, TypeScript, and the MUI design system, featuring four main pages: a homepage, a product page, a checkout page, and a confirmation page.",
    description:
      "This project is a group assignment where we developed an online store using React, Next.js, TypeScript, and the MUI design system, featuring a homepage, a product page, a checkout page, and a confirmation page. The homepage displays a variety of products that users can click on to read more on the product page, which provides detailed information about each item with the option to add it to the shopping cart. The checkout page manages the shopping cart, showing quantity, price, and total cost, and allows users to adjust quantities or remove items. The confirmation page summarizes the purchase and provides a unique order number after completion. Administrators can manage products by adding, removing, or editing them on the admin page. Key technologies include React.js for building user interfaces, Next.js for server-rendered and static applications, TypeScript for improved code reliability, and MUI for handling UI components and styling.",
    video: "/ananas-video.mp4",
    mobileVideo: "/ananas-mobilevideo.mp4",
  },
  {
    id: 3,
    title: "MILK MAYHAM",
    image: "/milkmayham-mockup.jpg",
    slug: "milk-mayham.",
    pageTitle: "Milk Mayham.",
    pageSubtitle:
      "In this thrilling game, an adventurous baby must navigate a labyrinth within 60 seconds, collecting formula bottles to score points while avoiding beer bottles that cause dangerous spins. Along the way, time-stopping clocks offer a strategic advantage, freezing the countdown for five seconds. To succeed, the baby must reach the exit door before time runs out, or risk the game ending in failure. If successful, the player’s score is revealed, and the choice to continue or restart the challenge arises. Can you guide the baby through the maze, collect the bottles, and conquer the clock?",
    description:
      "In this fast-paced game, an infant embarks on a mission through a twisting labyrinth, racing against the clock to collect as many formula bottles as possible within 60 seconds. Each formula bottle increases the score, but beware of beer bottles, which can cause the baby to spin uncontrollably. Time-stopping clocks provide a vital advantage, freezing the countdown for a brief period to help rack up points. The ultimate goal is to reach the exit door before time runs out. Succeed, and your score is displayed, giving you the choice to continue or try for a higher score. Built with p5.js and TypeScript using an Object-Oriented Programming approach, this game is designed with custom visuals created in Adobe Photoshop and Figma.",
    video: "/milkmayham-video.mp4",
    mobileVideo: "/milkmayham-mobilevideo.mp4",
  },
  {
    id: 4,
    title: "CILIEGIA",
    image: "/ciliegia-mockup.jpg",
    slug: "ciliegia",
    pageTitle: "Ciliegia.",
    pageSubtitle:
      "Ciliegia Grappa is a unique and exquisite cherry-flavored grappa, crafted for those who appreciate fine and distinctive spirits. If you’re interested in learning more about Ciliegia Grappa, simply reach out through our contact form for all the details.",
    description:
      "This project was created as part of an Interface Design course assignment, where the task was to develop a visual identity and then implement it on the web with the goal of designing a cohesive brand experience and integrating it into a fully functional website. Features include a responsive contact form modal for user inquiries, a simple and intuitive UI built with React, TypeScript, and Material UI, and input validation for the name and email fields.",
    video: "/ciliegia-video.mp4",
    mobileVideo: "/ciliegia-mobilevideo.mp4",
  },
];
