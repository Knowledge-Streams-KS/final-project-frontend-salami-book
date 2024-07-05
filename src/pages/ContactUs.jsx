import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="bg-[#0e0f0f] text-[#08723e] flex flex-col py-24">
        <div className="flex justify-center pb-4">
            <img className="w-60" src="images/maidan logo.png" alt="logo" />
        </div>
        <div className="flex flex-row justify-around items-center">
          <div>
            <div>
              <h1 className="font-bold text-3xl mb-8 text-white">
                GET IN TOUCH WITH US
              </h1>
              <p className="w-60 ml-2">
                If you have any queries, concerns, or suggestions, please don’t
                hesitate to reach out. Our dedicated customer support team is
                here to assist you and will respond to your inquiries promptly.
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-3xl mb-8 text-white">Policy</h1>
            <div className="space-y-2 ml-2 cursor-pointer">
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
              <p>FAQs</p>
              <p>Payment Policy</p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <div className="text-white font-bold text-xl">Facebook</div>
              <div>Maidan Official</div>
            </div>
            <div>
              <div className="text-white font-bold text-xl">Instagram</div>
              <div>Maidan Official</div>
            </div>
            <div>
              <div className="text-white font-bold text-xl">Email Us</div>
              <div>Maidan Official</div>
            </div>
            <div>
              <div className="text-white font-bold text-xl">Phone Number</div>
              <div>Maidan Official</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
