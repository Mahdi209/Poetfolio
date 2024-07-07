import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../public/navLink";
export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-slate-200 dark:bg-[#112e42] text-white"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black dark:text-white">
              Recent Projects
            </h2>
            <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black dark:text-white">
              Check out some of my recent web development projects.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 ">
          {projects.map((project, index) => (
            <div data-aos="fade-right">
              <Card
                className="overflow-hidden bg-cyan-900 text-white"
                key={index}
              >
                <CardContent>
                  <Image
                    src={project.image}
                    width="550"
                    height="310"
                    alt="Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full mt-5"
                  />
                  <div className="mt-4 flex flex-col justify-center space-y-3">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-gray-300 h-20">{project.description} </p>
                    <div className="flex gap-2">
                      <Link
                        href={project.live.Link}
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  hover:bg-white hover:text-black   duration-700 "
                        prefetch={false}
                        target="_blank"
                      >
                        {project.live.name}
                      </Link>
                      <Link
                        href={project.github.Link}
                        className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors   focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none text-black hover:bg-primary hover:text-white duration-700 disabled:opacity-50 text-black dark:text-white"
                        prefetch={false}
                        target="_blank"
                      >
                        {project.github.name}
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
