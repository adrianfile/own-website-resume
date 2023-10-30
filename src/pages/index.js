import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll'
import {StaticImage} from "gatsby-plugin-image"
import {Helmet} from "react-helmet"
import ScrollTop from "../components/scrollTop"



const IndexPage = () => (
  
  <section className="text-white">
    <ScrollTop />
    <Helmet>
      <title>Adrian Hartanto</title>
      <link rel="icon" type="image/png" />
    </Helmet>
    <div className="my-80 pb-64">
      <div className="h-32 w-64 md:w-96 mx-auto text-white">
        <p className="text-3xl md:text-5xl md:text-center zilla">Adrian Hartanto</p>
        <br></br>
        <p className="text-xl md:text-2xl md:text-center">Suka minum susu</p>
        <br></br>
        <button className="ml-20 md:mx-auto font-bold flex text-center px-2 bg-white text-black rounded-full hover:bg-indigo-600 hover:text-white transition delay-300 "
          onClick={()=> scrollTo('#about')}>
          MARI KEBAWAH
        </button>
      </div>
    </div>
    <div id="about" className="pb-72">
      <div className="md:flex">
        <div className="xl:ml-44 hidden xl:block overflow-hidden rounded-full">
          <StaticImage 
            src="../images/myphoto.png"
            width={2000}
          />
        </div>
        <div className="xl:items-center xl:mt-28">
          <p className=" font-bold text-center md:text-left md:mx-10 2xl:mx-64 md:text-xl">
            BIARKAN AKU MEMPERKENALKAN DIRI
          </p>
          <br></br>
          <p className="text-justify px-5 md:px-10 2xl:px-64">
               Hai, namaku Adrian. Aku dulunya seorang Web Developer dengan menggunakan JAMStack dan juga LAMPStack ya agak lupa sih sekarang heheh. Tetapi disamping itu, aku mempunyai pengalaman sebagai yang katanya cuma ngetest gim aja, yap QA gim. Ya walaupun hanya sedikit pengalamanku setidaknya clientku sih puas. Skill yang aku kuasai pertama pastinya skill-skill utilitas seperti XMind, Ms.Office, dan Figma, oh iya kadang VSCode. Untuk skill yang menjerumus suatu bidang yang aku yakini sekarang itu QA dimana kalau Web Developer harus mengulangi materi kembali.
          </p>
        </div>
      </div>
      <div className="md:flex">
        <div className="xl:items-center xl:mt-28 pt-10 block">
          <p className=" font-bold text-center md:mx-10 2xl:mx-64 md:text-xl">
            PENGALAMAN
          </p>
          <br></br>
            <p className="text-xl text-center md:text-left ">
                NetEase
            </p>
            <br></br>
            <p>Freelance Quality Assurance<br></br>( Agustus 2023 - Oktober 2023)</p>
            <p><a href="https://play.google.com/store/apps/details?id=com.netease.newspike"> Tekan disini untuk lihat Produk</a></p>
          <br></br>
          <div className="text-justify  px-5 md:px-10 2xl:px-64">
            <p className="text-xl text-center md:text-left ">
                910Shoes
            </p>
            <br></br>
            <p>FullStack Web Developer<br></br>( March 2020 - September 2020)</p>
            <p><a href="https://910.id"> Tekan disini untuk lihat Portofolio </a></p>
            <br></br>
            <p className="text-xl text-center md:text-left ">
                WipleGames
            </p>
            <br></br>
            <p>Junior Quality Assurance<br></br>( April 2015 - Mei 2015, Juli 2019 - Oktober 2019)</p>
            <p><a href="http://ironsight.pmang.com"> Tekan disini ( KR Version )</a></p>
            <p><a href="https://store.steampowered.com/app/783770/Ironsight/"> Tekan disini ( Asian Version )</a></p>
            <br></br>
            <p className="text-xl text-center md:text-left ">
                Zepetto Co.
            </p>
            <br></br>
            <p>User Acceptance Tester ( Under QA Division )<br></br>( April 2019 - Mei 2019)</p>
            <p><a href="https://store.steampowered.com/app/1039870/Survival_Frenzy/"> Tekan disini untuk lihat Produk</a></p>


          </div>
        </div>
        <div className="xl:items-center xl:mt-28 pt-10 block">
          <p className=" font-bold text-center md:mx-10 2xl:mx-64 md:text-xl">
            SUKARELAWAN / INTERN
          </p>
          <br></br>
          <div className="text-justify  px-5 md:px-10 2xl:px-64">
            <p className="text-xl text-center md:text-left ">
                Anantarupa Studios
            </p>
            <br></br>
            <p>QA Helper untuk Lokapala<br></br>( Februari 2022 - Oktober 2022)</p>

          </div>
          
        </div>
      </div>
    </div>
    <div>
      <div className="text-center font-bold">
        <p className="pb-20 md:text-xl">I've been learn this :</p>
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
      <p className="md:text-xl font-bold text-center pb-10 pt-72">
        Keisenganku dalam memakai JavaScript dulu:
      </p>
      <div className="space-y-10 md:space-y-0 md:flex pt-10">
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
    <div className="pt-40">
      <p className="text-center text-xl font-bold pb-5">WE CAN COLLABORATE OR HIRE ME VIA</p>
      <div className="relative border-b-2 w-4/4 md:w-1/4 h-28 mx-auto">
        <a href="mailto:adrianfile1@gmail.com" 
           className="absolute hover:bg-blue-200 hover:text-black transition duration-700 ease-in-out inset-0">
             <p className="text-center mt-10 text-xl font-bold">Via E-Mail</p>
        </a>
      </div>
      <div className="relative w-4/4 md:w-1/4 h-28 mx-auto">
        <a href="https://wa.me/6281292767383" 
           className="absolute hover:bg-blue-200 hover:text-black transition duration-700 ease-in-out inset-0">
             <p className="text-center mt-10 text-xl font-bold">Via WhatsApp</p>
        </a>
      </div>
        
    </div>
    <div id="footer" className="pt-10 text-center">
      <p>2021. Created by <a className="text-purple-300" href="https://www.facebook.com/mhankskuy">Adrian Hartanto</a> using <a className="text-purple-300" href="https://www.gatsbyjs.com/">GatsbyJS</a></p>
    </div>
  </section>
)

export default IndexPage
