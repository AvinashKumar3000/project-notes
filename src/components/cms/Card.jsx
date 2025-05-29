import { useContext, useState } from "react";
import StorageContext from "../../context/StorageContext";

export default function Card({ item, index }) {
    const [isFavorite, setIsFavorite] = useState(item?.isFavorite);
    const { deleteItem, updateItem } = useContext(StorageContext); // Access function from context

    function handleDelete() {
        deleteItem(index);
    }

    function handleFavorite() {
        updateItem(index,{ isFavorite: !isFavorite});
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={item.imgUrl} alt={item.name} className="w-40 h-40 object-cover rounded mb-4" />
            <h2 className="text-lg font-bold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-2">{item.desc}</p>
            <div className="text-sm text-gray-500 mb-1">Company: {item.company}</div>
            <div className="text-sm text-gray-500 mb-1">Category: {item.category}</div>
            <div className="text-sm text-gray-500 mb-1">Made In: {item.madeIn}</div>
            <div className="text-sm text-gray-500 mb-1">Age: {item.ageCategory}</div>
            <div className="flex justify-between items-center w-full mt-2">
                <span className="text-blue-600 font-semibold">₹{item.price}</span>
                <span className={`text-xs px-2 py-1 rounded ${item.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.stock > 0 ? `In Stock (${item.stock})` : 'Out of Stock'}
                </span>
            </div>
            <div className="flex gap-2 mt-4">
                <button
                    className="cursor-pointer px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition"
                    onClick={handleDelete}
                >
                    🗑️ delete
                </button>
                <button
                    className={`cursor-pointer px-3 py-1 rounded transition ${item?.isFavorite ? 'bg-yellow-300 text-yellow-900' : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'}`}
                    onClick={handleFavorite}
                >
                    <span>{isFavorite ? '⭐ Favorited' : '☆ Mark as favorite'}</span>
                </button>
            </div>
        </div>
    )
}
