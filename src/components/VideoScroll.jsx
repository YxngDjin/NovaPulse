import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { features } from "../constants";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import Cards from "./Cards";


const VideoScroll = () => {
    const videoRef = useRef(null);

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    useGSAP(() => {
        const video = videoRef.current;

        const featureTl = gsap.timeline({
            scrollTrigger: {
                trigger: video,
                start: "top center",
                end: "bottom top",
                scrub: 1,
            }
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: video,
                start: "center center",
                end: "+=3500",
                scrub: true,
                pin: true,

            }
        })
        .to(
            video,
            { currentTime: 6, ease: "none" }
        );
        

        featureTl
            .to('.box1', { opacity: 1, y: 0, delay: 1 })

            .to('.box2', { opacity: 1, y: 0 })

            .to('.box3', { opacity: 1, y: 0 })
    }, []);

  return (
    isMobile
        ? 
            <div className="w-full relative h-screen">
                <div className="absolute z-10">
                    <video 
                        src="/videos/3.mp4"
                        muted
                        playsInline
                        autoPlay 
                        loop
                    />
                </div>
                <div className="absolute w-full px-3 left-1/2 top-40 -translate-x-1/2 z-50">
                    {features.map((feature, index) => (
                        <div key={index} className="mt-6">
                            <Cards 
                                title={feature.highlight}
                                description={feature.text}
                                icon={feature.icon}
                            />

                        </div>
                    ))}
                </div>
            </div>
        :
            <section id='video-scroll' className="z-10 md:flex hidden relative">
        <div >
            <video 
                ref={videoRef}
                src='/videos/3.mp4'
                muted 
                playsInline
                className=" w-full max-w-[700px] scale-[0.6] origin-center relative z-10"
            >
            </video>

            <div className="abolute inset-0">
                {features.map((feature, index) => (
                    <div 
                        key={feature.id}
                        className={clsx('box', `box${index + 1}`, feature.styles)}
                    >
                        <div className="flex gap-4">
                            <img 
                            src={feature.icon}
                            alt={feature.highlight}
                            className="w-10"
                        />
                        <p className="flex flex-col">
                            <span className="text-white">{feature.highlight}</span>
                            {feature.text}
                        </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default VideoScroll