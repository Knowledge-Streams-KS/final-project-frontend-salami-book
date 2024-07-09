import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col bg-[#0e0f0f] py-24 text-[#08723e]">
        <div className="flex justify-center pb-4">
          <img className="w-60" src="images/maidan logo.png" alt="logo" />
        </div>
        <div className="flex flex-row items-center justify-around">
          <div>
            <div>
              <h1 className="mb-8 text-3xl font-bold text-white">
                GET IN TOUCH WITH US
              </h1>
              <p className="w-60">
                If you have any queries, concerns, or suggestions, please don’t
                hesitate to reach out. Our dedicated customer support team is
                here to assist you and will respond to your inquiries promptly.
              </p>
            </div>
          </div>
          <div>
            <h1 className="mb-8 text-3xl font-bold text-white">Policy</h1>
            <div className="cursor-pointer space-y-2">
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
              <p>FAQs</p>
              <p>Payment Policy</p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <div className="text-xl font-bold text-white">Facebook</div>
              <div>Maidan Official</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">Instagram</div>
              <div>Maidan Official</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">Email Us</div>
              <div>Maidan Official</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">Phone Number</div>
              <div>Maidan Official</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
