import { useStore } from "@nanostores/react";
import { allProjects, indexProject } from "../stores/projectStore";
import { useEffect } from "react";

export default function ImagesProjects() {
  const projects = useStore(allProjects);
  const index = useStore(indexProject);

  useEffect(() => {
    const items = document.querySelectorAll(
      "ul li"
    ) as NodeListOf<HTMLLIElement>;
    const imgs = document.querySelectorAll("#images img");
    const mark = document.getElementById("mark");
    const updateBar = ({offsetHeight,offsetLeft,offsetTop,offsetWidth}:HTMLElement) => {
      mark?.style.setProperty("--top", `${offsetTop}px`);
      mark?.style.setProperty("--left", `${offsetLeft}px`);
      mark?.style.setProperty("--width", `${offsetWidth}px`);
      mark?.style.setProperty("--height", `${offsetHeight}px`);
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

    updateBar(items[index]);
    imgs.forEach((img, i) => {
      const image = img as HTMLImageElement;
      setValuesImages(image, i, i);
    });

    window.addEventListener("resize", () => {
      updateBar(items[index])
    });
    items.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        indexProject.set(i);
        updateBar(item)
        imgs.forEach((img, i) => {
          const image = img as HTMLImageElement;
          if (image.getAttribute("id") === item.getAttribute("data-id"))
            setValuesImages(image, 0, 0);
          Array.from(imgs)
            .filter(
              (img) => img.getAttribute("id") !== item.getAttribute("data-id")
            )
            .forEach((img, id) =>
              setValuesImages(img as HTMLImageElement, id + 1, id + 1)
            );
        });
      });
    });
  }, []);

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
            className="transition-all duration-500 rounded-md w-full aspect-video border-blue-500 border-2 absolute -bottom-[var(--bottom)] -right-[var(--right)] -z-[var(--index)]"
            key={image.id}
          />
        ))}
      </div>

      <nav className="bg-gray-800 rounded-md w-full flex justify-center">
        <ul className="flex max-sm:flex-row flex-col w-fit rounded-md p-4 justify-between">
          {projects.map(({ name, image: { id } }) => (
            <li
              data-id={`${id}`}
              key={id}
              className="z-10 cursor-pointer max-sm:text-xs text-md py-2 px-4"
            >
              {name}
            </li>
          ))}
          <div
            id="mark"
            className={`transition-all duration-500 bg-gradient-to-r from-orange-500 to-orange-700 ease-in-out bg rounded-md absolute top-[var(--top)] left-[var(--left)] w-[var(--width)] h-[var(--height)]`}
          ></div>
        </ul>
      </nav>
    </div>
  );
}
