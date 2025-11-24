const DateFilter = () => {
    // Giả định 'Hôm nay' là nút đang active
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-3 overflow-x-auto">
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary text-white pl-4 pr-2 text-sm font-medium">Hôm nay</button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-slate-600 pl-4 pr-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700">Tuần này</button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-slate-600 pl-4 pr-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700">Tháng này</button>
            </div>
        </div>
    );
};

export default DateFilter;