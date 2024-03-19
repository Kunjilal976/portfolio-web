import React from 'react'
import {Outlet,Link} from "react-router-dom";


function Projects(Swiggy,TodoList,Hotstar) {

  Swiggy="https://github.com/Kunjilal976/swiggy-clone";
  TodoList="https://github.com/Kunjilal976/TodoLists"
  Hotstar ="https://github.com/Kunjilal976/hotstar"

  const swiggy = () => {
    window.open(Swiggy, '_blank');
  };

  const todoliste = () => {
    window.open(TodoList, '_blank');
  };

  const hotstar = () => {
    window.open(Hotstar, '_blank');
  };

    return (
      <div className="bg-blue-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-rows-3 gap-8">
            {/* Individual Project Cards */}
            <div className="bg-black rounded-lg p-6 hover:transform hover:scale-110 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-green-100 mb-2">Swiggy Clone</h3>
              <p className="text-green-50">
              <b className="underline">Description: </b>The website offers a seamless experience across various devices and browsers, emphasizing
              both aesthetics and performance, aligning with modern web standards.
              <ul className='list-disc'>
              <li>Designed and developed a responsive website using HTML, CSS, and JavaScript.</li>
              <li>Integrated Chrome Web Images for optimized graphics and fast loading.</li>
              <li>Tools & technologies used: HTML, CSS, JavaScript,React.js</li>
              <li><Link href="/"  onClick={swiggy} className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500 underline">
                Link</Link></li>
              </ul>
              </p>
            </div>
            <div className="bg-black rounded-lg p-6 hover:transform hover:scale-110 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-green-100 mb-2">TodoList</h3>
              <p className="text-green-50"><b className="underline">Description: </b>Developed and implemented a personalized to-do list application, 
              utilizing [insert relevant programming languages or technologies, e.g. C++ ,JavaScript, React] to enhance personal 
              productivity and task management efficiency.
              <ul className='list-disc'>
              <li>User-friendly interface with intuitive features such as task prioritization, deadline setting, 
                and categorization,resulting in improved organization and streamlined workflow.</li>
              <li>Tools & technologies used: HTML, CSS, JavaScript,React.js</li>
              <li><li><Link href="/"  onClick={todoliste} className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500 underline">
                Link</Link></li></li>
            
              </ul>
              </p>
            </div>
            <div className="bg-black rounded-lg p-6 hover:transform hover:scale-110 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-green-200 mb-2">Disney+Hotstar</h3>
              <p className="text-green-50"><b className="underline">Description: </b>Developed a front-end web application that emulates the user interface and
               design of the popular video streaming platform. This clone is very similar to the original disney plus website.
              <ul className='list-disc'>
              <li>Has navbar and search box with cool click effect.</li>
              <li>Implemented a carousel with infinity scroll effect.</li>
              <li>Tools & technologies used: HTML, CSS, JS</li>
              <li><li><Link href="/"  onClick={hotstar} className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500 underline">
               Link</Link></li></li>
              </ul>
              </p>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      <Outlet/>
      </div>
    );
  };
export default Projects