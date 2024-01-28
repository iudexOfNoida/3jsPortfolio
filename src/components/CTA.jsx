import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
            Liked my profile? Connect with me!
        </p>
        <Link to="/contact" className='btn'>Contact</Link>
    </section>
  )
}

export default CTA