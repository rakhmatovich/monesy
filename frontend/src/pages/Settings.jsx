import React from 'react';
import Layout from "../components/Layout.jsx";

function Settings() {
    return (
        <Layout>
            <div
                className='w-[80%] p-10 h-screen flex flex-col gap-20 items-center text-center justify-evenly relative'>
                <div className="absolute w-full h-screen backdrop-blur-lg top-0 left-0 flex items-center text-center justify-evenly">
                    <h1 className="text-5xl font-semibold">Coming soon...</h1>
                </div>
                <p className='font-bold '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at atque beatae dolor doloribus
                    esse, ipsa maiores minus non perspiciatis porro quam quibusdam saepe sunt tempora vel vitae? Dolor,
                    eum expedita illo iusto quis sunt tempora? Ad dicta nesciunt nihil, odio perspiciatis repellendus
                    ut! A adipisci aliquam amet aperiam assumenda blanditiis cum cupiditate dignissimos distinctio, ea
                    <div className='flex gap-10 justify-center mt-10'>

                        <button className="px-6 py-3 bg-primary">Neutral</button>
                        <button className="px-6 py-3 bg-link">Primary</button>
                        <button className="px-6 py-3 bg-secondary">Secondary</button>
                        <button className="px-6 py-3 bg-success">Accent</button>
                    </div>
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda cupiditate eum ex modi
                    molestias
                    necessitatibus nobis perspiciatis ratione totam! Aperiam architecto beatae deleniti dignissimos
                    ipsum
                    quaerat repellendus totam voluptatem.

                    <div className='flex gap-10 justify-center mt-10'>

                        <button className="px-6 py-3 bg-success">Accent</button>
                        <button className="px-6 py-3 bg-link">Primary</button>
                        <button className="px-6 py-3 bg-primary">Neutral</button>
                        <button className="px-6 py-3 bg-secondary">Secondary</button>
                    </div>
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda cupiditate eum ex modi
                    molestias
                    necessitatibus nobis perspiciatis ratione totam! Aperiam architecto beatae deleniti dignissimos
                    ipsum
                    quaerat repellendus totam voluptatem.
                </p>
            </div>
        </Layout>
    );
}

export default Settings;