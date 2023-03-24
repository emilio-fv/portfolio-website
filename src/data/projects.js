import NotedImg from '../images/Note-d.png';
import ProjectSImg from '../images/Project-S.png';

function createProject(title, github, description, technologies, src, alt) {
    return { title, github, description, technologies, src, alt };
}

const projectData = [
    // Note-d
    createProject("Note-d", "https://github.com/emilio-fv/Note-d", "A Flask-based web application for music enthusiasts to track, review, and share the music they listen to with other users. The 'Search Music' feature is built utilizing the Spotify API so users can search for any artist, album, or song that is currently in Spotify's database.", ["Python", "Flask", "Bulma CSS", "Responsive Design"], NotedImg, "Note-d project logo"),
    // Project-S
    createProject("Project-S", "https://github.com/emilio-fv/Project-S", "A MERN-based project management and bug-tracking web application designed for seamless collaboration among software development teams.", ["Mongoose", "MongoDB", "Express", "JavaScript", "React", "Redux"], ProjectSImg, "Project-S project logo"),
]

export default projectData;