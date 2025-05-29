import { createContext, useEffect, useState } from "react";
import mockToys from "../mocks/toysMock";
import storageService from "../service/storageService"; // adjust path as needed

const STORAGE_KEY = "toys";
const StorageContext = createContext();

function StorageProvider({ children }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Initialize storage if empty
        if (!storageService.hasItem(STORAGE_KEY)) {
            storageService.setItem(STORAGE_KEY, mockToys);
        }
        setItems(storageService.getItem(STORAGE_KEY) || []);
    }, []);

    function syncItems(newItems) {
        storageService.setItem(STORAGE_KEY, newItems);
        setItems(newItems);
    }

    function addNewItem(newItem) {
        const newItems = [...items, newItem];
        syncItems(newItems);
        console.log(newItem);
    }

    function getAllItem() {
        return items;
    }

    function getItemByCondition(condition) {
        return items.filter(condition);
    }

    function updateItem(itemIndex, newData) {
        const newItems = [...items];
        newItems[itemIndex] = { ...newItems[itemIndex], ...newData };
        syncItems(newItems);
    }

    function deleteItem(deleteIndex) {
        const newItems = [...items];
        newItems.splice(deleteIndex, 1);
        syncItems(newItems);
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