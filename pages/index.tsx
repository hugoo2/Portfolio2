import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';


const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="p-4">
                <div className="flex items-center mb-6">
                    <Image
                        src="/hugo_charlet.jpg"
                        alt="Photo de Hugo Charlet"
                        width={256}
                        height={256}
                        className="rounded-full w-32 h-32 mr-4"
                    />

                    <div>
                        <h1 className="text-3xl font-bold mb-2">Bienvenue sur ma page d&apos;accueil</h1>
                        <p className="text-gray-600">Hugo Charlet - BUT3 Informatique</p>
                    </div>
                </div>

                <p className="mb-4">
                    Salut, je m&apos;appelle Hugo Charlet. Je suis actuellement en BUT3 Informatique à l&apos;IUT de Lens et je suis apprenti développeur web chez Nativ Creation, une entreprise basée à Villeneuve d&apos;Ascq.
                </p>

                <p className="mb-4">
                    Passionné par la programmation, je m\&apos;intéresse particulièrement au développement web et aux technologies modernes.
                </p>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Compétences en programmation :</h2>
                    <div className="flex space-x-2">
                        <div className="bg-blue-200 text-blue-800 py-1 px-2 rounded">
                            HTML
                        </div>
                        <div className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded">
                            CSS
                        </div>
                        <div className="bg-red-200 text-red-800 py-1 px-2 rounded">
                            JavaScript
                        </div>
                        <div className="bg-purple-200 text-purple-800 py-1 px-2 rounded">
                            PHP
                        </div>
                        <div className="bg-green-200 text-green-800 py-1 px-2 rounded">
                            Java
                        </div>
                        {/* Ajoute d&apos;autres langages de programmation ici */}
                    </div>
                </div>

                <p className="mb-4">
                    Mes compétences incluent également la gestion de bases de données, l&apos;utilisation de frameworks tels que Laravel et Symfony, et la conception d&apos;interfaces utilisateur conviviales. J&apos;ai travaillé sur des projets variés allant de la création de sites web dynamiques à la mise en place de solutions e-commerce.
                </p>

                <p className="mb-4">
                    En dehors du code, j&apos;aime explorer de nouvelles technologies, participer à des hackathons et partager mes connaissances avec la communauté. Sur cette page, tu trouveras des informations sur mon parcours éducatif, mes expériences professionnelles, et bien plus encore.
                </p>
                {/* Ajoute plus de contenu personnalisé ici */}
            </div>
        </div>
    );
};

export default Home;
