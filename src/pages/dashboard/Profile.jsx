import { useState } from 'react';
import Swal from 'sweetalert2';
import userService from '../../service/userService';

export default function Profile() {
	// For demo, get user email from localStorage (simulate current user)
	// In real app, get from auth context or props
	const [currentEmail, setCurrentEmail] = useState(() => {
		const db = JSON.parse(localStorage.getItem('db'));
		// Assume first user is current user for demo
		return db?.users?.[0]?.email || '';
	});
	const [email, setEmail] = useState(currentEmail);
	const [password, setPassword] = useState('');
	const [editEmail, setEditEmail] = useState(false);
	const [editPassword, setEditPassword] = useState(false);

	const handleEmailSave = () => {
		try {
			userService.editUserEmail(currentEmail, email);
			setCurrentEmail(email);
			setEditEmail(false);
			Swal.fire({ icon: 'success', title: 'Email updated!' });
		} catch (err) {
			Swal.fire({ icon: 'error', title: 'Error', text: err.message });
		}
	};

	const handlePasswordSave = () => {
		try {
			userService.editUserPassword(currentEmail, password);
			setEditPassword(false);
			setPassword('');
			Swal.fire({ icon: 'success', title: 'Password updated!' });
		} catch (err) {
			Swal.fire({ icon: 'error', title: 'Error', text: err.message });
		}
	};

	return (
		<div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
			<h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Profile</h2>
			<div className="mb-6">
				<label className="block text-gray-700 font-semibold mb-2">Email</label>
				<div className="flex gap-2 items-center">
					<input
						type="email"
						value={email}
						disabled={!editEmail}
						onChange={(e) => setEmail(e.target.value)}
						className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${editEmail ? '' : 'bg-gray-100 text-gray-500'}`}
					/>
					{editEmail ? (
						<>
							<button
								onClick={handleEmailSave}
								className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
							>
								Save
							</button>
							<button
								onClick={() => {
									setEditEmail(false);
									setEmail(currentEmail);
								}}
								className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
							>
								Cancel
							</button>
						</>
					) : (
						<button
							onClick={() => setEditEmail(true)}
							className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
						>
							Edit
						</button>
					)}
				</div>
			</div>
			<div className="mb-6">
				<label className="block text-gray-700 font-semibold mb-2">Password</label>
				<div className="flex gap-2 items-center">
					<input
						type="password"
						value={password}
						disabled={!editPassword}
						onChange={(e) => setPassword(e.target.value)}
						placeholder={editPassword ? 'Enter new password' : '********'}
						className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${editPassword ? '' : 'bg-gray-100 text-gray-500'}`}
					/>
					{editPassword ? (
						<>
							<button
								onClick={handlePasswordSave}
								className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
							>
								Save
							</button>
							<button
								onClick={() => {
									setEditPassword(false);
									setPassword('');
								}}
								className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
							>
								Cancel
							</button>
						</>
					) : (
						<button
							onClick={() => setEditPassword(true)}
							className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
						>
							Edit
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
