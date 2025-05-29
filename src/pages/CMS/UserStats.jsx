import { useEffect, useState } from 'react';
import historyService from '../../service/historyService'; // Adjust path if needed

export default function UserStats() {
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    // Get all history entries
    const allHistory = historyService.getAllHistory();

    // Aggregate stats per user
    const statsMap = {};
    allHistory.forEach(({ email, action }) => {
      if (!statsMap[email]) {
        statsMap[email] = { email, actions: 0 };
      }
      statsMap[email].actions += 1;
    });

    setUserStats(Object.values(statsMap));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">User Stats</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left font-semibold text-gray-700">Email</th>
            <th className="py-3 px-4 text-left font-semibold text-gray-700">Logged in count</th>
          </tr>
        </thead>
        <tbody>
          {userStats.length === 0 ? (
            <tr>
              <td colSpan={2} className="py-4 px-4 text-center text-gray-500">
                No user stats available.
              </td>
            </tr>
          ) : (
            userStats.map((user) => (
              <tr key={user.email} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.actions}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
