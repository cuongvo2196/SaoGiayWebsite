import SaoGiay from '../assets/sao-giay-logo.svg';

const Sidebar = () => {
    // Dữ liệu cho các mục điều hướng
    const navItems = [
        { icon: "dashboard", label: "Tổng Quan", isActive: true },
        { icon: "inventory_2", label: "Sản phẩm", isActive: false },
        { icon: "shopping_cart", label: "Đơn hàng", isActive: false },
        { icon: "group", label: "Khách hàng", isActive: false },
        { icon: "bar_chart", label: "Báo cáo", isActive: false },
        { icon: "settings", label: "Cài đặt", isActive: false },
    ];

    return (
        <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 sticky top-0">
            <div className="flex flex-col gap-4 p-4">
                <div className="flex items-center gap-3 px-3 py-2">
                    <img src={SaoGiay} alt="Sao giấy Logo" className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" />
                    <div className="flex flex-col">
                        <h1 className="text-slate-900 dark:text-white text-base font-bold leading-normal">Sao Giấy</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Quản lý cửa hàng</p>
                    </div>
                </div>
                
                <nav className="flex flex-col gap-2 mt-4">
                    {navItems.map((item) => (
                        <a 
                            key={item.label}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                                item.isActive 
                                    ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`} 
                            href="#"
                        >
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <p className="text-sm font-medium leading-normal">{item.label}</p>
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;