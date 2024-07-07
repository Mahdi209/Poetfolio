import Image from "next/image";
import myPhoto from "../../public/myPhoto.png";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-slate-200 dark:bg-[#112e42] text-black dark:text-white ">
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div data-aos="fade-right" className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Mohammed Mahdi Salah
                  </h1>
                  <p className="max-w-[600px] text-black dark:text-white md:text-xl">
                    I'm a full-stack web developer with a passion for creating
                    beautiful and functional websites.
                  </p>
                </div>
              </div>
              <div data-aos="fade-left">
                <Image
                  src={myPhoto}
                  alt="Hero"
                  className="mx-auto  overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
