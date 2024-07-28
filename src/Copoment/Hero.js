import React from "react";
//import Progaming from '../assets/programming.gif';
import Code from '../assets/code.png';
import { AiOutlineTwitter,
    AiOutlineYoutube,
    AiOutlineFacebook 
} from "react-icons/ai";

const Hero = () => {
    return (
        <section className="bg-primary px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-6xl">
                        Salut, <br /> Je suis <span className="text-accent">V</span>aldez, <br />
                        Developpeur Full Stack
                    </h1>

                    <p className="py-5">
                        Je suis un professionnel en Flutter, JavaScript, React.js, React Native, PHP, CodeIgniter, Tailwind CSS
                    </p>

                    <div className="flex py-5">
                        <a className="pr-4 inline-block text-accent hover:text-white" href="#">
                            {""}
                            <AiOutlineTwitter size={40} /> {""}
                        </a>

                        <a className="pr-4 inline-block text-accent hover:text-white" href="#">
                            {""}
                            <AiOutlineYoutube size={40} /> {""}
                        </a>

                        <a className="pr-4 inline-block text-accent hover:text-white" href="">
                            {""}
                            <AiOutlineFacebook size={40} /> {""}
                        </a>

                        <a className="pr-4 inline-block text-accent hover:text mt-3 hover:text-white" href="">
                            Voir mes Projects
                        </a>
                    </div>

                </div>
                    <div className="hero-img">
                        <img
                            src={Code} 
                            alt="Image de profil"
                            className='lgw-[80%] md:ml-auto'
                            width={400}
                        />
                    </div>
            </div>
        </section>
    )
}


export default Hero;
