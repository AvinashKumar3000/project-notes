import { useContext, useState } from "react"
import StorageContext from "../../context/StorageContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

// Toys shop, toy details management system.
export default function AddNewItem() {
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [desc, setDesc] = useState('');
    const [company, setCompany] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [madeIn, setMadeIn] = useState('');
    const [ageCategory, setAgeCategory] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);

    const { addNewItem } = useContext(StorageContext);

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        addNewItem({
            name,
            imgUrl,
            desc,
            company,
            price,
            stock,
            category,
            priceRange,
            madeIn,
            ageCategory,
            isFavorite: false,
            isPrivate
        });
        Swal.fire({
            title: "Success!",
            text: "New toy item added successfully.",
            icon: "success",
            confirmButtonText: "OK"
        });
        navigate('/dashboard/cms/display');
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-12 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg space-y-6 border border-gray-100"
            >
                <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6 tracking-tight">
                    Add New Toy Collection
                </h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        value={imgUrl}
                        onChange={e => setImgUrl(e.target.value)}
                        placeholder="Image url"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                    />
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                    />
                    <input
                        type="text"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        placeholder="Description"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                    />
                    <input
                        type="text"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        placeholder="Company"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                    />
                    <div className="flex space-x-4">
                        <input
                            type="number"
                            placeholder="Price"
                            required
                            min={0}
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            className="w-1/2 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                        />
                        <input
                            type="number"
                            placeholder="Stock"
                            required
                            min={0}
                            value={stock}
                            onChange={e => setStock(e.target.value)}
                            className="w-1/2 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                        />
                    </div>
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition bg-white"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Action Figure">Action Figure</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Doll">Doll</option>
                        <option value="Vehicle">Vehicle</option>
                    </select>
                    <select
                        value={priceRange}
                        onChange={e => setPriceRange(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition bg-white"
                        required
                    >
                        <option value="">Select Price Range</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <select
                        value={madeIn}
                        onChange={e => setMadeIn(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition bg-white"
                        required
                    >
                        <option value="">Select country (made in)</option>
                        <option value="India">India</option>
                        <option value="China">China</option>
                    </select>
                    <select
                        value={ageCategory}
                        onChange={e => setAgeCategory(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition bg-white"
                        required
                    >
                        <option value="">Select Age Category</option>
                        <option value="0-3">0-3</option>
                        <option value="4-7">4-7</option>
                        <option value="8-12">8-12</option>
                        <option value="13+">13+</option>
                    </select>
                </div>

                <div className="flex items-center space-x-3">
                    <input
                        id="isPrivate"
                        type="checkbox"
                        checked={isPrivate}
                        onChange={e => setIsPrivate(e.target.checked)}
                        className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isPrivate" className="text-gray-700 font-medium select-none">
                        Private (only visible to current users )
                    </label>
                </div>

                <div className="flex justify-between mt-8 space-x-4">
                    <button
                        type="submit"
                        className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:from-purple-600 hover:to-pink-600 transition"
                    >
                        Submit
                    </button>
                    <button
                        type="reset"
                        className="w-1/2 py-3 rounded-xl bg-gray-100 text-gray-700 font-bold shadow hover:bg-gray-200 transition"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    )
}
