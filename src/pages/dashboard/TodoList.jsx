import { useState } from 'react';

function Card({ index, value, handleEdit, handleDelete }) {
  return (
    <li className="flex items-center justify-between bg-white rounded shadow p-3 mb-2">
      <span className="text-gray-800">{value}</span>
      <div className="space-x-2">
        <button
          onClick={() => handleEdit(index)}
          className="p-2 rounded hover:bg-blue-100 transition"
          aria-label="Edit"
        >
          ✏️
        </button>
        <button
          onClick={() => handleDelete(index)}
          className="p-2 rounded hover:bg-red-100 transition"
          aria-label="Delete"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}

export default function TodoList() {
  const [arr, setArr] = useState([]);
  const [input, setInput] = useState("");

  function handleAdd(event) {
    event.preventDefault();
    setArr([...arr, input]);
    setInput('');
  }

  function handleEdit(edit_idx) {
    const newValue = prompt("Enter new value");
    if (newValue !== null && newValue.trim() !== "") {
      arr[edit_idx] = newValue;
      setArr([...arr]);
    }
  }
  function handleDelete(del_idx) {
    const newArr = arr.filter((value, index) => index !== del_idx);
    setArr(newArr);
  }
  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Todo List</h2>
      <form onSubmit={handleAdd} className="flex mb-6 space-x-2">
        <input
          placeholder="Enter new item"
          type="text"
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>
      <ol className="list-decimal pl-5">
        {arr.map((value, index) => {
          return <Card
            key={index}
            index={index}
            value={value}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />;
        })}
      </ol>
    </div>
  );
}
