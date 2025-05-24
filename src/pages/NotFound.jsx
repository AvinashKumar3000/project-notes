import React from 'react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white rounded-xl shadow-2xl p-10 flex flex-col items-center">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-black mb-4 drop-shadow-lg">
          404
        </h1>
        <p className="text-3xl font-semibold text-gray-700 mb-2">Page Not Found</p>
        <p className="text-gray-500 mb-6 text-center max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-4 px-6 py-2 bg-black text-white rounded-full shadow hover:scale-105 transition-transform"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
