import React from 'react';
import Article from '../components/Article';


const articles = [
    {
        id: 1,
        title: "About",
        title2: "Dreaming about an individual marine aquarium? Take the first step towards your main dreams",
        text: "Creating a beautiful sea tank requires a good plan and knowledge of breeding beautiful creatures. With our experience, we will help you achieve your dreams and create an aquarium, which will be enjoyed by your fish and you.",
        img: "https://source.unsplash.com/5iiI5wVXY8M/800x800  ",
        path: '/about',
        pathName: 'Read more about us',

    },
    {
        id: 2,
        title: "Services",
        title2: "We are not afraid of challenges",
        text: "The amazing design of any size and unusual shape tanks is not new to our team. We are ready for large scales and areas. Find out about our projects.",
        img: "https://source.unsplash.com/XgIwVSXhHHw/800x800",
        path: '/gallery',
        pathName: 'Visit our gallery',
    },
    {
        id: 3,
        title: "Our Projects",
        title2: "A piece of the sea at your home",
        text: "In our projects, we care about the appearance and harmony with the environment, but whats more important, we care about health and safety of the inhabitants of the aquarium. Thanks to us, you can have your little piece of sea in your own home. Sounds tempting ? Contact us!",
        img: "https://source.unsplash.com/2fhK5wKWOjs/800x800",
        path: "/contact",
        pathName: "Contacts",
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;