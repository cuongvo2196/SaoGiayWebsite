import { useTheme } from "../../utils/useTheme";


const Header = () => {
    const { theme, setTheme } = useTheme();
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3 sticky top-0 z-10">
            <div className="flex items-center gap-8 flex-1">
                <label className="flex flex-col w-full h-f">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                        <div className="text-slate-500 dark:text-slate-400 flex bg-slate-100 dark:bg-slate-800 items-center justify-center pl-3 rounded-l-lg">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input 
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-slate-100 dark:bg-slate-800 h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-2 text-sm font-normal leading-normal" 
                            placeholder="Tìm kiếm đơn hàng, sản phẩm..." 
                            defaultValue=""
                        />
                    </div>
                </label>
            </div>
            <div className="flex flex-1 justify-end items-center gap-4">
                <div className="flex gap-2">
                    <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button
                        className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                        {theme === "dark" ? <span className="material-symbols-outlined">light_mode</span> : <span className="material-symbols-outlined">dark_mode</span>}
                    </button>
                </div>
                {/* Sử dụng một div để mô phỏng hình ảnh */}
                <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
                    data-alt="User avatar image" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATaH_OsuC_xS7o7cqPm6-w-rBartILeakWYaskidYM4pBLRG4eZI5KUcuFbU_Zgzp1sIxTkTRwtpyJFMnoJcE9LKkiKFj5L1fdUehparH7i03Jl-yyfBkRheouOhQZtFdFM1zX_Hi2ZYG0FKlDvQzcwlxaTVxFHTv40DfkyrVRjRkH3QMUfEKmmPxv77lviPJ88D1TM28VVJ0pBPg-YHEfY4qlLcBZhV1TQy091kyefHbGO6i_YBTs3gQ3tBgDmN_2Y9t2mX0Mrkg")'}}
                ></div>
            </div>
        </header>
    );
};

export default Header;