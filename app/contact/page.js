import React, { useState } from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
import Footer from '../../components/Footer/Footer'

export default function ContactPage() {

  const [hasSubmitted, setHasSubmitted] = useState(false)

  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = (event) => {
    // event.preventDefault()

    const contactForm = event.target;
    const formData = new FormData(contactForm);
    fetch('/contact', {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: new URLSearchParams(formData).toString()
    })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error))

    event.preventDefault()

    setHasSubmitted(true)
  }

  // document.querySelector("form").addEventListener("submit", handleSubmit)

  const handleChange = (event) => {
    setFormDetails({...formDetails, [event.target.name]: event.target.value})
  }

  return (
    <div className='w-full sm:h-full flex flex-col items-center'>
      <div className='text-center text-2xl sm:text-4xl mt-16 font-bold'>
        Contact
      </div>
      <div className='mx-16 mt-4 text-sm sm:text-base mobileLandscape:w-[400px] sm:w-[600px]'>
        {hasSubmitted ? "Thank you for your message. Edie will be in touch with you as soon as possible!" : "Get in touch with Edie regarding vocal contracting, recording sessions, conducting, etc., or simply reach out to say hello!"}
      </div>
      
      <div className='h-full w-full flex-col items-center'>
      {!hasSubmitted && <form className='flex flex-col items-center justify-center py-12 w-full px-8' name='contact' method='POST' data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-4 w-full mobileLandscape:w-[400px] sm:w-[600px] pb-4'>
          <div className='flex w-full flex-col items-leading'>
            <label >
              Name
            </label>
            <input type='text' name='name' className='h-[40px] border-black border-[1px] p-2'>

            </input>
          </div>
          <div className='flex w-full flex-col items-leading'>
            <label>
              E-Mail
            </label>
            <input type='text' name='email' className='h-[40px] border-black border-[1px] p-2'>

            </input>
          </div>
          <div className='flex w-full flex-col items-leading'>
            <label>
              Company / Org (optional)
            </label>
            <input type='text' name='company' className='h-[40px] border-black border-[1px] p-2'>

            </input>
          </div>
        </div>
        <div className='flex pt-4 sm:w-[600px]'>
          <label className='pb-1 items'>
            Please leave your message below :
          </label>
        </div>
        <textarea name='message' className='h-[200px] w-full mx-2 mobileLandscape:w-[400px] sm:h-[300px] sm:w-[600px] p-2 text-sm border-black  border-[1px]'>

        </textarea>
        <div className='flex w-full mobileLandscape:w-[400px] sm:w-[600px] justify-end items-center'>
          <button type='submit' className='h-[40px] bg-black text-white mt-2 p-2 rounded-lg transform hover:scale-110 duration-75'>
            <i className='flaticon-email h-[20px] w-[20px] pr-2'></i>Send
          </button>
        </div>
      </form>}
      </div>

      <Footer />
    </div>
  )
}



        {/* {/* <NetlifyForm name='contact' method='POST' action='/thanks' honeypotName='bot-field' netlify>
      {({handleChange, success, error}) => (
        <>
          <div >
            <label >
              Name
              <input type='text' name='name' value={formDetails.name} onChange={handleChange}/>
            </label>
            
          </div>
          <div >
            <label>
              E-Mail
              <input type='text' name='email' value={formDetails.email} onChange={handleChange}/>
            </label>
            
          </div>
          <div>
            <label>
              Company / Org (optional)
              <input type='text' name='company' value={formDetails.company} onChange={handleChange}/>
            </label>
            
          </div>
          <div>
            <label>
              Please leave your message below :
              <textarea name='message' value={formDetails.message} onChange={handleChange}/>
            </label>
          </div>
          
            <div >
            <button type='submit' onClick={handleSubmit}>
              Send
            </button>
          </div>
    //     </> */}
      
    //   )}
    // </NetlifyForm> */}
