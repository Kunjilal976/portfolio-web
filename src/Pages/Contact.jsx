import React from 'react'

function Contact() {
  return (
    <div className="max-w-md mx-auto">
    <form action="submit_form.php" method="POST" className="bg-red-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label for="name" className="block text-white text-sm font-bold mb-2">Name:</label >
        <input type="text" id="name" name="name" required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label for="email" className="block text-white text-sm font-bold mb-2">Email:</label>
        <input type="email" id="email" name="email" required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-6">
        <label for="message" className="block text-white text-sm font-bold mb-2">Message:</label>
        <textarea id="message" name="message" required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>

      <div className="flex items-center justify-between">
        <button type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default Contact