import React from 'react'
import {Outlet,Link} from "react-router-dom";
import { ReactTyped } from "react-typed";


function Content(email,phone,linkedin,github,instagram) {

  email="kunjilal976@gmail.com"
  phone="9784490966"
  linkedin="https://www.linkedin.com/in/kunji-lal-meena-560b59253"
  github="https://github.com/Kunjilal976"
  instagram="https://www.instagram.com/kunjilal_03/?hl=en"

  const sendEmail = () => {
    window.open(`mailto:${email}`, '_blank');
  };

  const callPhone = () => {
    window.open(`tel:${phone}`, '_blank');
  };

  const openLinkedIn = () => {
    window.open(linkedin, '_black ');
  };

  const openGitHub = () => {
    window.open(github, '_blank');
  };

  const insta = () => {
    window.open(instagram, '_blank');
  };

  return (
    <>
    <div className="max-w">
      <div className="flex justify-center bg-black">
        <nav className="self-center w-full max-w-7xl pt-1">
          <div className="flex flex-col lg:flex-row justify-around items-center text-white">
            <h1 className="uppercase text-lg font-sans font-bold">portfolio</h1>
            <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link  to="/">Home</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
               <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link to="/Projects">Projects</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link to="/About">About</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>

            <div className="text-white text-center text-base pr-5 inline-flex">
              <Link href="/"  onClick={sendEmail} className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"><i className="fa fa-envelope"></i></Link>
              <Link href="/" onClick={callPhone} className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i className="fa fa-phone"></i></Link>
              <Link href="/" onClick={openGitHub} className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"><i className="fa fa-github"></i></Link>
              <Link href="/" onClick={openLinkedIn} className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"><i className="fa fa-linkedin"></i></Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex justify-center bg-black p-8 h-screen">
        <div className="flex flex-col justify-center">
          <div
            className="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full"
          >
            <div
              className="flex flex-col text-white md:items-start items-center justify-between space-y-3 px-8"
            >
              <div className="text-5xl md:text-7xl font-bold">Kunji Lal Meena</div>
              <div className="text-lg uppercase md:text-3xl">
               <ReactTyped strings={["Frontend Developer","full stack developer","Here you can find anything"]} typeSpeed={40} backSpeed={40}/>
              </div>
              <div className="text-xl md:text-3xl">
              <Link href="/" onClick={insta} className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-200"><i>@kunjilal_03</i>
                </Link></div>
            </div>

            <div className="flex space-x-2 md:space-x-6 md:m-4 ">
            <div className="md:w-28 w-16 h-60 md:h-96 overflow-hidden rounded-xl hover:transform hover:scale-110 transition-transform duration-300">
                <img src="https://source.unsplash.com/100x400/?nature" className="h-full w-full" alt=""/>
              </div>

              <div className="md:w-56 w-16 h-60 md:h-96 overflow-hidden rounded-xl hover:transform hover:scale-110 transition-transform duration-300">
                <img src="https://source.unsplash.com/100x400/?technology" className="h-full w-full" alt=""/>
              </div>

              <div className="md:w-28 w-16 h-60 md:h-96 overflow-hidden rounded-xl hover:transform hover:scale-110 transition-transform duration-300">
                <img src="https://source.unsplash.com/100x400/?boy" className="h-full w-full" alt=""/>
              </div>

              <div className="md:w-28 w-16 h-60 md:h-96 overflow-hidden rounded-xl hover:transform hover:scale-110 transition-transform duration-300">
                <img src="https://source.unsplash.com/100x400/?flower" className="h-full w-full" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
   <Outlet/>
  </>
  );
}

export default Content;