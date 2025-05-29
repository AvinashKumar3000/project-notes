import { useContext, useState } from "react";
import StorageContext from "../../context/StorageContext";

export default function Card({ item, index }) {
    const [isFavorite, setIsFavorite] = useState(item?.isFavorite);
    const { deleteItem, updateItem } = useContext(StorageContext);

    function handleDelete() {
        deleteItem(index);
    }

    function handleFavorite() {
        updateItem(index, { isFavorite: !isFavorite });
        setIsFavorite(!isFavorite);
    }

    return (
        <div
            className="relative bg-white rounded-[1.5rem] shadow-2xl p-0 flex flex-col items-center max-w-xs w-full border-2 border-gray-300 overflow-hidden playcard"
            style={{
                aspectRatio: "2.5/3.5",
                minHeight: 320,
                minWidth: 220,
                boxShadow: "0 8px 24px 0 rgba(0,0,0,0.10)",
                position: "relative"
            }}
        >
            {/* Top left corner */}
            <div className="absolute top-2 left-3 flex flex-col items-start text-xs font-bold text-gray-700">
                <span>{item?.isPrivate ? `🔒 owned by ${item?.ownedBy}` : "🆓"}</span>
                <span className="mt-1">{item.price ? `₹${item.price}` : ""}</span>
            </div>
            {/* Top right: Favorite */}
            <div className="absolute top-2 right-3">
                {isFavorite && (
                    <span className="text-yellow-400 text-2xl drop-shadow">⭐</span>
                )}
            </div>
            {/* Center image */}
            <div className="flex-1 flex flex-col justify-center items-center mt-8 mb-2">
                <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-lg shadow"
                    style={{ border: "2px solid #e2e8f0", background: "#fff" }}
                />
            </div>
            {/* Name and desc */}
            <div className="w-full px-4 text-center">
                <h2 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h2>
                <p className="text-gray-500 text-xs mb-2">{item.desc}</p>
            </div>
            {/* Context info */}
            <div className="w-full px-4 mb-2">
                <div className="flex flex-wrap justify-center gap-1 text-[11px]">
                    <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">Company: {item.company}</span>
                    <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded">Category: {item.category}</span>
                    <span className="bg-pink-50 text-pink-700 px-2 py-0.5 rounded">Made In: {item.madeIn}</span>
                    <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded">Age: {item.ageCategory}</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Stock: {item.stock}</span>
                    <span className="bg-orange-50 text-orange-700 px-2 py-0.5 rounded">{item?.isPrivate ? `Owner: ${item.ownedBy}` : "Public"}</span>
                </div>
            </div>
            {/* Bottom actions */}
            <div className="flex gap-2 mb-3 w-full justify-center">
                <button
                    className="flex items-center gap-1 px-3 py-1 bg-red-50 text-red-700 rounded-lg hover:bg-red-200 transition font-medium text-xs"
                    onClick={handleDelete}
                >
                    🗑️ Delete
                </button>
                <button
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg transition font-medium text-xs ${
                        isFavorite
                            ? 'bg-yellow-200 text-yellow-900 border border-yellow-400'
                            : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                    }`}
                    onClick={handleFavorite}
                >
                    {isFavorite ? '⭐ Favorited' : '☆ Favorite'}
                </button>
            </div>
            {/* Bottom right: suit-like icon */}
            <div className="absolute bottom-2 right-3 text-xs text-gray-400 rotate-180">
                {item.category === "Games" ? "♠" : item.category === "Toys" ? "♥" : "♦"}
            </div>
            {/* Bottom left: index */}
            <div className="absolute bottom-2 left-3 text-xs text-gray-400">
                #{index + 1}
            </div>
        </div>
    );
}

/* Add to your CSS (e.g., App.css or Card.css):

.playcard {
    transition: transform 0.2s cubic-bezier(.4,2,.6,1);
}
.playcard:hover {
    transform: scale(1.07) rotate(-2deg);
    box-shadow: 0 16px 40px 0 rgba(0,0,0,0.18);
}
*/
