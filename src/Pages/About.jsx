import React from "react";
import img from './IMG_20231109_120652.jpg'

function About() {
  return (
    <section className=" bg-blue-300 py-16">
      <div className="container  px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={img}
              alt="Profile"
              className="rounded-full h-auto w-full md:w-1/3 mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg leading-relaxed">
            Proactive and driven pre-final year student,seeking for Frontend Developer intern opportunities .I am
            passionate about creating intuitive and user-friendly interfaces, I am eager to apply my knowledge and skills
            in HTML, CSS, and JavaScript to contribute to innovative web development projects..
            </p>
            <p className="text-lg leading-relaxed mt-8">
             
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
            <ul className="list-disc pl-4">
            <li><span className="font-semibold">Email:</span> kunjilal976@gmail.com</li>
            <li><span className="font-semibold">Phone:</span> 9784490966</li>
            <li><span className="font-semibold">Address:</span> Harirampura, Sawai Madhopur, Rajasthan,Pin Code-322202</li>
            
          </ul>
    </div>
            </p>

            
          </div>
        </div>
      </div>

      <div className="bg-black text-white-900 py-12 my-20">
      <div className="container mx-auto px-1">
        <h2 className="text-3xl font-bold mb-4 text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* Skill Cards */}
          <div className="rounded-lg shadow-md p-6 bg-red-200 hover:transform hover:scale-110 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
            <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div className="rounded-lg shadow-md p-6 bg-green-200 hover:transform hover:scale-110 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div className="rounded-lg shadow-md p-6 bg-yellow-200 hover:transform hover:scale-110 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-2">Other Skills</h3>
            <ul className="list-disc list-inside">
              <li>Git</li>
              <li>RESTful APIs</li>
              <li>Database Management (MongoDB)</li>
              <li>Responsive Design</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:transform hover:scale-110 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Circular Activities</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Technology</li>
              <li>Hiking</li>
              <li>Cricket</li>
              <li>Swimming</li>
            </ul>
          </div>
          {/* Add more skill cards as needed */}
        </div>
      </div>
    </div>
    
   
    </section>
  );
}

export default About;
