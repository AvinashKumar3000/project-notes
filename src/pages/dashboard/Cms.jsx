import { useState } from "react";
import SwitchTab from "../../components/cms/SwitchTab";
import { StorageProvider } from "../../context/StorageContext";

const tabEnum = {
    DISPLAY: 'display',
    ADD: 'add'
};

export default function Cms() {
    const [tab, setTab] = useState(tabEnum.DISPLAY);

    return (
        <div>
            <header>
                <nav className="flex items-center justify-between py-4 px-6 bg-white shadow rounded-t-md">
                    <h1 className="text-2xl font-bold text-gray-800">CMS Dashboard</h1>
                    <div className="flex space-x-2">
                        <button
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tab === tabEnum.DISPLAY
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                                }`}
                            onClick={() => setTab(tabEnum.DISPLAY)}
                        >
                            Display
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tab === tabEnum.ADD
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                                }`}
                            onClick={() => setTab(tabEnum.ADD)}
                        >
                            Add New Item
                        </button>
                    </div>
                </nav>
            </header>
            <div className="m-10">
                <StorageProvider>
                    <SwitchTab tab={tab} />
                </StorageProvider>
            </div>
        </div>
    )
}
