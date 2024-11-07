import Image from "next/image";
import myPhoto from "../../public/myProfilePhoto.jpg";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export function LandingPage() {
  return (
    <div
      id="home"
      className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#0a192f] dark:to-[#112e42] text-black dark:text-white"
    >
      <main className="flex-1">
        <section className="w-full min-h-screen flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-orange-600 dark:text-orange-300 font-mono">
                    Hi, my name is
                  </p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                    Mohammed Mahdi Salah
                  </h1>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-600 dark:text-slate-400">
                    I build things for the web.
                  </h2>
                </div>

                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-semibold text-orange-600 dark:text-orange-300 mb-4">
                    Full Stack Web Developer
                  </h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 max-w-xl leading-relaxed">
                    I'm a passionate full-stack developer specializing in
                    building exceptional digital experiences. Currently, I'm
                    focused on building accessible, human-centered products.
                  </p>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="px-6 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-md font-semibold cursor-pointer"
                  >
                    View My Work
                  </ScrollLink>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 rounded-md font-semibold"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative group">
                {/* Outer glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                {/* Main circular container */}
                <div className="relative">
                  <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto overflow-hidden rounded-full border-4 border-orange-400/50">
                    <Image
                      src={myPhoto}
                      alt="Mohammed Mahdi Salah"
                      className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-300"
                      priority
                    />
                  </div>

                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-orange-400/20 animate-spin-slow"></div>

                  {/* Additional decorative elements */}
                  <div className="absolute -inset-4 rounded-full border border-orange-400/20 animate-reverse-spin"></div>
                  <div className="absolute -inset-8 rounded-full border border-orange-400/10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
