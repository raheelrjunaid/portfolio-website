import Image from "next/image";
import Wave from "react-wavify";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import * as Tabs from "@radix-ui/react-tabs";
import { useState, useRef } from "react";
import { animated, useTransition } from "react-spring";
import { createClient } from "contentful";
import Marquee from "react-fast-marquee";

export async function getStaticProps() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    let res = await client.getEntries({
      content_type: "project",
      order: "-fields.dateCompleted",
    });
    const projects = res.items;

    res = await client.getEntries({
      content_type: "workExperience",
      order: "-fields.startingDate",
    });
    const workExperience = res.items;

    return {
      props: {
        workExperience,
        projects,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
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

  const technologies = [
    "Python",
    "TypeScript",
    "Go",
    "SvelteKit",
    "Next.js",
    "Firebase",
  ];

  return (
    <main>
      <section className="flex h-screen items-center pt-20">
        <div className="container xl:px-40">
          <p className="mb-2 font-mono text-sky-400">Hi! My name is</p>
          <h1 className="font-bold leading-tight">
            Raheel Junaid
            <br />
            <span className="text-slate-200">I build online experiences.</span>
          </h1>
          <p className="w-100 mt-5 mb-10 leading-relaxed text-slate-400 md:w-2/3 lg:w-1/2">
            I&apos;m a software engineer that empowers users by developing
            applications. My apps/websites use full-stack web technologies to
            enhance the user experience with minimal pain points.
          </p>
          <div className="flex items-center gap-x-7">
            <a href="#projects">
              <button className="text-md rounded-lg border-sky-700 bg-sky-600 px-5 py-2 shadow-none transition hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/25 lg:text-lg">
                Projects
              </button>
            </a>
            {socials.map((icon, index) => (
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="text-2xl text-sky-900 hover:text-sky-700"
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
              <div className="relative mx-auto max-w-sm translate-y-20 md:ml-auto md:translate-y-0 md:shadow-xl">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#000C13] via-transparent md:hidden" />
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
            <div className="z-20 col-span-3 flex flex-col justify-center">
              <h2 className="font-semibold">
                <span className="font-mono font-medium text-sky-500">0. </span>
                About me
              </h2>
              <p className="my-8 leading-relaxed text-slate-400">
                Welcome! My name is Raheel, and I enjoy creating modern web
                applications. I originally started as a Python developer back in
                2020 but have since grown to work with various tech stacks.
                Today, I use TypeScript, Go, and Python to build applications
                for the future (currently working at{" "}
                <a
                  href="#experience"
                  className="text-md text-white underline decoration-sky-500 hover:text-sky-500"
                >
                  SkyIT
                </a>
                ).
              </p>
              <p className="mb-3 font-mono">Some technologies I use are:</p>
              <div className="my-2 flex gap-x-10 font-mono text-sky-400">
                <ul className="list-inside list-disc">
                  {technologies.slice(0, 3).map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <ul className="list-inside list-disc">
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
        className="mt-20 bg-gradient-to-b from-sky-800 to-transparent pb-32"
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
          className="-translate-y-20 -scale-y-100 opacity-70"
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
            <span className="font-mono font-medium text-sky-500">1. </span>
            My Experience
          </h2>
          <Tabs.Root
            className="relative mx-auto mt-10 max-w-lg"
            onValueChange={(value) =>
              setActiveTab((currentTab) => {
                previousTab.current = currentTab;
                return value;
              })
            }
          >
            <div className="relative mx-auto mb-10 w-min">
              <Tabs.List className="whitespace-nowrap">
                {workExperience.map(({ sys, fields }, index) => (
                  <Tabs.Trigger
                    value={index}
                    key={sys.id}
                    className={`w-20 py-3 transition ${
                      activeTab != index && "opacity-75"
                    }`}
                  >
                    {fields.companyName}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              <animated.div
                className="absolute h-0.5 w-20 rounded bg-white transition-all"
                style={{
                  left: `${(activeTab / workExperience.length) * 100}%`,
                }}
              />
            </div>
            {workExperience.length > 0 &&
              tabTransitions((props, tabIndex) => {
                const { companyName, jobTitle, excerpt } =
                  workExperience[tabIndex].fields;
                return (
                  <animated.div style={props}>
                    <h3 className="mb-2 text-2xl font-semibold text-slate-100">
                      {jobTitle}
                    </h3>
                    <p className="mb-5 font-mono text-sm text-sky-400">
                      {companyName}
                    </p>
                    <p className="leading-relaxed text-slate-300">{excerpt}</p>
                  </animated.div>
                );
              })}
          </Tabs.Root>
        </div>
      </section>

      <section className="py-20" id="projects">
        <div className="container">
          <div className="mb-14 flex items-center gap-x-10">
            <h2 className="whitespace-nowrap font-semibold">
              <span className="font-mono font-medium text-sky-500">2. </span>
              My Projects
            </h2>
            <div className="h-px w-full bg-sky-200/25" />
          </div>

          <div className="grid gap-10 px-0 sm:px-10 md:grid-cols-2 md:px-0 lg:grid-cols-3 lg:px-10 2xl:grid-cols-4">
            {projects.map(({ sys, fields }) => (
              <div
                className="relative rounded-lg border border-slate-600/50 p-5 pb-14 shadow-lg"
                key={sys.id}
              >
                <div className="relative mb-5 aspect-video">
                  <Image
                    src={`https:${fields.image.fields.file.url}`}
                    alt={fields.title}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    className="rounded-md"
                    layout="fill"
                  />
                </div>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-100">
                      {fields.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {new Date(
                        Date.parse(fields.dateCompleted)
                      ).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex gap-x-3 text-2xl text-slate-600">
                    {fields.demoUrl && (
                      <a target="_blank" href={fields.demoUrl} rel="noreferrer">
                        <FiExternalLink className="hover:text-slate-500 " />
                      </a>
                    )}
                    {fields.sourceUrl && (
                      <a
                        target="_blank"
                        href={fields.sourceUrl}
                        rel="noreferrer"
                      >
                        <FaGithub className="hover:text-slate-500 " />
                      </a>
                    )}
                  </div>
                </div>
                <p className="font-light leading-relaxed text-slate-400">
                  {fields.description}
                </p>
                <div className="absolute  bottom-5 right-5 left-5">
                  <Marquee
                    className="font-mono text-sm text-sky-300/80"
                    gradientColor={[0, 12, 19]}
                    gradientWidth={20}
                    pauseOnHover
                  >
                    {/* <p className="text-sm text-sky-300/80 font-mono absolute bottom-5 right-5 left-5 whitespace-nowrap"> */}
                    {fields.technologies?.join(" · ")} ·&nbsp;
                    {/* </p> */}
                  </Marquee>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="contact">
        <div className="container text-center">
          <h2 className="mb-5 font-semibold">
            <span className="font-mono font-medium text-sky-500">3. </span>
            Get in Touch
          </h2>
          <div className="mx-auto max-w-lg">
            <p className="mb-5 font-light leading-relaxed text-slate-400">
              Want to give feedback? Have a question that I can help you with?
              Do you just wanna talk? My door is always open.
            </p>
          </div>
          <a href="mailto:raheelj2004@gmail.com">
            <button className="text-md mt-3 rounded-md border border-sky-400 px-5 py-2 font-sans text-sky-400 transition hover:bg-sky-900/25 lg:text-lg">
              Mail Me
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
