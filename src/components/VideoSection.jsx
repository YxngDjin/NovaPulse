
import { gsap } from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP);

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
            y: -100,
        },{
            opacity: 1,
            y: 1,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: videoRef.current,
                start: "center center",
                onEnter: () => {
                    setTimeout(() => {
                        if(videoRef.current) {
                            videoRef.current.play()
                        }
                    }, 100)
                }
            }
        })

    }, []);

  return (
    <section id='section'>
        <div className='h-screen relative w-full'>
            <p ref={headerRef} className='absolute left-1/9 text-5xl font-semibold top-40 z-20'>
                Designed for Sound. <br/>
                Build for Flow.
            </p>
            <video
             src="/videos/0.mp4" 
             autoPlay
             muted
             playsInline
             ref={videoRef}
             className='scale-70'
            />
            <p ref={secondaryRef} className='absolute bottom-20 right-50 text-text-secondary'>
                Minimalistische Instrumente, <br />
                die deinen kreativen Prozess verstärken.
            </p>
        </div>
    </section>
  )
}

export default VideoSection