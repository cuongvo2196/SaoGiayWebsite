import React from 'react';

// Định nghĩa kiểu dữ liệu cho 1 đơn hàng
interface OrderData {
    id: string;
    customer: string;
    date: string;
    total: string;
    status: string;
    statusColor: 'green' | 'yellow' | 'red'; // Chỉ cho phép 3 giá trị này
}

// Dữ liệu mẫu (vẫn là hằng số)
const orders: OrderData[] = [
    { id: "#OD12345", customer: "Nguyễn Văn An", date: "25/05/2024", total: "250.000đ", status: "Đã giao", statusColor: "green" },
    { id: "#OD12344", customer: "Trần Thị Bích", date: "25/05/2024", total: "180.000đ", status: "Đang xử lý", statusColor: "yellow" },
    { id: "#OD12343", customer: "Lê Hoàng Cường", date: "24/05/2024", total: "560.000đ", status: "Đã giao", statusColor: "green" },
    { id: "#OD12342", customer: "Phạm Thùy Dương", date: "24/05/2024", total: "95.000đ", status: "Đã hủy", statusColor: "red" },
    { id: "#OD12341", customer: "Vũ Minh Khôi", date: "23/05/2024", total: "310.000đ", status: "Đã giao", statusColor: "green" },
];

// Props cho Component con StatusBadge
interface StatusBadgeProps {
    status: string;
    color: OrderData['statusColor']; // Tái sử dụng union type đã định nghĩa ở trên
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, color }) => {
    // Mapping màu sắc dựa trên prop color (Giữ nguyên logic JSX)
    const colorClasses: Record<OrderData['statusColor'], string> = {
        green: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
        yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
        red: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
    };
    const dotClasses: Record<OrderData['statusColor'], string> = {
        green: "bg-green-500",
        yellow: "bg-yellow-500",
        red: "bg-red-500",
    };

    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${colorClasses[color]}`}>
            <span className={`size-1.5 rounded-full ${dotClasses[color]}`}></span>
            {status}
        </span>
    );
};

const RecentOrdersTable: React.FC = () => {
    return (
        <div className="lg:col-span-2 flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden">
            <h3 className="text-slate-900 dark:text-white text-base font-medium p-6">Đơn Hàng Mới Nhất</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                    <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-50 dark:bg-slate-800">
                        <tr>
                            <th className="px-6 py-3" scope="col">ID Đơn hàng</th>
                            <th className="px-6 py-3" scope="col">Khách hàng</th>
                            <th className="px-6 py-3" scope="col">Ngày đặt</th>
                            <th className="px-6 py-3" scope="col">Tổng tiền</th>
                            <th className="px-6 py-3" scope="col">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id} className={`bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 ${index < orders.length - 1 ? 'border-b dark:border-slate-700' : ''}`}>
                                <th className="px-6 py-4 font-medium text-primary whitespace-nowrap" scope="row">{order.id}</th>
                                <td className="px-6 py-4 text-slate-900 dark:text-white">{order.customer}</td>
                                <td className="px-6 py-4">{order.date}</td>
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{order.total}</td>
                                <td className="px-6 py-4">
                                    {/* Sử dụng component con với props đã định kiểu */}
                                    <StatusBadge status={order.status} color={order.statusColor} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentOrdersTable;