import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";

const DefaultLayout = () => {
    return <div className="relative flex min-h-screen w-full bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            <Sidebar />
            <main className="flex flex-1 flex-col">
                <Header />
                 <div className="p-6 space-y-6">
                    <Outlet />
                </div>
            </main>
        </div>
}

export default DefaultLayout;   