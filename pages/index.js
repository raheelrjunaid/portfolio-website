import Image from "next/image";
import Wave from "react-wavify";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import * as Tabs from "@radix-ui/react-tabs";
import { useState, useRef } from "react";
import { animated, useTransition } from "react-spring";
import axios from "axios";

export async function getStaticProps() {
  try {
    const headers = {
      headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
    };

    let res = await axios.get(
      `${process.env.BASE_URL}/api/homepage?populate=*`,
      headers
    );
    const homePageData = res.data.data.attributes;

    res = await axios.get(
      `${process.env.BASE_URL}/api/work-experiences?sort=startDate:desc`,
      headers
    );
    const workExperiences = res.data.data;

    res = await axios.get(
      `${process.env.BASE_URL}/api/projects?populate=*`,
      headers
    );
    const projects = res.data.data;

    return {
      props: {
        homePageData,
        workExperiences,
        projects,
        BASE_URL: process.env.BASE_URL,
      },
    };
  } catch (error) {
    console.error(error.response?.data.error.name, error);
    return { notFound: true };
  }
}

export default function Home({
  homePageData,
  workExperiences,
  projects,
  BASE_URL,
}) {
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

  const technologies = [
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "Firebase",
    "Python",
  ];

  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/raheelrjunaid",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/c/raheeljunaid",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/raheelrjunaid",
    },
  ];

  return (
    <main>
      <section className="h-screen pt-20 flex items-center">
        <div className="container xl:px-40">
          <p className="text-sky-400 font-mono mb-2">Hi! My name is</p>
          <h1 className="font-bold leading-tight">
            Raheel Junaid
            <br />
            <span className="text-slate-200">I build online experiences.</span>
          </h1>
          <p className="text-slate-400 leading-relaxed mt-5 mb-10 w-100 md:w-2/3 lg:w-1/2">
            {homePageData.mainDescription}
          </p>
          <div className="flex gap-x-7 items-center">
            <a href="#projects">
              <button className="transition bg-sky-600 shadow-none hover:shadow-sky-500/25 text-md lg:text-lg px-5 py-2 border-sky-700 hover:shadow-lg hover:bg-sky-500 rounded-lg">
                Projects
              </button>
            </a>
            {socials.map((icon, index) => (
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="text-sky-900 hover:text-sky-700 text-2xl"
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-20" id="about">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-x-20 xl:px-40">
            <div className="md:col-span-2">
              <div className="max-w-sm mx-auto md:ml-auto relative translate-y-20 md:translate-y-0 md:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t via-transparent from-[#000C13] z-10 md:hidden" />
                <Image
                  alt="Self Portrait"
                  className="rounded-xl"
                  width={984}
                  height={1422}
                  layout="responsive"
                  src="/self-portrait.png"
                />
              </div>
            </div>
            <div className="flex flex-col col-span-3 justify-center z-20">
              <h2 className="font-semibold">
                <span className="text-sky-500 font-medium font-mono">0. </span>
                About me
              </h2>
              <p className="my-8 text-slate-400 leading-relaxed">
                {homePageData.aboutDescription}
              </p>
              <p className="font-mono mb-3">Some technologies I use are:</p>
              <div className="flex gap-x-10 font-mono text-sky-400 my-2">
                <ul className="list-disc list-inside">
                  {homePageData.technologies.slice(0, 3).map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
                <ul className="list-disc list-inside">
                  {homePageData.technologies.slice(3).map((tech, i) => (
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
          <h2 className="font-semibold">
            <span className="text-sky-500 font-medium font-mono">1. </span>
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
                {workExperiences.map(({ id, attributes }, index) => (
                  <Tabs.Trigger
                    value={index}
                    key={id}
                    className={`transition py-3 w-20 ${
                      activeTab != index && "opacity-75"
                    }`}
                  >
                    {attributes.company}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              <animated.div
                className="bg-white transition-all rounded h-0.5 w-20 absolute"
                style={{
                  left: `${(activeTab / workExperiences.length) * 100}%`,
                }}
              />
            </div>
            {tabTransitions((props, tabIndex) => {
              const { company, title, excerpt } =
                workExperiences[tabIndex].attributes;
              return (
                <animated.div style={props}>
                  <h3 className="text-2xl mb-2 font-semibold text-slate-100">
                    {title}
                  </h3>
                  <p className="text-sky-400 font-mono text-sm mb-5">
                    {company}
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
            <h2 className="font-semibold whitespace-nowrap">
              <span className="text-sky-500 font-medium font-mono">2. </span>
              My Projects
            </h2>
            <div className="h-px bg-sky-200/25 w-full" />
          </div>

          <div className="px-0 sm:px-10 md:px-0 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
            {projects.map(({ id, attributes }) => (
              <div
                className="border border-slate-600/50 p-5 shadow-lg rounded-lg"
                key={id}
              >
                <div className="relative aspect-video mb-5">
                  <Image
                    src={`${BASE_URL}${attributes.image.data.attributes.url}`}
                    alt="Chat App"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    className="rounded-md"
                    layout="fill"
                  />
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-semibold text-slate-100">
                    {attributes.title}
                  </h3>
                  <div className="flex gap-x-3 text-slate-600 text-2xl">
                    {attributes.demoUrl && (
                      <a
                        target="_blank"
                        href={attributes.demoUrl}
                        rel="noreferrer"
                      >
                        <FiExternalLink className="hover:text-slate-500 " />
                      </a>
                    )}
                    {attributes.sourceUrl && (
                      <a
                        target="_blank"
                        href={attributes.sourceUrl}
                        rel="noreferrer"
                      >
                        <FaGithub className="hover:text-slate-500 " />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-slate-400 font-light leading-relaxed mb-5">
                  {attributes.description}
                </p>
                <p className="text-sm text-sky-300/80 font-mono">
                  {attributes.technologies?.map(({ name }) => name).join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="contact">
        <div className="container text-center">
          <h2 className="mb-5 font-semibold">
            <span className="text-sky-500 font-medium font-mono">3. </span>
            Get in Touch
          </h2>
          <div className="max-w-lg mx-auto">
            <p className="text-slate-400 font-light leading-relaxed mb-5">
              Want to give feedback? Have a question that I can help you with?
              Do you just wanna talk? My door is always open.
            </p>
          </div>
          <a href="mailto:raheelj2004@gmail.com">
            <button className="px-5 py-2 mt-3 transition rounded-md text-md lg:text-lg border-sky-400 text-sky-400 border hover:bg-sky-900/25 font-sans">
              Mail Me
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
