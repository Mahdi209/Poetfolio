import Image from "next/image";
import myPhoto from "../../public/myphoto.jpg";

export function AboutMe() {
  return (
    <section className="bg-slate-200 dark:bg-[#112e42] text-black dark:text-white py-16 md:py-32 lg:py-48 px-8 md:px-16 lg:px-32">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative flex justify-center">
            <Image 
              src={myPhoto} 
              alt="Mohammed Mahdi Salah"
             
              className="rounded-full w-56 h-56 lg:w-[90%] lg:h-[90%] object-cover object-top shadow-lg" 
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white py-2 px-4 rounded-br-lg w-full">
              <h1 className="text-2xl text-center md:text-3xl lg:text-4xl font-bold tracking-tight">
                Mohammed Mahdi Salah
              </h1>
              <p className="text-lg md:text-xl text-center">Full-Stack Web Developer</p>
            </div>
          </div>

          {/* About Me Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
            <p className="mb-6 leading-relaxed">
              Hi, I'm Mohammed Mahdi Salah, a passionate full-stack web developer with a love for building efficient, modern websites. I'm constantly learning and adapting to the latest technologies to deliver the best possible solutions.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-2">Technical Expertise</h3>
            <p className="mb-6 leading-relaxed">
              My toolkit includes React, Express, MongoDB, Tailwind CSS, and more. I have a knack for crafting intuitive user interfaces and robust back-end systems. I'm always eager to tackle new challenges and expand my skill set.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-2">Beyond Code</h3>
            <p className="mb-6 leading-relaxed">
              When I'm not coding, I enjoy photography and drawing. These creative outlets help me relax and recharge, and they often inspire my work as a developer. I believe that a well-rounded perspective is essential for creating truly great digital experiences.
            </p>
          </div>

        </div> 
      </div>
    </section>
  );
}
