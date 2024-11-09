import React from 'react'
import ProjectCard from './ProjectCard'
import { title } from 'process'

const ProjectData = [ 
    {
id: 1,
title:"React Portfolio Website",
description: "Project 1 description",
Image: "./images/projects/1.png",
tag: ["All", "Web"],
    },
    {
    id: 2,
title:"Resume Builder",
description: "Project 2 description",
Image: "./images/projects/2.png",
tag: ["All", "Web"],
    },
{    id: 3,
title:"Number Guessing Game",
description: "Project 3 description",
Image: "./images/projects/3.png",
tag: ["All", "Web"],
    },
{    id: 4,
title:"ATM Machine",
description: "Project 4 description",
Image: "./images/projects/4.png", 
tag: ["All", "Web"],
    },
    {    id: 5,
        title:"Todo List",
        description: "Project 5 description",
        Image: "./images/projects/5.png", 
        tag: ["All", "Web"],
            },
            {    id: 6,
                title:"Currency Converter",
                description: "Project 6 description",
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

