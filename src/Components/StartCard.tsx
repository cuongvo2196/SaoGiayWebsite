import React from 'react';

// 1. Định nghĩa Interface cho Props của component này
interface StatCardProps {
    title: string;
    value: string;
    trend: string;
    trendColor: string; // Chuỗi Tailwind CSS class
}

// 2. Gán kiểu dữ liệu StatCardProps cho component Function Component (FC)
const StatCard: React.FC<StatCardProps> = ({ title, value, trend, trendColor }) => {
    return (
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            <p className="text-slate-600 dark:text-slate-300 text-base font-medium leading-normal">{title}</p>
            <p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">{value}</p>
            {/* TS đảm bảo trendColor là một string khi sử dụng */}
            <p className={`${trendColor} text-sm font-medium leading-normal`}>{trend}</p>
        </div>
    );
};

export default StatCard;