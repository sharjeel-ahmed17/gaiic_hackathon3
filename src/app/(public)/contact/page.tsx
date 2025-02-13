
import React from 'react'
import ContactForm from './ContactForm'
import { Hero2 } from '@/components/resuable/Hero2'

const Contact = () => {
  return (
    <div>
      <Hero2 title='Contact' />
      <div className='text-center'>

        <h2 className='text-[36px] font-semibold leading-[54px]'>Get In Touch With Us</h2>
        <h3 className='text-[16px] font-normal leading-[24px] px-20'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</h3>
      </div>

      <ContactForm />

    </div>
  )
}

export default Contact
//  