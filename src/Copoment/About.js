import React from 'react';
import Sat from '../assets/sat.gif';

const About = () => {
    return (
        <section className="bg-secondery text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">A propos de moi</h2>

                    <p className='pb-5'>
                        Salut! Moi c'est Valdez Takam et tout le monde m'appel Champi. Je suis un developpeur Full Stack
                        Je construis des applications tant front end comme backend en utilisant des technologies telles que:
                        Flutter et React Native pour le mobile, React js et Tailwind CSS pour le front end, 
                        CodeIgniter et JavaScript pour le backend.
                    </p>
                    <p className='pb-5'>
                        Je suis un professionnel en front end et aussi en backend avec des compétences en react.js Redux, Redux Tool kit, Axios, Tailwind, and 
                        Css SaSS, Css3 et bien d'autres.
                    </p>

                    <p>
                        En developpement backend je connais le node.js Express.js, MongoDB, and Mongoose
                    </p>

                    <p>
                       Dans mes moments libres, je forme des jeunes developpeur sur des langages de programmation que je maitrise.
                       C'est formation sont theoriques comme pratique mais surtout pratique.
                    </p>
                </div>

                <div className="about-image">
                    <img
                        src={Sat} 
                        alt="Image de profil"
                        className='lgw-[80%] md:ml-auto'
                        width={250}
                    />
                </div>
            </div>
        </section>

    );
};

export default About;