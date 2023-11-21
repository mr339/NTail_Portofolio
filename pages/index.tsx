import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-10 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              Developedby339
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-700 text-white px-4 py-2 rounded-md ml-8 "
                >
                  resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10">
            <h2 className="text-5xl text-teal-500 font-md py-2 md:text-6xl">
              Mr.339
            </h2>
            <h3 className="text-2xl py-2 md:font-3xl">
              Testing testing Testing
            </h3>
            <p className="text-gray-700 py-2 text-md leading-7 max-w-xl mx-auto md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere
              nobis, assumenda perferendis itaque ullam ut possimus iure minus,
              consequuntur amet perspiciatis deserunt ducimus voluptate esse
              cupiditate dolore porro aspernatur.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} alt="image" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h1 className="text-3xl py-1">Services test test</h1>
            <p className="text-gray-700 py-2 text-md leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima{" "}
              <span className="text-teal-500">doloremque</span> sed maiores esse
              officia ipsa asperiores nam sapiente.{" "}
              <span className="text-teal-500">Explicabo</span> in amet tempore
              porro rem voluptates eaque sequi! Aspernatur, omnis provident.
            </p>

            <p className="text-gray-700 py-2 text-md leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              eius debitis dolorem. Eum a consectetur iste voluptatibus,
              blanditiis non expedita corrupti temporibus voluptate possimus
              minima similique odit fuga id odio?
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="shadow-lg my-10 rounded-xl p-10 text-center">
              <Image
                src={design}
                alt="design"
                width={100}
                height={100}
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Designs</h3>
              <p className="py-2">
                Greate designs i am guessing at the moment, is that ok?
              </p>
              <h4 className="text-teal-600 py-4">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="shadow-lg my-10 rounded-xl p-10 text-center">
              <Image
                src={code}
                alt="code"
                width={100}
                height={100}
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
              <p className="py-2">
                Greate designs i am guessing at the moment, is that ok?
              </p>
              <h4 className="text-teal-600 py-4">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="shadow-lg my-10 rounded-xl p-10 text-center">
              <Image
                src={consulting}
                alt="consulting"
                width={100}
                height={100}
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Consultation</h3>
              <p className="py-2">
                Greate designs i am guessing at the moment, is that ok?
              </p>
              <h4 className="text-teal-600 py-4">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portofolio</h3>
            <p className="text-gray-700 py-2 text-md leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima{" "}
              <span className="text-teal-500">doloremque</span> sed maiores esse
              officia ipsa asperiores nam sapiente.{" "}
              <span className="text-teal-500">Explicabo</span> in amet tempore
              porro rem voluptates eaque sequi! Aspernatur, omnis provident.
            </p>

            <p className="text-gray-700 py-2 text-md leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              eius debitis dolorem. Eum a consectetur iste voluptatibus,
              blanditiis non expedita corrupti temporibus voluptate possimus
              minima similique odit fuga id odio?
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover"
                style={{ width: "100%", height: "100%" }}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt="web2"
                className="rounded-lg object-cover"
                style={{ width: "100%", height: "100%" }}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="web3"
                className="rounded-lg object-cover"
                style={{ width: "100%", height: "100%" }}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="web4"
                className="rounded-lg object-cover"
                style={{ width: "100%", height: "100%" }}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt="web5"
                className="rounded-lg object-cover"
                style={{ width: "100%", height: "100%" }}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt="web6"
                className="rounded-lg object-cover"
                style={{ width: "100%", height: "100%" }}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
