const SalesChart = () => {
    return (
        <div className="lg:col-span-2 flex flex-col gap-2 rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900">
            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Báo cáo Doanh thu Tuần này</p>
            <div className="flex items-baseline gap-2">
                <p className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight truncate">89.500.000đ</p>
                <p className="text-[#10B981] text-base font-medium leading-normal">+12.5%</p>
            </div>
            
            {/* SVG Chart Area */}
            <div className="flex min-h-[250px] flex-1 flex-col justify-end pt-4">
                <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 540 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 109C21.0909 109 21.0909 21 42.1818 21C63.2727 21 63.2727 41 84.3636 41C105.455 41 105.455 93 126.545 93C147.636 93 147.636 33 168.727 33C189.818 33 189.818 101 210.909 101C232 101 232 61 253.091 61C274.182 61 274.182 45 295.273 45C316.364 45 316.364 121 337.455 121C358.545 121 358.545 149 379.636 149C400.727 149 400.727 1 421.818 1C442.909 1 442.909 81 464 81C485.091 81 485.091 129 506.182 129C527.273 129 527.273 25 548 25V149H0V109Z" fill="url(#paint0_linear_db_chart)"></path>
                    <path d="M0 109C21.0909 109 21.0909 21 42.1818 21C63.2727 21 63.2727 41 84.3636 41C105.455 41 105.455 93 126.545 93C147.636 93 147.636 33 168.727 33C189.818 33 189.818 101 210.909 101C232 101 232 61 253.091 61C274.182 61 274.182 45 295.273 45C316.364 45 316.364 121 337.455 121C358.545 121 358.545 149 379.636 149C400.727 149 400.727 1 421.818 1C442.909 1 442.909 81 464 81C485.091 81 485.091 129 506.182 129C527.273 129 527.273 25 548 25" stroke="#2563EB" strokeLinecap="round" strokeWidth="3"></path>
                    <defs>
                        <linearGradient id="paint0_linear_db_chart" x1="274" x2="274" y1="1" y2="149" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2563EB" stopOpacity="0.2"></stop>
                            <stop offset="1" stopColor="#2563EB" stopOpacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                {/* Labels */}
                <div className="flex justify-around mt-2">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold leading-normal tracking-[0.015em]">T2</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold leading-normal tracking-[0.015em]">T3</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold leading-normal tracking-[0.015em]">T4</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold leading-normal tracking-[0.015em]">T5</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold leading-normal tracking-[0.015em]">T6</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold leading-normal tracking-[0.015em]">T7</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold leading-normal tracking-[0.015em]">CN</p>
                </div>
            </div>
        </div>
    );
};

export default SalesChart;