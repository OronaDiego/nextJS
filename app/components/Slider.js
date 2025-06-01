"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import slide1 from '../../public/img/Banner1.avif';
import slide2 from '../../public/img/Banner2.jpg';
import slide3 from '../../public/img/Banner3.jpg';


const images = [
    slide1,
    slide2,
    slide3,
];

export default function Slider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 8000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-screen h-[60vh] overflow-hidden">
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}
        </div>
    );
}
