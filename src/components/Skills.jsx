import { skills } from "../../public/navLink";
export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-200 dark:bg-[#112e42] text-white ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">
              Our Skills
            </h2>
            <p className="max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black dark:text-white">
              We have a diverse set of skills that allow us to deliver
              exceptional results for our clients.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <div data-aos="fade-down-right">
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 hover:scale-125 duration-500 "
              >
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center text-cyan-700  dark:text-cyan-500 hover:bg-cyan-900 transition-all duration-500 hover:text-white">
                  <skill.icon className="text-3xl  " />
                </div>
                <span className="text-sm font-medium text-black dark:text-white">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
