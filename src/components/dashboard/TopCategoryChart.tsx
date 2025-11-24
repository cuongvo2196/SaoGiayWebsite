const TopCategoryChart = () => {
    // Dữ liệu cho biểu đồ tròn và danh sách
    const categories = [
        { name: "Bút các loại", percent: "40%", color: "bg-primary", stroke: "stroke-primary", dashArray: "40, 100", dashOffset: "25" },
        { name: "Sổ tay & Giấy", percent: "25%", color: "bg-[#F59E0B]", stroke: "stroke-[#F59E0B]", dashArray: "25, 100", dashOffset: "-15" },
        { name: "Dụng cụ học tập", percent: "20%", color: "bg-[#10B981]", stroke: "stroke-[#10B981]", dashArray: "20, 100", dashOffset: "-40" },
    ];

    return (
        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900">
            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Top Danh mục Bán chạy</p>
            
            {/* Pie Chart Area (SVG) */}
            <div className="flex items-center justify-center min-h-[200px] relative">
                <svg className="size-full" viewBox="0 0 36 36">
                    <circle className="stroke-slate-200 dark:stroke-slate-700" cx="18" cy="18" fill="transparent" r="15.91549430918954" strokeWidth="3"></circle>
                    {categories.map((cat, index) => (
                        <circle 
                            key={index}
                            className={cat.stroke} 
                            cx="18" 
                            cy="18" 
                            fill="transparent" 
                            r="15.91549430918954" 
                            strokeDasharray={cat.dashArray}
                            strokeDashoffset={cat.dashOffset} 
                            strokeWidth="3"
                        ></circle>
                    ))}
                </svg>
                <div className="absolute flex flex-col items-center">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Tổng cộng</span>
                    <span className="text-slate-900 dark:text-white text-2xl font-bold">1,250</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">sản phẩm</span>
                </div>
            </div>
            
            {/* Category List */}
            <div className="flex flex-col gap-2 text-sm">
                {categories.map((cat, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className={`size-2 rounded-full ${cat.color}`}></span>
                            <span className="text-slate-600 dark:text-slate-300">{cat.name}</span>
                        </div>
                        <span className="font-medium text-slate-800 dark:text-slate-200">{cat.percent}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCategoryChart;