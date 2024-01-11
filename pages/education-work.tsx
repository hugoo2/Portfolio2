// pages/education-work/index.tsx
import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';

const EducationWork: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="p-4">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-2">Éducation et Travail</h1>
                    <p className="text-gray-600">Hugo Charlet - BUT3 Informatique</p>
                </div>


                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Mes langages favoris</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-md shadow-md">
                            <Image
                                src="/web.png"
                                alt="Logo HTML, CSS, PHP"
                                width={256}
                                height={256}
                                className="w-16 h-16 mx-auto mb-2"
                            />
                            <h2 className="text-xl font-semibold text-center">HTML CSS PHP</h2>
                        </div>

                        <div className="bg-white p-4 rounded-md shadow-md">
                            <Image
                                src="/base-de-donnees.png"
                                alt="Logo SQL"
                                width={256}
                                height={256}
                                className="w-16 h-16 mx-auto mb-2"
                            />

                            <h2 className="text-xl font-semibold text-center">SQL</h2>
                        </div>

                        <div className="bg-white p-4 rounded-md shadow-md">
                            <Image
                                src="/java.png"
                                alt="Logo Java"
                                width={256}
                                height={256}
                                className="w-16 h-16 mx-auto mb-2"
                            />

                            <h2 className="text-xl font-semibold text-center">Java</h2>
                        </div>
                    </div>
                </div>

                {/* Nouvelle section "Projets réalisés" */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Projets réalisés</h2>
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold mb-2">HDR</h3>
                            <p className="text-gray-600 mb-2">Création d&apos;un site vitrine en équipe pour une entreprise d&apos;événementiel</p>
                            <p className="text-gray-400">Janvier 2023</p>
                        </div>

                        <div className="bg-white p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Space Invaders</h3>
                            <p className="text-gray-600 mb-2">Développement d&apos;un jeu type Space Invaders en équipe</p>
                            <p className="text-gray-400">Septembre 2022 - Janvier 2023</p>
                        </div>

                        <div className="bg-white p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Marathon</h3>
                            <p className="text-gray-600 mb-2">Projet commun entre le département Informatique et MMI pour la création d&apos;un site web dans le domaine de l&apos;art.</p>
                            <p className="text-gray-400">Décembre 2022</p>
                        </div>

                        <div className="bg-white p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Création d&apos;une API</h3>
                            <p className="text-gray-600 mb-2">Création d&apos;une API en Laravel en équipe pour ensuite l&apos;utiliser dans le projet suivant.</p>
                            <p className="text-gray-400">Décembre 2022</p>
                        </div>

                        <div className="bg-white p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Utilisation d&apos;une API en Angular</h3>
                            <p className="text-gray-600 mb-2">Utilisation de l&apos;API précédente en Angular afin de créer une application.</p>
                            <p className="text-gray-400">Décembre 2022</p>
                        </div>

                        <div className="bg-white p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Générateur de QR Code</h3>
                            <p className="text-gray-600 mb-2">Création d&apos;un générateur de QR Code et gestion des statistiques. Comme par exemple le nombre de scans pour une période choisie</p>
                            <p className="text-gray-400">Décembre 2022</p>
                        </div>


                    </section>
                </div>

            </div>
        </div>
    );
};

export default EducationWork;
