import React from 'react'
import navItems from '../constants'

const Navbar = () => {
  return (
    <section id='navbar'>


      <div className='flex w-full items-center justify-between'>
        <div>
            <img 
                src='/logo.svg'
                alt='logo'
                className='w-10 h-10'
            />
        </div>

        <div className='hidden md:flex gap-5'>
            {navItems.map(({id, name, link }) => (
                <a 
                    href={link}
                    key={id}
                >
                    {name}
                </a>
            ))}
        </div>

        <div className='flex gap-5'>
            <button>
                <img 
                    src='/icons/bag.svg'
                    alt='card'
                />
            </button>
            <button>
                <img 
                    src='/icons/search.svg'
                    alt='search'
                />
            </button>
        </div>
      </div>
    </section>
  )
}

export default Navbar