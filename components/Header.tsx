// components/Header.tsx
import React from 'react';
import Link from 'next/link';


const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav>
                <ul className="flex space-x-4 justify-center font-semibold">
                    <li className="my-2">
                        <Link href="/" legacyBehavior>
                            <a className="hover:underline">Accueil</a>
                        </Link>
                    </li>
                    <li className="my-2">
                        <Link href="/about" legacyBehavior>
                            <a className="hover:underline">À propos</a>
                        </Link>
                    </li>
                    <li className="my-2">
                        <Link href="/education-work" legacyBehavior>
                            <a className="hover:underline">Éducation/Travail</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
