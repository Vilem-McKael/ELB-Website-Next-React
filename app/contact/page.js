'use client';

import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import SubmitIcon from '@/public/icons/018-email.svg'
import { useRouter } from 'next/navigation';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {

  const router = useRouter();

  const [state, handleSubmit] = useForm("xblryjzd")
  const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(() => {
    if (state.succeeded) {
      setHasSubmitted(true)
    }
  }, [state.succeeded])


  return (
    <div className='w-full sm:h-full flex flex-col items-center justify-between'>
      <div className='mx-16 mt-4 text-sm sm:text-base text-center mobileLandscape:w-[400px] sm:w-[600px]'>
        {hasSubmitted ? 'Thank you for your message!' : 'Get in touch with Edie by filling out the form below:'}
      </div>
      
      <div className='h-full w-full flex-col items-center'>
      {!hasSubmitted && <form className='flex flex-col items-center justify-center py-12 w-full px-8' action={'https://formspree.io/f/xblryjzd'} name='contact' method='POST' onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-4 w-full mobileLandscape:w-[400px] sm:w-[600px] md:w-[800px] pb-4'>
          <div className='flex w-full flex-col items-leading'>
            <label htmlFor="name">
              Name
            </label>
            <input type='text' name='name' className='h-[40px] border-black border-[1px] p-2'>

            </input>
            <ValidationError prefix='Name' field='name' errors={state.errors} />
          </div>
          <div className='flex w-full flex-col items-leading'>
            <label htmlFor="email">
              E-Mail
            </label>
            <input type='text' name='email' className='h-[40px] border-black border-[1px] p-2'>

            </input>
            <ValidationError prefix='Email' field='email' errors={state.errors} />
          </div>
          <div className='flex w-full flex-col items-leading'>
            <label htmlFor='company'>
              Company / Org (optional)
            </label>
            <input type='text' name='company' className='h-[40px] border-black border-[1px] p-2'>

            </input>
            <ValidationError prefix='Company' field='company' errors={state.errors} />
          </div>
        </div>
        <div className='flex pt-4 sm:w-[600px] md:w-[800px]'>
          <label className='pb-1 items' htmlFor='message'>
            Please leave your message below :
          </label>
        </div>
        <textarea name='message' className='h-[200px] w-full mx-2 mobileLandscape:w-[400px] sm:h-[300px] sm:w-[600px] md:w-[800px] p-2 text-sm border-black  border-[1px]'>

        </textarea>
        <ValidationError prefix='Message' field='message' errors={state.errors} />
        <div className='flex w-full mobileLandscape:w-[400px] sm:w-[600px] md:w-[800px] justify-end items-center'>
          <button type='submit' disabled={state.submitting} className='h-[40px] bg-black text-white mt-2 p-2 rounded-lg transform hover:scale-110 duration-75 flex items-center'>
            <SubmitIcon src="/icons/018-email.svg" className='h-[30px] w-[30px] pr-2 fill-light7' />Send
          </button>
        </div>
      </form>}
      </div>

      <div className='w-full absolute bottom-0'>
        <Footer />
      </div>
    </div>
  )
}
