import shirakawa from "../assets/shirakawa.png";
import lapotoba from "../assets/lapotoba.png";
import klingking from "../assets/klingking.png";
import wedding from "../assets/wedding.png";
import star from "../assets/star.png";
import arrow from "../assets/arrow.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function FirstSection() {
  return (
    <div className="w-full bg-[#DDC5AA]">
      <div className="md:pt-36 pt-4 pb-2 flex justify-center w-full border-b-2 border-gray-800">
        <h1 className="md:text-8xl text-5xl font-extrabold">The Creation</h1>
      </div>
      <div className="h-12 w-full flex justify-evenly items-center">
        <h1 className="font-semibold italic md:text-base text-[10px]">PHOTOGRAPHY: ROY YOBIHANA</h1>
        <h1 className="font-semibold italic md:text-base text-[10px]">
          A PIECE FROM A PARALLEL REALITY
        </h1>
      </div>

      <div className="gallery font-medium mt-8 md:px-0 px-5">
        <div className="md:text-lg flex md:flex-row flex-col md:justify-end text-end md:mr-[28rem] mb-5">
            <p className="w-32">these are some of the results</p>
        </div>
        <div className="flex justify-center md:flex-row flex-col md:gap-20 gap-10">
          <div className="text flex flex-row-reverse">
            <p className="w-20 pt-24 pl-3 md:text-lg text-base">In some of Roy&apos;s shots,</p>
            <div className="shirakawa md:w-80">
              <div className="images">
                <img src={shirakawa} alt="shirakawa" className="" />
              </div>
              <div className="desc flex justify-between">
                <p className="flex gap-2 items-center">
                  Roypoto,<span className="border-b border-black">«Shirakawa-</span>
                </p>
                <p>2024</p>
              </div>
              <div className="link">
                <a href="#" className="border-b border-black">
                  go»
                </a>
              </div>
            </div>
          </div>

          <div className="text flex items-center md:gap-10 gap-5">
            <p className="w-20 md:text-lg">In the art, many people are used as the main object</p>
            <div className="lapotoba md:w-[35rem]">
              <div className="images">
                <img src={lapotoba} alt="lapotoba" />
              </div>
              <div className="desc flex justify-between">
                <p>
                  Roypoto,{" "}
                  <a href="#" className="border-b border-black">
                    «Lapo toba dream»
                  </a>{" "}
                </p>
                <p>2021</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between md:flex-row flex-col mt-12">


        <div className="text flex items-center md:ml-24 md:gap-8 gap-4">
          <p className="w-16 md:text-lg" >One of them is his wife</p>
          <div className="klingking w-80">
            <div className="images flex items-center">
              <img src={klingking} alt="shirakawa" />
            </div>
            <div className="desc flex justify-between">
              <p className="flex gap-1 items-center">
                Roypoto,<span className="border-b border-black">Klingking-</span>
              </p>
              <p>2022</p>
            </div>
            <div className="link">
              <a href="#" className="border-b border-black">
                beach»
              </a>
            </div>
          </div>
        </div>

        <div className="wedding w-[22rem] md:w-[32rem] mt-32 mr-44">
          <div className="images">
            <img src={wedding} alt="lapotoba" />
          </div>
          <div className="desc flex justify-between">
            <p>
              Roypoto,{" "}
              <a href="#" className="border-b border-black">
                «Bali, Indonesia »
              </a>{" "}
            </p>
            <p>2024</p>
          </div>
        </div>

        </div>

      </div>

      <div className="flex md:flex-col flex-col-reverse">

      <div className="insta md:ml-44 ml-2 md:mt-24 mt-12 ">
        <img src={star} alt=""  className="absolute w-10 -mt-4 -ml-2"/>
      <div className="button bg-black rounded-full text-white text-sm md:text-xl w-[14rem] md:w-[19rem] py-3 px-1 flex justify-center text-center">
        <a href="#">VIEW MORE ON INSTAGRAM</a>
      </div>
      </div>


      <div className="arrow flex items-center md:justify-end justify-center md:mr-44 mr-0 md:mt-0 mt-12 gap-2">
        <div className="img">
            <img src={arrow} alt="" />
        </div>
        <div className="text">
            <p className="">sometime&apos;s also take pre-wedding photos</p>
        </div>
      </div>


      </div>
      <div className="get flex items-center gap-5 mt-5 ml-2">
      <h1 className="md:text-9xl font-bold text-6xl">GET</h1>
      <FontAwesomeIcon icon={faCircleArrowDown} className="md:text-8xl text-5xl" />
      </div>

    </div>
  );
}
