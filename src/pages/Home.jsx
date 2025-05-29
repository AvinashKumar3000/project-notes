import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
			<div className="relative z-10 max-w-screen-sm mx-auto p-10 bg-white rounded-xl shadow-2xl border border-blue-100">
				<h4
					title="ceo of MVIII TECH (OPC) Pvt. Ltd."
					className="text-base font-semibold text-blue-700 mb-2 tracking-wide"
				>
					<sup className="text-xs text-blue-400">by</sup> Avinash ( BYTS )
				</h4>
				<h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-gray-900 drop-shadow">
					The Beginner level React Project
					<br />
					<span className="text-blue-600">Sleek CMS</span>
				</h1>
				<p className="text-lg text-gray-700 mb-8">
					This could be your very first best project to start after learning{' '}
					<strong>REACT</strong>.
					<br />
					<span className="text-red-500 font-semibold inline-block animate-typing border-r-2 border-blue-700 ml-1">
						Code like a pro
					</span>
				</p>
				<div className="flex gap-4">
					<Link
						className="shadow-lg shadow-blue-200 inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
						to="/login"
						rel="noopener noreferrer"
					>
						Get started
					</Link>
					<a
						className="shadow-lg shadow-gray-200 inline-flex items-center px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200"
						href="https://github.com/AvinashKumar3000/project-notes"
						target="_blank"
					>
						Explore the code
						<span className="pl-6"></span>
						<svg
							height="28"
							aria-hidden="true"
							viewBox="0 0 24 24"
							version="1.1"
							width="28"
							data-view-component="true"
							className="octicon octicon-mark-github ml-2"
						>
							<path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}
