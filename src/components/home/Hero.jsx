import React from 'react'
import { home } from '../data/dummydata'
import Typewriter from 'typewriter-effect'

export const Hero = () => {
    return (
        <>
            <section className="hero">
                {home.map((homeVal, index) => (
                    <div className="heroContainer">
                        <h2>{homeVal.text} </h2>
                    <h1>
                        <Typewriter 
                            options = {{ strings: [`${homeVal.name}`, `${homeVal.post}`, `${homeVal.shortDesc}`], autoStart: true, loop: true }} 
                        />
                    </h1>
                    <p>{homeVal.longDesc}</p>
                    <button className="primaryBtn">
                        Projects
                    </button>
                    </div>
                ))}
            </section>
        </>
    )
}
