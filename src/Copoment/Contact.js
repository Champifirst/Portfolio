import React from 'react';

const Contact = () => {
    return (
        <section className='bg-secondery px-5 py-32' id="contact">
            <div className='text-center md:w-[60%] mx-auto text-white'>
                <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2'>
                    Contact Moi
                </h2>

                <p>
                    Si vous avez besoin d'aide pour votre projet web ou avez un projet en tête, n'hésitez pas à me contacter via mon email.
                </p>

                <p className='py-2'>
                    <span className='font-bold'>Email</span> valdeztakam4@gmail.com
                </p>

                <p className='py-2'>
                    <span className='font-bold'>Phone:</span> +237 659 141 969
                </p>
            </div>
        </section>
    );
};

export default Contact;