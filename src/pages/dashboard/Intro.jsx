import React from "react";


export default function Intro() {
    return (
        <div className="min-h-[200vh] bg-white shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to the Dashboard App</h1>
            <p className="text-gray-600 mb-4">
                This app helps you organize your project notes, track your progress, and visualize important information all in one place.
            </p>
            <ul className="list-disc text-gray-700">
                <li>Add, edit, and manage your notes easily</li>
                <li>Track your project progress</li>
                <li>Get insights and visual summaries</li>
            </ul>
        </div>
    )
}