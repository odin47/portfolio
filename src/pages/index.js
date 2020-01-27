import React from 'react'



//COMPONENTS
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Education from '../components/Education';

const index = () => {
    return (
        <Layout>
            <Hero />
            <Skills />
            <Education />
        </Layout>
    )
}

export default index;

