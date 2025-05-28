import { createContext, useEffect, useState } from "react";
import mockToys from "../mocks/toysMock";

const StorageContext = createContext();

function StorageProvider({ children }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(mockToys);
    }, []);

    function addNewItem(newItem) {
        setItems([...items, newItem]);
        console.log(newItem);
    }
    function getAllItem() {
        return items;
    }
    function getItemByCondition(condition) {
        // TODO:
        const resultItems = items.filter(condition);
        return resultItems;
    }
    function updateItem(itemIndex, newData) {
        // TODO:
        items[itemIndex] = { ...items[itemIndex], ...newData };
        setItems([...items]);
    }
    function deleteItem(deleteIndex) {
        items.splice(deleteIndex, 1);
        setItems([...items]);
    }

    return (
        <StorageContext.Provider value={{
            addNewItem,
            getAllItem,
            getItemByCondition,
            updateItem,
            deleteItem,
            items
        }}>
            {children}
        </StorageContext.Provider>
    );
}

export default StorageContext;
export { StorageProvider };