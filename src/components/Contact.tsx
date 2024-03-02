"use client";
import {
  CheckCheck,
  GitBranch,
  GithubIcon,
  Linkedin,
  LinkedinIcon,
  Mail,
  Send,
} from "lucide-react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../utils/var";
import toast from "react-hot-toast";
import Link from "next/link";
type Props = {};

const Contact = (props: Props) => {
  const form = useRef<any>();
  const sendEmail = (e: any) => {
    e.preventDefault();
    try {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      toast.success("Successfully.", {
        duration: 1000,
        position: "top-center",
        icon: (
          <CheckCheck size={15} className="bg-green-500 rounded-full p-1" />
        ),
      });
      form.current = "";
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-[1440px] xl:border-t-2 xl:border-t-purple-500 h-full m-auto p-4 flex flex-wrap justify-center items-center gap-10 mt-60 xl:mt-32 mb-10"
    >
      <div className="flex flex-col items-start justify-center gap-y-3">
        <h2 className="font-extrabold text-6xl">Contact ME</h2>
        <h5 className="font-medium text-xl max-w-md">
          Feel free to contact me for career prospects, business services, and
          other professional inquiries!
        </h5>
        <ul className="flex flex-col items-start gap-y-2">
          <li className="flex gap-1 items-center  hover:bg-purple-500 p-1">
            <Mail width={15} height={15} /> prathmeshpol61@gmail.com
          </li>
          <Link
            href={"https://github.com/prathmesh61"}
            className="flex gap-1 items-center hover:bg-purple-500 p-1"
          >
            <GitBranch width={15} height={15} /> Github
          </Link>
          <Link
            href={"https://www.linkedin.com/in/prathmesh-pol/"}
            className="flex gap-1 items-center hover:bg-purple-500 p-1"
          >
            <Linkedin width={15} height={15} /> Linkedin
          </Link>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-2">
        <form
          ref={form}
          className="flex flex-col gap-y-5 mt-4"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="user_name"
            className="w-full  p-4 border-none bg-gray-200  placeholder:text-gray-600 text-gray-900"
            placeholder="your Name"
          />

          <input
            type="email"
            name="user_email"
            className="w-full  p-4 border-none bg-gray-200  placeholder:text-gray-600 text-gray-900"
            placeholder="Your email"
          />
          <textarea
            rows={3}
            cols={3}
            name="message"
            className="w-full  p-4 border-none bg-gray-200  placeholder:text-gray-900 text-gray-900"
            placeholder="message "
          />
          <button
            type="submit"
            className="w-[250px] h-[40px] bg-[#740FF5] cursor-pointer rounded-md flex items-center justify-center gap-1"
          >
            I will reach you <Send className="w-5 h-5 " />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
