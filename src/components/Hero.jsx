import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useState, useEffect} from "react";
import {smallHeroVideo, heroVideo} from "../utils";

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSrcSet = () => {
        if(window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);

        return () => {
            window.removeEventListener('reisze', handleVideoSrcSet)
        }
    }, [])

    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 2 })
        gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
    }, [])

    return (
        <section id='hero'>
            <div>
                <h1>iPhone 15 Pro</h1>
                <div>
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            
            <div id='cta' className='opacity-0 translate-y-20'>
                <a href='#highlights'>Buy Now</a>
                <p>From ₱57,900 or ₱4,825/mo for 12 months</p>
            </div>
            
        </section>
    )
}
export default Hero
