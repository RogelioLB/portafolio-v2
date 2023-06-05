import { useStore } from "@nanostores/react";
import { allProjects, indexProject } from "../stores/projectStore";
import { useEffect } from "react";


export default function ImagesProjects() {
  const projects = useStore(allProjects)

  useEffect(() => {
    const items = document.querySelectorAll("ul li");
    const imgs = document.querySelectorAll("#images img");
    let initial = items[indexProject.get()];
    const mark = document.getElementById("mark");
    const updateBar = ({ width, height, top, left }: DOMRect) => {
      mark?.style.setProperty("--top", `${top}`);
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

    updateBar(initial.getBoundingClientRect());
    imgs.forEach((img, i) => {
      const image = img as HTMLImageElement;
      setValuesImages(image, i, i);
    });

    items.forEach((item, i) => {
      item.addEventListener("click", () => {
        const rect = item.getBoundingClientRect();
        indexProject.set(i);
        updateBar(rect);
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
  }, []);

  return (
    <div className="flex flex-col items-center gap-12">
      <div
        id="images"
        className="relative [&>img]:transition-all [&>img]:rounded-md w-64 [&>img]:w-64 [&>img]:aspect-video aspect-video [&>img]:border-blue-500 [&>img]:border-2"
      >
        {projects.map(({ image, name }) => (
          <img
            id={image.id}
            src={image.url}
            alt={name}
            className="absolute -bottom-[var(--bottom)] -right-[var(--right)] -z-[var(--index)]"
            key={image.id}
          />
        ))}
      </div>

      <nav className="bg-gray-800 rounded-md">
        <ul className="flex [&>li]:relative [&>li]:z-10 [&>li]:text-xs [&>li]:py-4 [&>li]:px-2 rounded-md p-4 justify-between [&>li]:cursor-pointer">
            {
                projects.map(({name,image:{id}})=>(
                    <li data-id={`${id}`} key={id}>{name}</li>
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
