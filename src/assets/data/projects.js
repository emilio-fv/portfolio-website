import createProject from '../../utils/createProject';
import notedImg from '../../assets/images/notedHome.png';

const projects = [
    createProject(
        'Noted', 
        'Social media web application for music enthusiasts to share reviews of the music they listen to with other users. Users can search the Spotify database by artist, album, and tracks, while viewing artist and album profiles to view recent reviews. Users can also follow each other to stay up to date on what their friends are listening to.',
        'https://github.com/emilio-fv/Note-d',
        null,
        ['MongoDb', 'Express.js', 'React', 'Node.js'],
        notedImg
    ),
    createProject(
        'Vesta',
        'An e-commerce website for a fake fashion designer. Users can peruse an inventory of clothing products, sorting and filtering by price, size, and color. Products can be added to a shopping cart and added to favorites by logged in users. Once ready, users can checkout their shopping cart to be directed to the payment portal.',
        'https://github.com/emilio-fv/Vesta',
        null,
        ['Express.js', 'React', 'Node.js', 'PostgreSQL'],
        null
    )
];

export default projects;