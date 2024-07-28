import React from 'react';
import SmartSchool from '../assets/smartSchool.png';
import SmartSchool2 from '../assets/smartSchool1.png';
import WebDach from '../assets/admin.png';
import Tutore from '../assets/tutore.png';

const Projet = () => {
    const projects =[
        {
            img: SmartSchool,
            title: 'Smart School',
            desc: 'Application de publication des épreuves et aussi des anonces éducatives',
            live: 'https://smartdiso.tech/disoSchool/smartSchool/',
            code: 'https://github.com/ChampiFirst/smartDiso',
        },
        {
            img: SmartSchool2,
            title: 'Smart School',
            desc: 'Application de localisation des établissements scolaires',
            live: 'https://smartdiso.tech/disoSchool/smartSchool/',
            code: 'https://github.com/ChampiFirst/smartDiso',
        },
        {
            img: Tutore,
            title: 'Tutore',
            desc: 'Application Signalisation des accidents sur la route au Cameroun',
            live: 'https://tutore/',
            code: 'https://github.com/ChampiFirst/smartDiso',
        },
        {
            img: WebDach,
            title: 'WebDACH',
            desc: 'Dach board pour l\'application de publication des epreuves et annonces',
            live: 'https://smartdiso.tech/school.php',
            code: 'https://github.com/ChampiFirst/WebDACH',
        }
    ];

    return (
        <section className='bg-primary text-white px-5 py-32' id="projet">
            <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between'>
                <div className="about-info mb-5">
                    <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2'>
                        Mes Projets
                    </h2>
                    <p className='pb-5'>
                        Voici en quelques sorte mes meilleurs projets. Ils ont été construits à partir des technologies comme:
                        Flutter, React Native, Php, React.js.
                    </p>
                </div>

                <div className='about-img'></div>
            </div>

            <div className='projects container mx-auto grid md:grid-cols-3 gap-10'>
                {projects.map((project, i) => {
                    return (
                        <div className='relative' key={i}>
                            <img src={project.img} alt={project.title} />

                            <div className='flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100'>
                                <p className='py-5 text-center font-bold px-2 text-white'>
                                    {project.desc}
                                </p>

                                <div className='mx-auto'>
                                    <a 
                                        href={project.live}
                                        className='px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold'
                                    >
                                        Live
                                    </a>

                                    <a
                                        href={project.live}
                                        className='px-5 py-2 bg-blue-500 hover:bg-blue-800 font-bold'
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projet;