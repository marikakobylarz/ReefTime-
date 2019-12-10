import React from 'react';
import Article from '../components/Article';




const articles = [{
    id: 1,
    title: "Our Features",
    title2: "Our projects will change every living space, giving it the overwhelming beauty of sea power.",
    img: 'https://source.unsplash.com/lWY2xGMYbt8/800x800  ',
    text: "Our main goals is to make sure you dream tank stands out from other tanks. We promise to provide fish and other sea creatures in great condition. Our tanks are made of the highest quality materials. We have extensive experience in establishing huge tanks, so we know how important safety and durability are in this type of projects.",
    path: null,

},
{
    id: 2,
    title: "Service",
    title2: "We propose the best services",
    img: 'https://source.unsplash.com/zAd2kgf9RBQ/800x800 ',
    text: " We guarantee creating a unique decor, which will help you express yourself in full harmony with the needs of the tank's inhabitants. In addition to creating unique aqwarias, we also offer a regular service of our projects as well as the necessary professional advice and assistance in further breeding.",
},
{
    id: 3,
    title: "Our team",
    title2: "Experts with high qualification always ready to help",
    img: 'https://source.unsplash.com/s2_f4ijsGHs/800x799',
    text: "Our team of experts is always ready to help you with all ideas. Planning, preparation and implementing are our main priorities. We have extensive experience in implementing projects on both a small and large scale, including world-famous oceanariums in London, Lisbone and other European cities.",
}
]

const About = () => {

    const artList = articles.map(article => (<
        Article key={
            article.id
        } {
        ...article
        }
    />
    ))
    return (<div className="about" > {artList} </div>
    );
}

export default About;