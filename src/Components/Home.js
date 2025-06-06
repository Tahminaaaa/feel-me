import React, { useEffect, useState } from "react";
import Logo from "./Logo"
import humanfeelings from "../Photos/humanfeelings.jpeg"

function Home() {

    const [emotion, setEmotion] = useState("");

    const emotions = ["exhausted", "happy", "calm", "tired"];


    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setEmotion(emotions[index]);
            index = (index + 1) % emotions.length;
        }, 1000);
        return () => clearInterval(interval);
    },);


    return (
        <div className="header bg-stone-200 min-h-screen">
            <div className="flex justify-between items-center px-6 py-4">
                <Logo />
                <div className="menu flex justify-end gap-4 pr-4 font-serif">
                    <p>Why we?</p>
                    <p>Read and write</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-10">
                <div className="headword font-serif text-3xl md:text-6xl md:pt-40 md:w-1/2">
                    <p>I feel myself</p>
                    <span className="highlight highlight-indigo-600 highlight-variant-13">{emotion}</span>
                    <div className="subhead font-serif text-2xl pt-10">
                        <p>Read, Write, Relieve</p>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img className="w-4/5 md:w-2/3 h-auto opacity-60" src={humanfeelings} alt="humanfeelings"></img>
                </div>
            </div>

        </div >
    );
}

export default Home