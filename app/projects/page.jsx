"use client"
import { assets, allWorkData } from '@/assets/assets'
import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import { motion } from "motion/react"
import Link from 'next/link'
const page = () => {
     const [isDarkMode, setIsDarkMode] = useState(false);
    
     useEffect(()=>{
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setIsDarkMode(true)
      }else{
        setIsDarkMode(false)
      }
     },[])
    
     useEffect(()=>{
        if(isDarkMode){
          document.documentElement.classList.add('dark');
          localStorage.theme = 'dark';
        }else{
          document.documentElement.classList.remove('dark');
          localStorage.theme = '';
        }
     },[isDarkMode])

  return (
<>
<Link href={'/#work'} className='fixed w-10 h-10 top-9 left-10'>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiElEQVR4nO2aSWsUURDHf8GYjChqJmbBkx4lon4Jl7jG3OJyU+LFhejV5ayeAgE/hxJDAipx342KS0w8uRxEvRkVlZHCf0OhM5Punl5G8Q8Nmbx6r+p11avtNfzHv4si0AOcAoaB58BH4Kse+/uZxoxmG9BCnaAA7AbGgB9AKeLzHRgFdgHNeWxgHnAYeOuE+gJcBI5KMyv0xufqadH/bOwYcElzgvlvgAG9nEywCXjpBLgD7AEWxVhrMbAXuOvWmwa6SRH2ps44hveAdQmuvwF44NYfSkM7nRLcGHwC9gNzkmbCrzUPAjNO2x1JLb5c6i7J66wkfawCJsVzSjLUhDa34G1gCdmhBbgq3i9lFbFQcOZ0HZhP9pgP3HRmFuvMnHHmZMEuL7Q6qzAHENnFBgc7izMR5szMSCbzbqGDXRAnzDvVCw65wx/KxI64OJGGi42LRmBCstmmqqJZqYIRr6X+sFGyvZ1NK7uch4iDTqUbN0gHDc6T7qhGOCYiy53ibOKp5t8X0zTQLx4jlQiKSqu/xEgAO9wmntUSvEIGSqtvvlWSc7sEuUA0tAOPNdeKqaWkj3Hx21Ju8LQGrZ6IooknGWnC44R4nqQMhjW4lfB5WNaa+N16zlIGLzRoVVwUc8pSEwG63Av8Ax80WAyhiUc5aSLAEvF/Rxl81WATldHgNpHmc4XZA3fQJ4i9kYcZbORyLRuJY1qTOZlWWzXT+mcO+7AGrQMY1f1mrZneau43CIjWPPurA2KPBq1bGAXtOWhmXPw2V0rGgqTROoD1mjQWXdK4sBLRqISxNmYtabxVcmlhn3icr0a0U0RWHBFzMxNq4aSBBtU6JmPfbIHmtQjXU3/YLNlehbmGGHBVXr01Hx5KtgNhJhRcr9cayvWCAecZQ18KdWvSjJpjeWMN8FkyRb7KGHJvwNqWeaFNTTmTZTDOAgW1hUryQnk0sRcAtyTDrVruGduUmAXXCvY7KxSBa+I9ncSFz3KnWjOz1WRzJqbE07LyZUkt3OHMbEa9V3OHSaNR3umzMyfL5RJFwTmAIA3pTjBi21WGrz4H07573+DUHnTt+2N+xVBU7hSkHSWZUpK3xbNq55BLZ0rKSC29Pq6+U5fcdpOeVl0a9Ypm3PUJgrTjQF5fQDSrKz6iEiBqk+GbKtO+vDZQDovUi7Wq7Zzqkvfuo5r3SvPPimZLtXriP/jL8RMhpXAUmuIBHwAAAABJRU5ErkJggg==" alt="circled-left-2"></img>
</Link>

    <div className=' w-full px-[12%] py-10 scroll-mt-20 flex flex-col justify-center items-center'>

    <h4 className='text-center  mb-2 text-2xl font-semibold'>My Live Projects</h4>
    <div
    className='grid grid-cols-auto my-10 gap-5 dark:text-black w-full'>
        {allWorkData.map((project, index)=>(
          <a href={project.link} key={index}>
            <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='aspect-square bg-no-repeat bg-cover rounded-lg relative cursor-pointer group'
            style={{backgroundImage: `url(${project.bgImage})`,backgroundPosition:`50% 75%`}}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-green-500 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                </div>
                
            </motion.div>
            </a>
        ))}
    </div>
    
    </div>
    </>
  )
}

export default page
