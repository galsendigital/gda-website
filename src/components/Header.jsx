import React from 'react';
import "./../styles/header.scss";
import logo from './../assets/logo.svg';

const Header = () => {
    return (
        <header id="gda-header" className="pt-4 md:pt-10 px-4 flex flex-row flex-nowrap justify-between items-center w-full xl:w-4/5">
            <div className="flex flex-row flex-nowrap">
                <img src={logo} alt="GDA" className="mr-8" />
                <nav className="w-full hidden flex-row flex-nowrap lg:flex">
                    <ul className="flex flex-row flex-nowrap items-center">
                        <li className="nav-link text-xl font-bold uppercase p-4">
                            <a href="#">Accueil</a>
                        </li>
                        <li className="nav-link text-xl font-bold uppercase p-4">
                            <a href="#">Avantages</a>
                        </li>
                        <li className="nav-link text-xl font-bold uppercase p-4">
                            <a href="#">Ce qu'ils en pensent</a>
                        </li>
                        <li className="nav-link text-xl font-bold uppercase p-4">
                            <a href="#">Services</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <button className="button-gda">
                <a href="#">
                    Contactez nous
                </a>
            </button>
        </header>
    );
}

export default Header;
