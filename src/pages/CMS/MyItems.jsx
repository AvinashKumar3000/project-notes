import { useContext } from 'react';
import StorageContext from '../../context/StorageContext';
import Card from '../../components/cms/Card';
import AuthContext from '../../context/AuthContext';

export default function MyItems() {
	const { items } = useContext(StorageContext);
	const { userEmail } = useContext(AuthContext);

	if (items.filter((x) => x?.isPrivate && x?.ownedBy === userEmail).length === 0) {
		return (
			<div className="flex flex-col items-center justify-center h-96 bg-gray-50 rounded-lg shadow-inner">
				<span className="text-gray-500 text-lg font-semibold mb-2">
					No Private items owned by you 🥲
				</span>
			</div>
		);
	}
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8  rounded-lg">
			{items.map((value, index) => {
				if (value?.isPrivate && value?.ownedBy === userEmail)
					return <Card key={index} item={value} index={index} />;
				else return null;
			})}
		</div>
	);
}
