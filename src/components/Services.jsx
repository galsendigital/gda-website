import React from "react"
import "./../styles/services.scss"

const Services = () => {
    return (
        <section id="services" className="w-full pt-6 md:pt-8 flex flex-col flex-wrap justify-center items-center text-center text-white">
            <div className="w-full flex flex-col flex-wrap justify-center items-center uppercase font-bold sm:w-4/5 md:w-full xl:w-4/5 lg:justify-between">
                <h3 className="text-xl md:text-2xl w-full md:w-4/5">
                    EN PLUS DE LA CRÉATION DE SITES / APPLICATIONS WEB,
                    L’AGENCE PROPOSE ÉGALEMENT DES SERVICES DE:
                </h3>
            </div>
        </section>
    )
}

export default Services