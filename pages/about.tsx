// pages/about/index.tsx
import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-4">À propos de moi</h1>
                <h1>Mon alternance chez Nativ-Creation</h1>

                <a href="https://www.nativ-creation.com/index.htm">
                    <Image
                        src="/logo_nativ.png"
                        alt="Logo Nativ-Creation"
                        width={512}
                        height={512}
                        className="logo-nativ"
                    />
                </a>

                <hr className="separation-alternance" />

                <p>
                    Je suis actuellement en alternance chez Nativ-Creation, une entreprise spécialisée dans le développement web.
                    Cette expérience m&apos;offre l&apos;opportunité de plonger au cœur de l&apos;univers digital et de découvrir de nouvelles technologies passionnantes.
                </p>

                <p>En tant qu&apos;alternant, je suis impliqué dans des projets variés qui me permettent d&apos;explorer différentes facettes du web. Mon rôle principal consiste à développer des sites web en utilisant des langages tels que HTML, CSS et JavaScript. Ces langages me permettent de donner vie aux idées créatives et de concevoir des interfaces interactives et attractives pour les utilisateurs.</p>

                <p>Au-delà des compétences front-end, je me familiarise également avec le langage SQL pour travailler avec des bases de données. Cette compétence est essentielle pour gérer et organiser efficacement les données des applications web.</p>

                <p>Travailler chez Nativ-Creation m&apos;offre une véritable immersion dans le monde du développement web. Chaque jour, je découvre de nouvelles techniques, outils et bonnes pratiques qui contribuent à mon apprentissage et à mon développement professionnel.</p>

                <p>L&apos;équipe chez Nativ-Creation est incroyablement compétente et bienveillante. J&apos;ai la chance de pouvoir travailler aux côtés de développeurs expérimentés qui partagent généreusement leur expertise. Leur soutien et leurs conseils précieux sont d&apos;une grande aide dans mon parcours d&apos;apprentissage.</p>

                <p>L&apos;alternance chez Nativ-Creation représente pour moi une véritable opportunité de mettre en pratique mes connaissances théoriques acquises lors de ma formation. Je suis constamment stimulé par de nouveaux défis et projets passionnants qui me permettent de développer mes compétences et d&apos;affiner ma compréhension du web.</p>

                <p>En somme, l&apos;alternance chez Nativ-Creation est une expérience extrêmement enrichissante. Elle me permet de m&apos;épanouir dans le domaine du développement web en explorant les différents aspects du métier. Je suis enthousiaste à l&apos;idée de continuer à grandir et à évoluer au sein de cette entreprise dynamique et innovante.</p>


            </div>
        </div>
    );
};

export default About;
