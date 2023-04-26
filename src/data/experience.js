function createExperience(title, company, dates, description, location) {
    return { title, company, dates, description, location }
};

const experienceData = [
    // Coding Dojo
    createExperience("Full-Stack Developer Certificate", "Coding Dojo", "Aug - Nov 2023", ["An immersive 1000+ hours, 4-month full-stack web development bootcamp that specializes in building, testing, debugging, and deploying full-stack applications in Python, C#, and MERN (MongoDB, Express, React, Node.js)."], "Coding Dojo (Remote)")
];

export default experienceData;