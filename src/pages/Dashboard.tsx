import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatCard from '../components/StartCard';
import SalesChart from '../components/SalesChart';
import RecentOrdersTable from '../components/RecentOrdersTabble';
import LowStockList from '../components/LowStockList';
import TopCategoryChart from '../components/TopCategoryChart';
import DateFilter from '../components/DateFiter';

// Định nghĩa Interface cho dữ liệu StatCard (Tùy chọn nhưng nên làm)
interface StatData {
    title: string;
    value: string;
    trend: string;
    trendColor: string; // Tailwind CSS class
}

const statsData: StatData[] = [
    { title: "Doanh Thu Hôm Nay", value: "15.200.000đ", trend: "+5% so với hôm qua", trendColor: "text-[#10B981]" },
    { title: "Tổng Đơn Hàng", value: "82", trend: "+8% so với hôm qua", trendColor: "text-[#10B981]" },
    { title: "Sản Phẩm Đã Bán", value: "256", trend: "-2% so với hôm qua", trendColor: "text-red-500" },
    { title: "Khách Hàng Mới", value: "12", trend: "+10% so với hôm qua", trendColor: "text-[#10B981]" },
];

const Dashboard: React.FC = () => {
    return (
        <div className="relative flex min-h-screen w-full dark:bg-background-dark">
            <Sidebar />

            <main className="flex flex-1 flex-col">
                <Header />

                <div className="p-6 space-y-6 bg-background-light ">
                    <DateFilter />

                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {statsData.map((stat, index) => (
                            // TSX tự động kiểm tra rằng các props StatCardProps đã được truyền đầy đủ
                            <StatCard 
                                key={index}
                                title={stat.title}
                                value={stat.value}
                                trend={stat.trend}
                                trendColor={stat.trendColor}
                            />
                        ))}
                    </div>

                    {/* Charts & Tables */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <SalesChart />
                        <TopCategoryChart />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <RecentOrdersTable />
                        <LowStockList />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;