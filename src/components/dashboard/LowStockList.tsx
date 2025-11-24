
interface Product {
    name: string;
    remaining: number;
    color: string; // Tailwind CSS class
    imageUrl: string;
    alt: string;
}

const lowStockProducts: Product[] = [
    { name: "Bút bi Thiên Long", remaining: 5, color: "text-red-500", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwiFhYsPuj4UYHkf-gGLHor7QinUb5Zabq_Af11ryj9W070EyK6R5PNN6IfAxb2yxfU7vOJBbgoRSWnjLmMKwFEbfyyf9iyDDTKW_M2G_AE8oKulQFBPEP5Yusibc7rmZs9XcO8MFTBHgMUqUrVJNdxEKZre-BJGYi_wcFC9kYb1kJVCBacUFXLjD5rR4GY6dyrNTFKzDQ73vZMuCuUaE4pYqtXK_aJZxPevHBxSrIHyZ1a2V3pDBuEf2ETHqdKf4bdlWogUewbcw", alt: "Image of a blue pen" },
    { name: "Giấy A4 Double A", remaining: 8, color: "text-red-500", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg1H4xdpgR1ZDLiQVz736xFPx-X3-lUN7rSMm7QI9Is6EAjrCGXzQFnxFJNtWsHlwn-vlgiaHhIm16LM7rDJmAoE1fpdUzTncaRYtGc9qbkVcXmq31VY-AFpdNqmDLglrR-lkpsd0pfS7OtAX_NUdP1PFCmVevVckvyZuJL8-gjy5hzDZdzGPClwAeDRUaJPMEddAjQ8Ck2ayBCtGwqt97cRUzj2ZNuU0cuDw8-alCBmiuX_GeWAYm7Um8hDDYzLrtaPEqphqvxOs", alt: "Image of an A4 paper ream" },
    { name: "Sổ Klong MS 566", remaining: 12, color: "text-yellow-500", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_S8qceoA5F0pPGc7uc0bJDqCVx84D97zS8DmuVNiIa52XHr7iIfH1obSIG0Z9HvVMvKbLPHbgHhNZ1jL9RRgw9q1BnevRGp6-ppVF1PP_PCdmlJtcAm-0epp4RISSQyMabGP0VFyosBNtmmF1ko3TEvwVQvxLt1BszkQOi2uiVUnwMvfBJTjzDlQ3YqD7NbU9kQuDHXiP3we_3FzzO6RGsgoYnozFKQnyrRaSvgxQtpdSF8ylNjxuL1UoEmZ3lMHPmTtZWcnIH6w", alt: "Image of a notebook" },
    { name: "Kẹp bướm SDI", remaining: 15, color: "text-yellow-500", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvh9OooIh8eMy7L9nKTjOUKU2zpa1dwdbunzyeJGHMUQoOgs8BTF_GyfCF3FTE9yJysmLHRfHoZE8EAX93C7zGnpda9kefqWrV8C-Dl5TCO9WmGYzPTpYeULyCKmkX-niQy2xnOCMXzYqXwd7tYHifsN7ncWKdiYL-boEznxRZzagXLBpb1R2kzVfYw6D5tOg2X3YF-XuUElmaVCPdT22OXZ8GOz42siuEQpi9av2J6ZfRZOFCRPyX8O5HJw_6kp7GLhitOUZTIhM", alt: "Image of a set of paper clips" },
];

const LowStockItem = (product: Product) => {
    return (
        <div className="flex items-center gap-4">
            {/* Sử dụng div để mô phỏng hình ảnh nền */}
            <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-12" 
                data-alt={product.alt} 
                style={{backgroundImage: `url("${product.imageUrl}")`}}
            ></div>
            <div className="flex-1">
                <p className="text-sm font-medium text-slate-900 dark:text-white">{product.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Còn lại: <span className={`font-bold ${product.color}`}>{product.remaining}</span>
                </p>
            </div>
        </div>
    );
}

const LowStockList = () => {
    return (
        <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            <h3 className="text-slate-900 dark:text-white text-base font-medium p-6 pb-2">Sản phẩm sắp hết hàng</h3>
            <div className="p-6 pt-2 flex flex-col gap-4">
                {lowStockProducts.map((product, index) => (
                    <LowStockItem key={index} {...product} />
                ))}
            </div>
        </div>
    );
};

export default LowStockList;