import React from 'react'
import { about } from '../data/dummydata'
import { Heading } from '../common/Heading'

export const About = () => {
    return (
        <>
            <section className="about">
                <div className="container flex">
                    {about.map((aboutVal, index) => (
                        <>
                            <div className="left">
                                <img src={aboutVal.cover} alt="profile picture" />
                            </div>
                            <div className="right">
                                <Heading title="About Me" />
                                <p>{aboutVal.desc}</p>
                                <p>{aboutVal.desc1}</p>
                                <button>
                                    Projects
                                </button>
                                <button className="primaryBtn">
                                    More About Me...
                                </button>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}
