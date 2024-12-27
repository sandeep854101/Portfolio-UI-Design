import React from 'react'
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
function Experience() {
    const cardItem =[
        {
            id:1,
            logo:html,
            name:"html"
        },
        {
            id:2,
            logo:css,
            name:"css"
        },
        {
            id:3,
            logo:java,
            name:"java"
        },
        {
            id:4,
            logo:javascript,
            name:"javascript"
        },
        {
            id:5,
            logo:oracle,
            name:"oracle"
        },
        {
            id:6,
            logo:spring,
            name:"spring"
        },
        {
            id:7,
            logo:springBoot,
            name:"springBoot"
        }
    ]
  return (
    <div name="Experience" className='w-[80%] mx-auto mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <p >I have done this project Sandeep kumar</p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-16'>
            {
                cardItem.map(({id,logo,name})=>(
                    <div className='flex flex-col items-center justify-center border-[2px] rounded-full shadow-md md:w-[200px] md:h-[200px] p-1 cursor-pointer lg:hover:scale-105 duration-300' key={id}>
                        <img src={logo} className='w-[150px]
                         rounded-full 
                          ' alt="" />
                       <div>
                        <div>{name}</div>
                       </div>
                       
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Experience
