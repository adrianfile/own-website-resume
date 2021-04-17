import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll'
import {StaticImage} from "gatsby-plugin-image"
import {Helmet} from "react-helmet"



const IndexPage = () => (
  
  <section className="text-white">
    
    <div className="my-80 pb-64">
      <div className="h-32 w-64 md:w-96 mx-auto text-white">
        <p className="text-3xl md:text-5xl md:text-center zilla">Adrian Hartanto</p>
        <br></br>
        <p className="text-xl md:text-2xl md:text-center">I'm a developer, i'm a planner, and i'm in learning to be going Master JavaScript.</p>
        <br></br>
        <button className="ml-20 md:mx-auto font-bold flex text-center px-2 bg-white text-black rounded-full hover:bg-indigo-600 hover:text-white transition delay-300 "
          onClick={()=> scrollTo('#about')}>
          LET'S GO DOWN
        </button>
      </div>
    </div>
    <div id="about">
      <div className="pb-96 md:flex">
      <div className="xl:ml-44 hidden xl:block overflow-hidden rounded-full">
        <StaticImage 
          src="../images/myphoto.png"
          width={2000}
        />
      </div>
      <div className="xl:items-center xl:mt-28">
        <p className=" font-bold text-center md:text-left md:mx-10 2xl:mx-64 md:text-xl">
          LET ME INTRODUCE MY SELF!
        </p>
        <br></br>
        <p className="text-justify px-5 md:px-10 2xl:px-64">
            Hi World, my full name is Adrian Hartanto. You can call me Adri, Ian, Anto ,and Dre. i've learn Web Deveploment almost 2 years and 1 year for Software Development. I don't have any work experience on this skill on every company surely will be the new chick. I'm exciting to spend all my time to dreaming and make real a new world changer. 
        </p>
      </div>
    </div>
    </div>
    <div>
      <div className="text-center font-bold">
        <p className="pb-10 md:text-xl">I've been learn this :</p>
        <div className=" md:justify-content-center md:items-center md:space-x-20 md:inline-block space-y-6 md:space-y-0">
          <div className="md:inline-block">
            <p>JavaScript</p>
            <StaticImage 
              src="../images/JavaScript.png"
              width={200}
            />
          </div>
          <div className="md:inline-block">
            <p>HTML</p>
            <StaticImage 
              src="../images/html.png"
              width={200}
            />
          </div>
          <div className="md:inline-block">
            <p>CSS</p>
            <StaticImage 
              src="../images/css.png"
              width={200}
            />
          </div>
          <div className="md:inline-block">
            <p>React Libraries</p>
            <StaticImage 
              src="../images/React-icon.svg"
              width={280}
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <p className="md:text-xl font-bold text-center pb-10 pt-20">
        I use JavaScript to build the following applications:
      </p>
      <div className="space-y-10 md:space-y-0 md:flex">
        <div className="relative w-3/4 md:w-1/4 mx-auto">
            <StaticImage 
              src="../images/Gacha.png"
              width={400}
              placeholder='A'
              className="block w-full mx-auto"
            />
            <a  href="https://kang-gacha-adrianfile.vercel.app"
                className="absolute transition inset-0 text-black hover:text-white text-center bg-blue-50 bg-opacity-50 hover:bg-blue-500 hover:bg-opacity-75 ease-in-out">
              <p className="mt-20 text-xl">Gacha Percents</p>
            </a>
        </div>
        <div className="relative w-3/4 md:w-1/4 mx-auto">
            <StaticImage 
              src="../images/Bot.png"
              width={400}
              placeholder='A'
              className="block w-full mx-auto"
            />
            <a  href="https://github.com/adrianfile/scratch-idea-bot"
                className="absolute transition inset-0 text-black hover:text-white text-center bg-blue-50 bg-opacity-50 hover:bg-blue-500 hover:bg-opacity-75 ease-in-out">
              <p className="mt-20 text-xl">Discord Bot</p>
            </a>
        </div>
      </div>
    </div>
  </section>
)

export default IndexPage
