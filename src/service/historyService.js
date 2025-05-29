class HistoryService {
    constructor() {
        let data = localStorage.getItem("historyDb");
        if (data === null) {
            data = {
                history: [],
            };
            localStorage.setItem("historyDb", JSON.stringify(data));
            this.db = data;
        } else {
            this.db = JSON.parse(data);
        }
    }

    addHistory(email, action) {
        const entry = {
            email,
            action,
            timestamp: new Date().toISOString(),
        };
        this.db.history.push(entry);
        localStorage.setItem("historyDb", JSON.stringify(this.db));
    }

    getUserHistory(email) {
        return this.db.history.filter((entry) => entry.email === email);
    }

    getAllHistory() {
        return this.db.history;
    }

    clearUserHistory(email) {
        this.db.history = this.db.history.filter((entry) => entry.email !== email);
        localStorage.setItem("historyDb", JSON.stringify(this.db));
    }

    clearAllHistory() {
        this.db.history = [];
        localStorage.setItem("historyDb", JSON.stringify(this.db));
    }
}

const historyService = new HistoryService();
export default historyService;