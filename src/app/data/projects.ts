export interface Project {
  id: number;
  title: string;
  image: string;
  slug: string;
  pageTitle: string;
  description: string;
  video?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DANI VUITTON",
    image: "/danivuitton-mockup.jpg",
    slug: "dani-vuitton",
    pageTitle: "Dani Vuitton.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra laoreet rhoncus. Maecenas consectetur nunc ligula, nec consectetur risus scelerisque et. Aenean feugiat massa",
    video: "/danivuitton-video.mp4",
  },
  {
    id: 2,
    title: "ANANAS",
    image: "/ananas-mockup.jpg",
    slug: "ananas",
    pageTitle: "Ananas.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra laoreet rhoncus. Maecenas consectetur nunc ligula, nec consectetur risus scelerisque et. Aenean feugiat massa",
    video: "/ananas-video.mp4",
  },
  {
    id: 3,
    title: "MILK MAYHAM",
    image: "/milkmayham-mockup.jpg",
    slug: "milk-mayham.",
    pageTitle: "Milk Mayham",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra laoreet rhoncus. Maecenas consectetur nunc ligula, nec consectetur risus scelerisque et. Aenean feugiat massa",
    video: "/milkmayham-video.mp4",
  },
  {
    id: 4,
    title: "CILIEGIA",
    image: "/ciliegia-mockup.jpg",
    slug: "ciliegia",
    pageTitle: "Ciliegia.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra laoreet rhoncus. Maecenas consectetur nunc ligula, nec consectetur risus scelerisque et. Aenean feugiat massa",
  },
];
