import { SiGithub } from "react-icons/si";
import { IconContext } from "react-icons";

const Projects = () => {
    return ( 
        <div>
            <p className="text-lg font-medium">Some of these project are a result from my freetime or from volunteer work in an organization.</p>
            <h2>Active Projects</h2>
            <section className="mx-auto my-5 grid max-w-fit grid-cols-1 items-center gap-5 sm:grid-cols-2">
                <article className="flex h-full flex-col overflow-hidden rounded-md bg-white border border-gray-400 border-opacity-60 hover:border-gray-500 shadow">
                    <div className="flex-1 flex grow flex-col justify-between space-y-4 p-5">
                        <div className="space-y-3">
                            <h3><a className="hover:underline" href="https://github.com/Tatpolc/portfolio-web">Portfolio Website</a></h3>
                            <p>2023 - Present</p>
                            <p>This website made from React and Tailwind CSS.</p>
                        </div>
                        <div className=" text-right">
                            <a className="inline m-1.5" href="https://github.com/Tatpolc/portfolio-web"><IconContext.Provider value={{color: "#000", size: "1.5em"}}><SiGithub className="inline"/></IconContext.Provider></a><a className="inline text-lg font-semibold text-right hover:underline" href="https://github.com/Tatpolc/portfolio-web">Github</a>
                        </div>
                    </div>
                </article>
                <article className="flex h-full flex-col overflow-hidden rounded-md bg-white border border-gray-400 border-opacity-60 hover:border-gray-500 shadow">
                    <div className="flex-1 flex grow flex-col justify-between space-y-4 p-5">
                        <div className="space-y-3">
                            <h3><a className="hover:underline" href="https://github.com/Tatpolc/ivac-sector-file">IvAc Sector File - IVAO TH</a></h3>
                            <p>2020 - Present</p>
                            <p>Manual airspace data entry into github.</p>
                        </div>
                        <div className=" text-right">
                            <a className="inline m-1.5" href="https://github.com/Tatpolc/ivac-sector-file"><IconContext.Provider value={{color: "#000", size: "1.5em"}}><SiGithub className="inline"/></IconContext.Provider></a><a className="inline text-lg font-semibold text-right hover:underline" href="https://github.com/Tatpolc/ivac-sector-file">Github</a>
                        </div>
                    </div>
                </article>
            </section>
            <h2>Archived Projects</h2>
            <section className="mx-auto my-5 grid max-w-fit grid-cols-1 items-center gap-5 sm:grid-cols-1">
                <article className="flex h-full flex-col overflow-hidden rounded-md bg-white border border-gray-400 border-opacity-60 hover:border-gray-500 shadow">
                    <div className="flex-1 flex grow flex-col justify-between space-y-4 p-5">
                        <div className="space-y-3">
                            <h3><a className="hover:underline" href="https://github.com/Tatpolc/aurora-builder">Aurora-Builder</a></h3>
                            <p>2022</p>
                            <p>Python project building IVAO's sectorfile from sqlite database.</p>
                        </div>
                        <div className=" text-right">
                            <a className="inline m-1.5" href="https://github.com/Tatpolc/aurora-builder"><IconContext.Provider value={{color: "#000", size: "1.5em"}}><SiGithub className="inline"/></IconContext.Provider></a><a className="inline text-lg font-semibold text-right hover:underline" href="https://github.com/Tatpolc/portfolio-web">Github</a>
                        </div>
                    </div>
                </article>
            </section>
        </div>
     );
}
 
export default Projects;