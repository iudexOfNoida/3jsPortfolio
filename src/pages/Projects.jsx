import React from 'react'
import { projects } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-5 gap-3 text-slate-500'>
        <p>
          I have worked on various technologies in my college and later on continued on technologies I have interest on. I have done projects on domains like web development, mobile development, artificial intelligance and machine learning, chatbots and recently picked up 3D website development using react. 
          <br />
          Apart from this I have contributed in various hackathons and competitions. I like to explore new domains and technologies. Here are some of my projects: 
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Some Projects</h3>
        <div className="mt-16 flex flex-col gap-12">
          {projects.map((project)=>(
            <div className='block-container flex flex-row'>
              <div className='block-container flex flex-row h-20 w-20'>
                <div className='btn-front rounded-xl flex items-center'>
                  <img 
                    src={project.iconUrl}
                    className="s-1/2 h-1/2 object-contain"
                    />
                </div>
              </div>
              <div className='ml-5 flex justify-center items-center'>
                SITE UNDER CONSTRUCTION
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Projects