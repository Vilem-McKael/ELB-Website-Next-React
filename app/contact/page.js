'use client';

import React from 'react'
import Footer from '../../components/Footer/Footer'
import SubmitIcon from '@/public/icons/018-email.svg'
import { useRouter } from 'next/navigation';

export default function ContactPage() {

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .then(() => router.push('/contact/success'))
      .catch((error) => alert(error));

  };
  

  return (
    <div className='w-full sm:h-full flex flex-col items-center'>
      <div className='mx-16 mt-4 text-sm sm:text-base mobileLandscape:w-[400px] sm:w-[600px]'>
        Get in touch with Edie regarding vocal contracting, recording sessions, conducting, etc., or simply reach out to say hello!
      </div>
      
      <div className='h-full w-full flex-col items-center'>
      <form className='flex flex-col items-center justify-center py-12 w-full px-8' action='/contact/success' name='contact' method='POST' data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-4 w-full mobileLandscape:w-[400px] sm:w-[600px] md:w-[800px] pb-4'>
          <div className='flex w-full flex-col items-leading'>
            <label htmlFor="name">
              Name
            </label>
            <input type='text' name='name' className='h-[40px] border-black border-[1px] p-2'>

            </input>
          </div>
          <div className='flex w-full flex-col items-leading'>
            <label htmlFor="email">
              E-Mail
            </label>
            <input type='text' name='email' className='h-[40px] border-black border-[1px] p-2'>

            </input>
          </div>
          <div className='flex w-full flex-col items-leading'>
            <label htmlFor='company'>
              Company / Org (optional)
            </label>
            <input type='text' name='company' className='h-[40px] border-black border-[1px] p-2'>

            </input>
          </div>
        </div>
        <div className='flex pt-4 sm:w-[600px] md:w-[800px]'>
          <label className='pb-1 items' htmlFor='message'>
            Please leave your message below :
          </label>
        </div>
        <textarea name='message' className='h-[200px] w-full mx-2 mobileLandscape:w-[400px] sm:h-[300px] sm:w-[600px] md:w-[800px] p-2 text-sm border-black  border-[1px]'>

        </textarea>
        <div className='flex w-full mobileLandscape:w-[400px] sm:w-[600px] md:w-[800px] justify-end items-center'>
          <button type='submit' className='h-[40px] bg-black text-white mt-2 p-2 rounded-lg transform hover:scale-110 duration-75 flex items-center'>
            <SubmitIcon src="/icons/018-email.svg" className='h-[30px] w-[30px] pr-2 fill-light7' />Send
          </button>
        </div>
      </form>
      </div>

      <Footer />
    </div>
  )
}
