import TextType from './TextType'


const Hero = () => {

  return (
    <section id='hero'>
        <div className='flex w-full'>
                <img 
                    src='Hero.svg'
                    className='w-full z-10 abs-center'
                />
                <img 
                    src='/Stars.svg'
                    className='hidden md:block right-1 absolute z-1'
                />
        </div>
        <div className='absolute z-30 md:bottom-30 md:left-40 md:text-left text-center bottom-30'>
                <TextType 
                    text={["The Rhythm of Tomorrow"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={false}
                    cursorCharacter="|"
                    loop={true}
                    className='text-6xl font-bold text-gray-500'
                />
                <div>
                    <p className='text-gray-500 mt-3'>
                        Minimalistischer Synthesozer. <br/>
                        Pure Inspiration.
                    </p>
                </div>
                <div>
                    <button className='text-white pointer-cursor hover:text-gray-500 font-semibold text-2xl w-[300px] py-6 bg-gradient-btn rounded-xl mt-5'>
                        Endecke Synthesizer
                    </button>
                </div>
        </div>
    </section>
  )
}

export default Hero