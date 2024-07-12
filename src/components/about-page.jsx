
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="w-full lg:flex lg:flex-col lg:justify-center h-screen ">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-200 dark:bg-[#112e42] text-black dark:text-white">
        <div
          className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Avatar className="h-44 w-44 lg:h-72 lg:w-72">
              <AvatarImage src="/myphoto.jpg" className="object-cover object-top " />
              <AvatarFallback>MH</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mohammed Mahdi Salah</h1>
              <p
                className="text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-2xl/relaxed">
                Full-Stack Web Developer

              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-1">
              <h2 className="text-xl font-bold">Skills</h2>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-base">JavaScript</Badge>
                <Badge className="text-base">React</Badge>
                <Badge className="text-base">Node.js</Badge>
                <Badge className="text-base">Tailwindcss</Badge>
                <Badge className="text-base">CSS</Badge>
                <Badge className="text-base">Git</Badge>
                <Badge className="text-base">Github</Badge>
                <Badge className="text-base">MongoDB</Badge>
                <Badge className="text-base">Express js</Badge>

              </div>
            </div>
            <div className="grid gap-1">
              <h2 className="text-xl lg:text-4xl font-bold">About Me
              </h2>
              <div className="space-y-2">
                <div className="grid gap-1">

                  <p className="text-slate-200 lg:text-xl">
                    Hi, I'm Mohammed Mahdi Salah, a passionate full-stack web developer with a love for building
                    efficient, modern websites. I'm constantly learning and adapting to the latest technologies to
                    deliver the best possible solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-1">
              <h2 className="text-xl lg:text-4xl font-bold">Technical Expertise</h2>
              <div className="space-y-2">
                <div className="grid gap-1">
                  <p className="text-slate-200 lg:text-xl">
                    My toolkit includes React, Express, MongoDB, Tailwind CSS, and more. I have a knack for crafting
                    intuitive user interfaces and robust back-end systems. I'm always eager to tackle new challenges and
                    expand my skill set.
                  </p>
                </div>

              </div>
            </div>
            <div className="grid gap-1">
              <h2 className="text-xl lg:text-4xl font-bold">Beyond Code
              </h2>
              <div className="space-y-2">
                <div className="grid gap-1">
                  <p className="text-slate-200 lg:text-xl ">
                    When I'm not coding, I enjoy photography and drawing. These creative outlets help me relax and
                    recharge, and they often inspire my work as a developer. I believe that a well-rounded perspective
                    is essential for creating truly great digital experiences.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
