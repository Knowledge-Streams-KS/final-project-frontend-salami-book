import React from 'react'
import ContactUs from './ContactUs'

const Footer = () => {
  return (
    <>
        <div>
            <ContactUs />
            <div className='bg-[#08723e] text-white flex flex-row justify-between px-6 py-3'>
                <div>Copyright 2023 | All Rights Reserved</div>
                <div className='flex flex-row space-x-2'>
                    <h1>Follow us</h1>
                    <div>Insta</div>
                    <div>face</div>
                    <div>tiktok</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer