import { useContext, useState } from 'react';
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
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
			<form
				onSubmit={handleSubmit}
				className="bg-white/90 p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200"
			>
				<h2 className="text-3xl font-extrabold mb-8 text-center text-blue-700 tracking-tight">
					Create Your Account
				</h2>
				<div className="mb-6">
					<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
						Email Address
					</label>
					<input
						id="email"
						type="email"
						name="username"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
						placeholder="you@example.com"
					/>
				</div>
				<div className="mb-8">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Password
					</label>
					<input
						id="password"
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
						placeholder="••••••••"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all font-bold shadow-lg"
				>
					Create New Account
				</button>
				<div className="mt-6 text-center text-sm text-gray-500">
					Already have an account?{' '}
					<a href="/login" className="text-blue-600 hover:underline">
						Sign in
					</a>
				</div>
			</form>
		</div>
	);
}
