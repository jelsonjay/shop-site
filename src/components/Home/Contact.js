import React from 'react'
import Title from '../title'

export default  function Contact ()  {
  return (
    <section className='contact py-5'>
      <Title title='contact' />
      <div className='col-10 col-sm8 col-md-6 mx-auto'>
      <form action="https://formspree.io/f/xeqpawkd" method="POST">
      {/* name */}
     <div className='form-group'>
      <label htmlFor='name'>Name</label>
      <input type='text' className='form-control' name='name' id='name' placeholder='jelson J' />
      {/* email */}
      <label htmlFor='name'>Email</label>
      <input type='text' className='form-control' name='email' id='email' placeholder='hello@example.com' />
     {/* subject */}
     <div className='form-group'>
      <label htmlFor='decr'>Message</label>
    {/* message */}
    <textarea name='message' id='msg' rows='10' className='form-control' placeholder='your message here'></textarea>
     {/* message */}
     <button type='submit' className='btn btn-color btn-block text-capitalize mt-5'>Submit</button>
     </div>
     </div>
      </form>
      </div>
    </section>
  )
}


