import { useState, useContext } from 'react';
import { Link } from 'react-router';
import AuthContext from '../context/AuthContext';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login } = useContext(AuthContext);

	function handleSubmit(event) {
		event.preventDefault();
		login(email, password);
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
			<div className="bg-white/90 p-10 rounded-2xl shadow-2xl w-full max-w-md border border-blue-100">
				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="flex flex-col items-center mb-6">
						<div className="bg-blue-500 rounded-full p-3 mb-2 shadow-lg">
							<svg
								className="w-8 h-8 text-white"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16 12A4 4 0 1 1 8 12a4 4 0 0 1 8 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
								/>
							</svg>
						</div>
						<h2 className="text-3xl font-extrabold text-blue-700">Sign In</h2>
						<p className="text-gray-500 mt-1 text-sm">
							Welcome back! Please login to your account.
						</p>
					</div>
					<div>
						<label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
							Email
						</label>
						<input
							id="email"
							type="email"
							name="username"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
							placeholder="Enter your email"
							autoComplete="username"
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-gray-700 font-semibold mb-1"
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
							className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
							placeholder="Enter your password"
							autoComplete="current-password"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-bold shadow-md"
					>
						Login
					</button>
					<div className="text-center text-sm text-gray-500 mt-4">
						Don't have an account?{' '}
						<Link to="/sign-up" className="text-blue-600 hover:underline">
							Sign up
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
