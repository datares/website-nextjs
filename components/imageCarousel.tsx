import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import { useEffect } from 'react'
import Image from "next/image";

import styles from './imageCarousel.module.css';

const ImageCarousel = (props:any) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })])
    useEffect(() => {
        if (emblaApi) {    
        } 
    }, [emblaApi])

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                {props.images.map((item:any, idx:any) => (
                    <div key={idx} className={styles.embla__slide}>
                        <Image src={item.src} width={500} alt={item.alt} />
                        <p style={{color: 'black'}}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel;
