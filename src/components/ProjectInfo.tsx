import { useStore } from "@nanostores/react";
import { allProjects, indexProject } from "../stores/projectStore";
import Project from "./Project";

export default function ProjectInfo(){
    const $indexProject = useStore(indexProject)
    const project = useStore(allProjects)[$indexProject]
    return <Project {...project} />
}