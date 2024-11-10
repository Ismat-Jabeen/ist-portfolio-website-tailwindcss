import React from 'react'
import ProjectCard from './ProjectCard'
import { title } from 'process'

const ProjectData = [ 
    {
id: 1,
title:"Responsive React Portfolio Website",
description: "A Personal portfolio built with React highlighting my web development projects and skills",
Image: "./images/projects/1.png",
tag: ["All", "Web"],
    },
    {
    id: 2,
title:"Resume Builder",
description: "A resume builder application that allows users to create and edit their resumes in real-time",
Image: "./images/projects/2.png",
tag: ["All", "Web"],
    },
{    id: 3,
title:"Number Guessing Game",
description: "A number guessing game is a fun, interactive game where players try to guess a randomly chosen number within a certain range, using clues to narrow down their guesses",
Image: "./images/projects/3.png",
tag: ["All", "Web"],
    },
{    id: 4,
title:"ATM Machine",
description: "An ATM machine is a convenient electronic device that allows bank customers to perform financial transactions, such as withdrawing cash or checking account balances, without visiting a bank branch.",
Image: "./images/projects/4.png", 
tag: ["All", "Web"],
    },
    {    id: 5,
        title:"Todo List",
        description: "A to-do list is a simple organizational tool that helps people keep track of tasks and prioritize their daily activities.",
        Image: "./images/projects/5.png", 
        tag: ["All", "Web"],
            },
            {    id: 6,
                title:"Currency Converter",
                description: "A currency converter is a tool that allows users to easily calculate the exchange rate between different currencies in real-time.",
                Image: "./images/projects/6.png", 
                tag: ["All", "Web"],
                    },
            

 ]




const ProjectsSection = () => {
  return (
    <>
     <h2 className='text-center text-4xl font-bold text-white mb-6'>
        My Projects
        </h2> 
     <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {ProjectData.map((project) => (
        <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.Image}
        // tag={project}
        />
        ))}
        </div>
    </>
  )
}

export default ProjectsSection

