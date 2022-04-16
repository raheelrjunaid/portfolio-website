import Image from "next/image";
import Wave from "react-wavify";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import * as Tabs from "@radix-ui/react-tabs";
import { useState, useRef } from "react";
import { animated, useTransition } from "react-spring";
import client from "../lib/sanity";
import { groq } from "next-sanity";

const technologies = [
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "Firebase",
  "Python",
];

export async function getStaticProps() {
  const work_xp_query = groq`
  *[_type == "work-experience"] | order(present desc) {
    _id,
    job_title,
    company_name,
    company_full_name,
    excerpt
  }
  `;

  const project_query = groq`
  *[_type == "project"] | order(date desc) {
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    technologies,
    source_url,
    demo_url,
    date
  }
  `;

  const workExperience = await client.fetch(work_xp_query);
  const projects = await client.fetch(project_query);

  return {
    props: {
      workExperience,
      projects,
    },
    revalidate: 10,
  };
}

export default function Home({ workExperience, projects }) {
  const [activeTab, setActiveTab] = useState(0);
  const previousTab = useRef(0);
  const tabTransitions = useTransition(activeTab, {
    from: {
      position: "absolute",
      opacity: 0,
      x: activeTab <= previousTab.current ? -100 : 100,
      y: -10,
      scale: 0.9,
    },
    enter: { opacity: 1, x: 0, y: 0, scale: 1, position: "relative" },
    leave: {
      opacity: 0,
      x: activeTab >= previousTab.current ? -100 : 100,
      y: -10,
      scale: 0.9,
      position: "absolute",
    },
    keys: null,
  });

  return (
    <main>
      <section className="h-screen pt-20 flex items-center">
        <div className="container xl:px-40">
          <p className="text-sky-400 font-mono mb-2">Hi! My name is</p>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Raheel Junaid
            <br />
            <span className="text-slate-200">I build online experiences.</span>
          </h1>
          <p className="text-slate-400 leading-relaxed mt-5 mb-10 w-2/3 lg:w-1/2">
            I&apos;m a software engineer that empowers users through developing
            applications. My apps/websites use full-stack web technologies to
            enhance the user experience with minimal painpoints.
          </p>
          <div className="flex gap-x-4 items-center">
            <a href="#projects">
              <button className="transition bg-sky-600 shadow-none hover:shadow-sky-500/25 text-lg px-5 py-2 border-sky-700 hover:shadow-lg hover:bg-sky-500 rounded-lg">
                Projects
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="pb-20" id="about">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-20 md:gap-x-20 xl:px-40">
            <div className="md:col-span-2">
              <div className="max-w-sm mx-auto md:ml-auto">
                <Image
                  alt="Self Portrait"
                  className="rounded-xl"
                  // objectFit="contain"
                  // objectPosition="right"
                  // layout="fill"
                  width={336}
                  height={420}
                  layout="responsive"
                  src="/self-portrait.jpeg"
                />
              </div>
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
                <ul className="list-disc list-inside">
                  {technologies.slice(0, 3).map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <ul className="list-disc list-inside">
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
        className="mt-20 pb-32 bg-gradient-to-b from-sky-800 to-transparent"
        id="experience"
      >
        <Wave
          fill="#000C13"
          className="-scale-y-100"
          paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.2,
            points: 3,
          }}
        />
        <Wave
          fill="#000C13"
          className="-scale-y-100 opacity-70 -translate-y-20"
          paused={false}
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.15,
            points: 3,
          }}
        />
        <div className="container text-center">
          <h2 className="text-4xl font-semibold">
            <span className="text-sky-500 text-3xl font-medium font-mono">
              1.{" "}
            </span>
            My Experience
          </h2>
          <Tabs.Root
            className="mx-auto max-w-lg mt-10 relative"
            onValueChange={(value) =>
              setActiveTab((currentTab) => {
                previousTab.current = currentTab;
                return value;
              })
            }
          >
            <div className="relative w-min mx-auto mb-10">
              <Tabs.List className="whitespace-nowrap">
                {workExperience.map((experience, i) => (
                  <Tabs.Trigger
                    value={i}
                    key={experience._id}
                    className={`transition py-3 w-20 ${
                      activeTab != i && "opacity-75"
                    }`}
                  >
                    {experience.company_name}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              <animated.div
                className="bg-white transition-all rounded h-0.5 w-20 absolute"
                style={{
                  left: `${(activeTab / workExperience.length) * 100}%`,
                }}
              />
            </div>
            {tabTransitions((props, tabIndex) => {
              const { job_title, company_full_name, excerpt } =
                workExperience[tabIndex];
              return (
                <animated.div style={props}>
                  <h3 className="text-2xl mb-2 font-semibold text-slate-100">
                    {job_title}
                  </h3>
                  <p className="text-sky-400 font-mono text-sm mb-5">
                    {company_full_name}
                  </p>
                  <p className="text-slate-300 leading-relaxed">{excerpt}</p>
                </animated.div>
              );
            })}
          </Tabs.Root>
        </div>
      </section>

      <section className="py-20" id="projects">
        <div className="container">
          <div className="flex items-center gap-x-10 mb-14">
            <h2 className="text-4xl font-semibold whitespace-nowrap">
              <span className="text-sky-500 text-3xl font-medium font-mono">
                2.{" "}
              </span>
              My Projects
            </h2>
            <div className="h-px bg-sky-200/25 w-full" />
          </div>

          <div className="px-10 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
            {projects.map((project, i) => (
              <div
                className="border border-slate-600/50 p-5 shadow-lg rounded-lg"
                key={i}
              >
                <div className="relative aspect-video mb-5">
                  <Image
                    src={project.imageUrl}
                    alt="Chat App"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    className="rounded-md"
                    layout="fill"
                  />
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-semibold text-slate-100">
                    {project.title}
                  </h3>
                  <div className="flex gap-x-3 text-slate-600 text-2xl">
                    {project.demo_url && (
                      <a
                        target="_blank"
                        href={project.demo_url}
                        rel="noreferrer"
                      >
                        <FiExternalLink className="hover:text-slate-500 " />
                      </a>
                    )}
                    {project.source_url && (
                      <a
                        target="_blank"
                        href={project.source_url}
                        rel="noreferrer"
                      >
                        <FaGithub className="hover:text-slate-500 " />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-slate-400 font-light leading-relaxed mb-5">
                  {project.description}
                </p>
                <p className="text-sm text-sky-300 font-mono">
                  {project.technologies.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="contact">
        <div className="container text-center">
          <h2 className="text-4xl mb-4 font-semibold">
            <span className="text-sky-500 text-3xl font-medium font-mono">
              3.{" "}
            </span>
            Get in Touch
          </h2>
          <div className="max-w-lg mx-auto">
            <p className="text-slate-400 font-light leading-relaxed mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
              ac pellentesque sollicitudin leo, quam faucibus morbi non mi. Sit
              mattis.
            </p>
          </div>
          <button className="px-5 py-2 mt-3 transition rounded-md text-lg border-sky-400 text-sky-400 border hover:bg-sky-900/25 font-sans">
            Mail Me
          </button>
        </div>
      </section>
    </main>
  );
}
