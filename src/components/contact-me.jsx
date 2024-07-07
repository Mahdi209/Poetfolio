import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div className="w-full  bg-slate-200 dark:bg-[#112e42] flex flex-col items-center mt-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-black dark:text-white">
          Feel free to reach out to me through any of the following channels.
        </p>
      </div>
      <div className="flex justify-between w-full  px-5 lg:px-64 mt-12 mb-12">
        <div
          data-aos="fade-right"
          className="flex items-center gap-2 w-28 justify-center"
        >
          <a href="tel:+9647808882223">
            {" "}
            <FaPhoneAlt className="w-16 h-16 text-muted-foreground" />
          </a>
        </div>
        <div
          data-aos="fade-right"
          className="flex items-center gap-2 w-28 justify-center"
        >
          <a href="mailto:mohammed.mahdi1265@gmail.com">
            <MdEmail className="w-16 h-16 text-muted-foreground" />
          </a>
        </div>
        <div
          data-aos="fade-right"
          className="flex items-center gap-2 w-28 justify-center"
        >
          <Link
            href="https://www.linkedin.com/in/mohammed-mahdi-0096582b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            prefetch={false}
          >
            <FaLinkedin className="w-16 h-16 text-muted-foreground" />
          </Link>
        </div>
        <div
          data-aos="fade-right"
          className="flex items-center gap-2 w-28 justify-center"
        >
          <Link
            href="https://github.com/Mahdi209"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            prefetch={false}
          >
            <FaGithub className="w-16 h-16 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </div>
  );
}
