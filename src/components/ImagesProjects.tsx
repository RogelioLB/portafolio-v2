import { useStore } from "@nanostores/react";
import { allProjects, indexProject } from "../stores/projectStore";
import { useEffect } from "react";


export default function ImagesProjects() {
  const projects = useStore(allProjects)
  const index = useStore(indexProject)

  useEffect(() => {
    const items = document.querySelectorAll("ul li") as NodeListOf<HTMLLIElement>;
    const imgs = document.querySelectorAll("#images img");
    let initial = items[index];
    const {offsetHeight,offsetLeft,offsetTop,offsetWidth} = initial
    const mark = document.getElementById("mark");
    const updateBar = (top:number,left:number,width:number,height:number) => {
      mark?.style.setProperty("--top", `${top}px`);
      mark?.style.setProperty("--left", `${left}px`);
      mark?.style.setProperty("--width", `${width}px`);
      mark?.style.setProperty("--height", `${height}px`);
    };

    const setValuesImages = (
      image: HTMLImageElement,
      n: number,
      index: number
    ) => {
      const num = n * 15;
      const imageRef: HTMLImageElement | null = document.querySelector(
        `img#${image.id}`
      );
      imageRef?.style.setProperty("--bottom", `${num}px`);
      imageRef?.style.setProperty("--right", `${num}px`);
      imageRef?.style.setProperty("--index", `${index}`);
    };

    updateBar(offsetTop,offsetLeft,offsetWidth,offsetHeight);
    imgs.forEach((img, i) => {
      const image = img as HTMLImageElement;
      setValuesImages(image, i, i);
    });

    window.addEventListener("resize",()=>{
      const {offsetHeight,offsetLeft,offsetTop,offsetWidth} = initial
      updateBar(offsetTop,offsetLeft,offsetWidth,offsetHeight);
    })
    items.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        indexProject.set(i);
        const {offsetHeight,offsetLeft,offsetTop,offsetWidth} = item
        updateBar(offsetTop,offsetLeft,offsetWidth,offsetHeight);
        imgs.forEach((img) => {
          const image = img as HTMLImageElement;
          const id = image.getAttribute("id");
          if (id === item.getAttribute("data-id")) {
            setValuesImages(image, 0, 0);
            const restImages = Array.from(imgs).filter(
              (image) => image.getAttribute("id") !== id
            );
            restImages.forEach((restImage, i) => {
              const image = restImage as HTMLImageElement;
              setValuesImages(image, i + 1, i + 1);
            });
          }
        });
      });
    });
  }, [index]);

  return (
    <div className="flex max-sm:flex-col items-center gap-12">
      <div
        id="images"
        className="flex-shrink-0 basis-[65%] w-[80%] relative aspect-video"
      >
        {projects.map(({ image, name }) => (
          <img
            id={image.id}
            src={image.url}
            alt={name}
            className="transition-all rounded-md w-full aspect-video border-blue-500 border-2 absolute -bottom-[var(--bottom)] -right-[var(--right)] -z-[var(--index)]"
            key={image.id}
          />
        ))}
      </div>

      <nav className="bg-gray-800 rounded-md w-full flex justify-center">
        <ul className="flex max-sm:flex-row flex-col w-fit rounded-md p-4 justify-between">
            {
                projects.map(({name,image:{id}})=>(
                    <li data-id={`${id}`} key={id} className="z-10 cursor-pointer max-sm:text-xs text-md py-2 px-4">{name}</li>
                ))
            }
          <div
            id="mark"
            className={`transition-all bg-gradient-to-r from-orange-500 to-orange-700 ease-in-out bg rounded-md absolute top-[var(--top)] left-[var(--left)] w-[var(--width)] h-[var(--height)]`}
          ></div>
        </ul>
      </nav>
    </div>
  );
}
