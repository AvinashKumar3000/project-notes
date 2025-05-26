import { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    register(email, password);
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign up</h2>
        <div className="mb-4">
          <input
            id="email"
            type="email"
            name="username"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>
        <button
          type='submit'
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors font-semibold"
        >
          create new account
        </button>
      </form>
    </div>
  )
}
