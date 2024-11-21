import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'
import NotFound from './NotFound'
import NotExists from './NotExists'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I create projects driven by curiosity and a passion for learning, always exploring ideas that spark my creativity. I’m more into frontend development than backend, and I specialize in building visually engaging websites with dynamic animations. My projects reflect my technical skills and my commitment to crafting professional, user-friendly experiences.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            {/* <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl} 
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain'  
                />
              </div>
            </div> */}

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-5 font-poppins'>
                <Link
                  to={project.github_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Github Link
                </Link>
                {project.live_link && project.live_link !== 'NA' ? (
                  <Link
                    to={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                ) : project.live_link === 'NA' ? (
                  <NotExists />
                ) : (
                  <NotFound />
                )}

              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-16 flex flex-col gap-3 text-slate-500">
        <p>More projects to come...
        </p>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Projects