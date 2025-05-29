import { useContext } from 'react';
import StorageContext from '../../context/StorageContext';
import Card from '../../components/cms/Card';

export default function MyFavorites() {
	const { items } = useContext(StorageContext);

	if (items.filter((x) => x.isFavorite).length === 0) {
		return (
			<div className="flex flex-col items-center justify-center h-96 bg-gray-50 rounded-lg shadow-inner">
				<span className="text-gray-500 text-lg font-semibold mb-2">
					No Favorite items selected 🥲
				</span>
			</div>
		);
	}
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8  rounded-lg">
			{items.map((value, index) => {
				if (value.isFavorite) return <Card key={index} item={value} index={index} />;
				else return null;
			})}
		</div>
	);
}
