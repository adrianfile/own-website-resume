import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll'
import {StaticImage} from "gatsby-plugin-image"



const IndexPage = () => (
  
  <section className="text-white ">
    <div className="my-80 pb-64">
      <div className="h-32 w-64 md:w-96 mx-auto text-white">
        <p className="text-3xl md:text-5xl md:text-center zilla">Adrian Hartanto</p>
        <br></br>
        <p className="text-xl md:text-2xl md:text-center">I'm a developer, i'm a planner, and i'm in learning to be going Master JavaScript.</p>
        <br></br>
        <button className="ml-40 md:mx-auto font-bold flex text-center px-2 bg-white text-black rounded-full hover:bg-indigo-600 hover:text-white transition delay-300 "
          onClick={()=> scrollTo('#awal')}>
          HIRE ME
        </button>
      </div>
    </div>
    <div className="pb-96 md:flex">
      <div className="xl:ml-44 hidden xl:block overflow-hidden rounded-full">
        <StaticImage 
          src="../images/myphoto.png"
          width={1000}
        />
      </div>
      <div className="xl:items-center xl:mt-28">
        <p className=" font-bold text-center md:text-left md:mx-64 md:text-xl">
          LET ME INTRODUCE MY SELF!
        </p>
        <br></br>
        <p className="text-justify px-5 xl:px-64">
            Hi World, my full name is Adrian Hartanto. You can call me Adri, Ian, Anto ,and Dre. i've learn Web Deveploment almost 2 years and 1 year for Software Development. I don't have any work experience on this skill on every company surely will be the new chick. I'm exciting to spend all my time to dreaming and make real a new world changer. 
        </p>
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
      <p className="md:text-xl font-bold">
        I use JavaScript to build the following applications:
      </p>
    </div>
  </section>
)

export default IndexPage
