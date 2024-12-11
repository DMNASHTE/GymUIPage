import React, { useRef } from 'react'
import './Joins.css'
import emailjs from '@emailjs/browser'
const Joins = () => {
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0x2ulac', 'template_1beltkg', form.current, {
            publicKey: 'CH7UZZusEatc2aOhL',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <div className='Join' id='join-us'>
            <div className='left-j'>
                <hr/>
                <div>
                    <span className='stroke-text'>READY TO</span><span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span><span className='stroke-text'> WITH US?</span>
                </div>
            </div> 
            <div className='right-j'>
                <form ref={form} action="" className='email-container' onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder='Enter your Email address'></input>
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div> 
        </div>
    )
}

export default Joins
