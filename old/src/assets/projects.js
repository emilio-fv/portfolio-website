// Imports
import NotedImg from './Note-d.png';
import ProjectSImg from './Project-S.png';
import VestaImg from './Vesta.png';
import { createProject } from '../utils/createProject';

// Projects Data
const projectData = [
    createProject(
        "Note-d", 
        "https://github.com/emilio-fv/Note-d", 
        "https://note-d.vercel.app/", 
        "A MERN-based social media web application for music enthusiasts to track, review, and share the music they listen to with other users. Users can search for ", 
        ["React", "Redux", "Material-UI", "MongoDB", "Express", "Node"], 
        NotedImg,
         "Note-d project logo"
    ),
    // Project-S
    createProject(
        "Project-S", 
        "https://github.com/emilio-fv/Project-S", 
        null, 
        "A MERN-based project management and bug-tracking web application designed for seamless collaboration among software development teams.", 
        ["Mongoose", "MongoDB", "Express", "JavaScript", "React", "Redux", "Material UI"], 
        ProjectSImg, 
        "Project-S project logo"
    ),
    // Vesta
    createProject(
        "Vesta", 
        "https://github.com/emilio-fv/Vesta", 
        null, 
        "A dynamic e-commerce website for a fake designer with an admin interface to update the products in inventory.", 
        ["Express", "JavaScript", "React", "Redux", "Material UI"], 
        VestaImg, 
        "Vesta project logo"
    )
];

export default projectData;