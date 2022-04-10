import Image from "next/image";
import Wave from "react-wavify";
import { FaGithub, FaYoutube } from "react-icons/fa";

const technologies = [
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "Firebase",
  "Python",
];

export default function Home() {
  return (
    <main>
      <section className="py-60">
        <div className="container mx-auto">
          <p className="text-sky-400 font-mono mb-2">Hi! My name is</p>
          <h1 className="text-6xl font-bold leading-tight">
            Raheel Junaid
            <br />
            <span className="text-slate-200">I build online experiences.</span>
          </h1>
          <p className="text-slate-400 leading-relaxed mt-5 mb-10 w-1/2">
            I&apos;m a software engineer that empowers users through developing
            applications. My apps/websites use full-stack web technologies to
            enhance the user experience with minimal painpoints.
          </p>
          <div className="flex gap-x-4 items-center">
            <a href="#projects">
              <button className="transition bg-sky-600 shadow-none hover:shadow-sky-500/10 text-lg px-6 py-2 border-sky-700 hover:shadow-lg hover:bg-sky-500 rounded-lg">
                Projects
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-x-20 px-40">
            <div className="col-span-2">
              <Image
                alt="Self Portrait"
                className="rounded-xl col-span-2"
                width={336}
                height={420}
                layout="responsive"
                src="/self-portrait.jpeg"
              />
            </div>
            <div className="flex flex-col col-span-3 justify-center">
              <h2 className="text-4xl font-semibold">
                <span className="text-sky-500 text-3xl font-medium font-mono">
                  0.{" "}
                </span>
                About me
              </h2>
              <p className="my-8 text-slate-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui a
                sollicitudin condimentum arcu sit facilisis quis ac sem. Nunc
                massa egestas turpis fusce enim. Fames sagittis non id eget
                tortor. At in donec sagittis, in nulla leo praesent morbi
                auctor. Dictumst egestas ac{" "}
              </p>
              <p className="font-mono mb-3">Some technologies I use are:</p>
              <div className="flex gap-x-10 font-mono text-sky-400 my-2">
                <ul className="list-disc">
                  {technologies.slice(0, 3).map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <ul className="list-disc">
                  {technologies.slice(3).map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-20 pb-20 bg-gradient-to-b from-sky-800 to-transparent"
        id="experience"
      >
        <Wave
          fill="#000C13"
          className="-scale-y-100 mb-10"
          paused={false}
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.15,
            points: 3,
          }}
        />
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold">
            <span className="text-sky-500 text-3xl font-medium font-mono">
              1.{" "}
            </span>
            My Experience
          </h2>
          <div className="w-2/5 mx-auto">
            <h3 className="text-2xl mt-10 mb-3 font-semibold text-slate-100">
              Backend Developer
            </h3>
            <p className="text-sky-400 font-mono text-sm mb-5">
              SkyIT Services
            </p>
            <p className="text-slate-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu semper
              pellentesque nec tempor amet semper faucibus justo erat. Sit
              turpis nullam non lacus. Arcu ut scelerisque fames.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" id="projects">
        <div className="container mx-auto">
          <div className="flex items-center gap-x-10">
            <h2 className="text-4xl font-semibold whitespace-nowrap">
              <span className="text-sky-500 text-3xl font-medium font-mono">
                2.{" "}
              </span>
              My Projects
            </h2>
            <div className="h-px bg-sky-200/25 w-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
