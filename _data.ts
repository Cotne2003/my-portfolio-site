export const Data = [
  {
    id: 1,
    title: "audiophile ecommerce website",
    img: "/assets/audiophile.png",
    tools: ["next", "typescript", "styled-components"],
    liveLink: "https://audiophile-ecommerce-website-oh52.vercel.app/",
    codeLink: "https://github.com/Cotne2003/audiophile-ecommerce-website",
  },
  {
    id: 2,
    title: "ABC book",
    img: "/assets/ABCbook.png",
    tools: ["react", "typescript", "styled-components"],
    liveLink: "https://darling-quokka-ea0219.netlify.app/",
    codeLink: "https://github.com/tornike2002/Ecommerce",
  },
  {
    id: 3,
    title: "planets fact site",
    img: "/assets/planets.png",
    tools: ["react", "typescript"],
    liveLink: "https://planets-fact-site-pi-mocha.vercel.app/",
    codeLink: "https://github.com/Cotne2003/planets-fact-site",
  },
  {
    id: 4,
    title: "ecommerce sneakers",
    img: "/assets/sneakers.png",
    tools: ["react", "typescript, tailwind"],
    liveLink: "https://ecommerce-product-page-main-alpha.vercel.app/",
    codeLink: "https://github.com/Cotne2003/EcommerceProductPageMain",
  },
  {
    id: 5,
    title: "todo app",
    img: "/assets/todo.png",
    tools: ["react", "typescript, tailwind"],
    liveLink: "https://todo-list-navy-mu.vercel.app/",
    codeLink: "https://github.com/Cotne2003/Todo-List",
  },
];

export type dataProps = {
  id: number;
  title: string;
  img: string;
  tools: string[];
  liveLink: string;
  codeLink: string;
};
