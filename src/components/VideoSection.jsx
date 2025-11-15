
import { gsap } from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

const VideoSection = () => {
    const headerRef = useRef(null)
    const videoRef = useRef(null)
    const secondaryRef = useRef(null)



    useGSAP(() => {
        gsap.fromTo(headerRef.current, {
            opacity: 0,
            x: -100,
        },{
            opacity: 1,
            x: 0,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 80%',
            }
        })

        gsap.fromTo(videoRef.current, {
            opacity: 0,
            x: -100,
        },{
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: videoRef.current,
                start: "top center",
                once: true,
                onEnter: () => {
                    videoRef.current.play();
                }
            }
        })

    }, []);

  return (
    <section id='section'>
        <div className='md:h-screen relative w-full z-20'>
            <p ref={headerRef} className='md:absolute left-1/9 text-5xl font-semibold top-40 z-20'>
                Designed for Sound. <br/>
                Build for Flow.
            </p>
            <video
             src="/videos/2.mp4" 
             muted
             playsInline
             ref={videoRef}
            />
            <p ref={secondaryRef} className='md:absolute bottom-20 right-50 text-text-secondary'>
                Minimalistische Instrumente, <br />
                die deinen kreativen Prozess verstärken.
            </p>
        </div>
    </section>
  )
}

export default VideoSection