import React from 'react';
import StatCard from '../components/dashboard/StartCard';
import SalesChart from '../components/dashboard/SalesChart';
import RecentOrdersTable from '../components/dashboard/RecentOrdersTabble';
import LowStockList from '../components/dashboard/LowStockList';
import TopCategoryChart from '../components/dashboard/TopCategoryChart';
import DateFilter from '../components/dashboard/DateFiter';

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
        <>
            <DateFilter />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {statsData.map((stat, index) => (
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
        </>
    );
};

export default Dashboard;