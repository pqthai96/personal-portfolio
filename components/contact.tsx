"use client"

import React from 'react';
import SectionHeading from "@/components/section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";
import {sendEmail} from "@/actions/sendEmail";
import {useFormStatus} from 'react-dom';
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";

function Contact() {

  const {ref} = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      viewport={{once: true}}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">example@gmail.com</a>
        {" "}or through this form.
      </p>

      <form className="mt-10 flex flex-col" action={async (formData) => {
        const {data, error} = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email sent successfully!")
      }}>
        <input type="email" name="senderEmail" className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder="Your Email"
               required maxLength={500}/>
        <textarea name="message" className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder="Your Message" required
                  maxLength={5000}/>
        <SubmitBtn/>
      </form>
    </motion.section>
  );
}

export default Contact;