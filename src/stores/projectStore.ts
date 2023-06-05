import { atom } from 'nanostores';

export const indexProject = atom(0);

export const allProjects = atom([
    {
      name: "Personal Blog",
      image: { url: "/blog.png", id: "blog" },
      description: "This is my personal blog, where i write everithing i want to talk about. Like history, programming, etc.",
      demo:"https://ordinary-blog.vercel.app/"
    },
    {
      name: "Studio Ghibli App",
      image: { url: "/ghibli.png", id:"ghibli"},
      description: "This was an app created with the Studio Ghibli API. This API is hosted by myself.",
      demo:"https://studio-ghibli-rho.vercel.app/"
    },
    {
      name: "InfoJobs CV",
      image: { url: "/infojobs.png", id:"infojobs"},
      description: "This app was created for a hackathon by @midudev and Infojobs, the app use the OpenAI API to make suggestions and OAuth2 of Infojobs to retrieve user data.",
      demo:"https://hackathon-infojobs.vercel.app/"
    }
  ])