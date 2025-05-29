class StorageService {
    constructor(key = "storageDb") {
        this.key = key;
        let data = localStorage.getItem(this.key);
        if (data === null) {
            data = {};
            localStorage.setItem(this.key, JSON.stringify(data));
            this.db = data;
        } else {
            this.db = JSON.parse(data);
        }
    }

    // Get the entire storage object
    getAll() {
        return { ...this.db };
    }

    // Get a value by key
    getItem(itemKey) {
        return this.db[itemKey];
    }

    // Set a value by key
    setItem(itemKey, value) {
        this.db[itemKey] = value;
        this._save();
    }

    // Remove a value by key
    removeItem(itemKey) {
        delete this.db[itemKey];
        this._save();
    }

    // Clear all storage
    clear() {
        this.db = {};
        this._save();
    }

    // Check if a key exists
    hasItem(itemKey) {
        return Object.prototype.hasOwnProperty.call(this.db, itemKey);
    }

    // Internal method to persist to localStorage
    _save() {
        localStorage.setItem(this.key, JSON.stringify(this.db));
    }
}

const storageService = new StorageService();
export default storageService;