import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative z-10 max-w-screen-sm mx-auto p-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Column N.A. Member FDIC
        </h4>
        <h1 className="text-4xl font-extrabold mb-4 leading-tight">
          The developer
          <br />
          infrastructure bank
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          The only nationally chartered bank built to enable developers and builders to cre
          <span className="inline-block animate-typing border-r-2 border-gray-800 ml-1">
            ate new financial products
          </span>
        </p>
        <div className="flex gap-4">
          <Link
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            to='/login'
            rel="noopener noreferrer"
          >
            Get started
          </Link>
          <Link
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded hover:bg-gray-200 transition"
            to="#"
          >
            Enjoy Yourself
          </Link>
        </div>
      </div>
    </div>
  );
}
