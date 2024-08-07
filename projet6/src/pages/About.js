import React from 'react';
import Navbar from '../components/Navbar';
import Footer from './../components/Footer';
import Accordeon from '../components/Accordeon';

const About = () => {
    return (
        <div className='about-main-page page-settings'>
            <Navbar />
            <div className='page-info' >
                <div className='background-div'>
                </div>
                <div className='test-margin'>
                    <Accordeon
                        title="Fiabilité"
                        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                    />
                    <Accordeon
                        title="Respect"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                    <Accordeon
                        title="Service"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                    <Accordeon
                        title="Sécurité"
                        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérfier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"
                    />

                </div >
            </div >
            <Footer />
        </div >
    );
};

export default About;