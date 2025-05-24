import { Link, Outlet, useLocation } from "react-router";

const PATHS = [
    { path: '/dashboard/intro', text: 'intro' },
    { path: '/dashboard/counter', text: 'counter' },
    { path: '/dashboard/calc', text: 'calculator' },
    { path: '/dashboard/todo-list', text: 'todo list' },
    { path: '/dashboard/profile', text: 'profile' },
    { path: '/dashboard/settings', text: 'settings' },
];

export default function DashboardLayouts() {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className="text-white flex min-h-screen">
            <aside className="p-10 w-[200px] sticky top-0 h-screen bg-black flex flex-col items-center justify-start shadow-lg">
                <span className="text-2xl font-bold mb-4">Dashboard</span>
                <nav className="space-y-4">

                    {
                        PATHS.map((value, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={value.path}
                                    style={location.pathname === value.path ? STYLE.active : STYLE.inactive}
                                    className="block px-4  rounded hover:underline hover:text-white transition"
                                >
                                    {value.text}
                                </Link>
                            )
                        })
                    }


                </nav>
            </aside>
            <main className="min-h-screen overflow-auto text-black">
                <Outlet />
            </main>
        </div>
    );
}


const STYLE = {
    active: {
        color: "white"
    },
    inactive: {
        color: "gray"
    }
};