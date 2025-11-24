const products = [
    {
        id: 1,
        name: "Bút bi Thiên Long 027",
        sku: "TL-027",
        stock: 120,
        price: "3,000đ",
        status: "Đang bán",
        statusColor: "green",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCDQ2QT-ps9PncTJHHLZZUM_fYWI1I4a8aXEvqotwtAn_-Cxdlos9EN2_0RG3YTfXoc6Y2rHITkByPPuL6cIWMF4qsMPRPsnqgHfmB90I6xVYCx_XNztL048GrbrpJWMOLAVsOQMJGvzvUmd39su0_khHk1xgMrgwmrhkH1mJxBslxMSJ1CsHo463d0ARe3iT5TpEdKxVgb_l43lrNa4decvX7Uze1dMB9wxHp2g9SFfP4T3Idj8pqQn7BerDYr19Eai_CHYV2jTu4",
    },
    {
        id: 2,
        name: "Vở kẻ ngang Campus (120 trang)",
        sku: "CP-NB120",
        stock: 250,
        price: "12,000đ",
        status: "Đang bán",
        statusColor: "green",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCG-NQBO-Z8bAFgRnslnbG6XNGyeoykiklSIeIQERI31xMVPhTGDsmEj-TpoVWthDt4xQCoY2uXm6bFGKMarX8api5tE6w61_UzwZANb5TXJKpTq7OrJncFCMVLupkTnidR7jV6zSuFrc8ECDVtMw4I8XuAum-Nr6J0EOKU8lvKoe8xGin4Oc2pY5GA4RhF8bvIEzDxOF41sGlXxXqxmCwK7WA-vxD4jgIvovIi21uL82z7EZA9ZUBh0l1yWoGQgo43bHTkQi2OadE",
    },
    {
        id: 3,
        name: "Hộp bút chì màu Colokit 24 màu",
        sku: "CK-C24",
        stock: 8,
        price: "55,000đ",
        status: "Sắp hết hàng",
        statusColor: "yellow",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDkmgXiBKmKylRjE1_4MwyFhhVrcPjMHT_J2YV2xwLO__tlT4vYP7edECdAVfSrg6vVweRnmZe-WrHytZ6EN6DEgFiA_JxCzNkcDU4h_m_IFGe09FH_VsqvTdkSc79AqbLSLpC18BPTVQLztsFu2nJt2LdWpmTz5zsycapQNglAlfGDaJh1SYmTcNhYWYFlSdLD3H9_l3boBkgcxFtsR01iLrb8CSuDkbW2vWyiZt6LqF2kWWnVyC4fA51D7WPTh_N1sstWzErUb6Y",
    },
    {
        id: 4,
        name: "Kéo học sinh an toàn",
        sku: "SC-SAFE01",
        stock: 0,
        price: "8,000đ",
        status: "Hết hàng",
        statusColor: "red",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB-cisJMoKztn1tVwvittUbQ-kbDNrhaaWIlTYEybrF8Tz-XyLufDNzC8xIs-IBhZxUtfbNz28jBtjSMZ-0eY7a9siDEgRwcrSz_x3CC_XsQ3Ys9btQXWxwUHkcFjj0BR7o08NJQhHEn5pZAvibU7cA3sZWuhq9y6C6nMFDcTvTHWXAcwsMfT_PSUS1oTXrhyV1CEBO8lXzYYoC5qyMtDhgdNIP7BLllElcV_jjSxHoAS4_zifkrvnsO4jUEs-j9JCk-RgDWbDZbOc",
    },
    {
        id: 5,
        name: "Bảng viết phấn mini",
        sku: "BOARD-MINI",
        stock: 35,
        price: "25,000đ",
        status: "Ẩn",
        statusColor: "gray",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCMcb0vJjuw9xtExIU8w2WzV9Je9z_-Pe2S02shi2cLfaqjn1FiXw3PZVXLraO1-48hX2rXMi_btxCCeZp7WHHGhKYH0pqAAYfAti5YsLniU5ia1B6yhI52IBM9eR-8CwLTtpgLal1qhgOyxgsi1cpICfHm3FQ9Mgm2v6RxYnr4kOXOn6Tk7-K3diXC71aTMZ5KL7iw4g09OzoGJ-GQZ9c3ZZKwS0zHpPIznDNvLcc1W3vZfLkRsbvL9rVB9ljTnN9q4vGJ_Ktg1CU",
    },
];
const getStatusColor = (status: string) => {
    switch(status){
        case "Đang bán": return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
        case "Hết hàng": return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
        case "Sắp hết hàng": return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
        case "Ẩn": return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    }
}
const Product = () => {
    return <>
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div className="flex flex-col gap-1">
                <p className="text-gray-900 dark:text-white text-3xl font-bold">Quản Lý Sản Phẩm</p>
                <p className="text-gray-500 dark:text-gray-400">
                    Xem, tìm kiếm, và quản lý tất cả sản phẩm trong cửa hàng của bạn.
                </p>
            </div>

            <button className="flex items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-primary/90 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <span className="material-symbols-outlined">add</span>
                <span className="truncate">Thêm Sản Phẩm Mới</span>
            </button>


        </div>
        <div className="bg-white dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row gap-4">
                {/* <!-- SearchBar --> */}
                <div className="grow">
                    <label className="flex flex-col w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                            <div className="text-gray-500 dark:text-gray-400 flex bg-gray-100 dark:bg-gray-800 items-center justify-center pl-3.5 rounded-l-lg border border-gray-200 dark:border-gray-700 border-r-0">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Tìm theo tên sản phẩm, SKU..." value="" />
                        </div>
                    </label>
                </div>
                {/* <!-- Chips / Filters --> */}
                <div className="flex items-center gap-3">
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-4 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-normal">Trạng thái</p>
                        <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">expand_more</span>
                    </button>
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-4 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-normal">Danh mục</p>
                        <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">expand_more</span>
                    </button>
                    {/* <!-- Export Button --> */}
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-4 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">download</span>
                        <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-normal">Xuất file</p>
                    </button>
                </div>
            </div>
        </div>
        <div className="mt-4 overflow-x-auto bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                    <tr>
                        <th className="p-4" scope="col">
                            <div className="flex items-center">
                                <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="checkbox-all-search" type="checkbox" />
                                <label className="sr-only" htmlFor="checkbox-all-search">checkbox</label>
                            </div>
                        </th>
                        <th className="px-6 py-3" scope="col">Tên sản phẩm</th>
                        <th className="px-6 py-3" scope="col">Mã SKU</th>
                        <th className="px-6 py-3" scope="col">Tồn kho</th>
                        <th className="px-6 py-3" scope="col">Giá bán</th>
                        <th className="px-6 py-3" scope="col">Trạng thái</th>
                        <th className="px-6 py-3" scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => (
                        <tr key={index} className="bg-white dark:bg-gray-900/50 border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="checkbox-table-search-1" type="checkbox" />
                                    <label className="sr-only" htmlFor="checkbox-table-search-1">checkbox</label>
                                </div>
                            </td>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">
                                <div className="flex items-center gap-3">
                                    <img className="w-10 h-10 rounded-lg object-cover" data-alt="Bút bi Thiên Long" src={item.image} />
                                    {item.name}
                                </div>
                            </th>
                            <td className="px-6 py-4">{item.sku}</td>
                            <td className="px-6 py-4">{item.stock}</td>
                            <td className="px-6 py-4">{item.price}</td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>{item.status}</span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <button className="p-2 text-gray-500 hover:text-primary dark:hover:text-primary-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <span className="material-symbols-outlined text-base">edit</span>
                                    </button>
                                    <button className="p-2 text-gray-500 hover:text-red-500 dark:hover:text-red-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <span className="material-symbols-outlined text-base">delete</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {/* <!-- Pagination --> */}
        <nav aria-label="Table navigation" className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Hiển thị
                <span className="font-semibold text-gray-900 dark:text-white">1-5</span>
                trên
                <span className="font-semibold text-gray-900 dark:text-white">100</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
                <li>
                    <a className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">
                        <span className="sr-only">Previous</span>
                        <span className="material-symbols-outlined text-lg">chevron_left</span>
                    </a>
                </li>
                <li>
                    <a aria-current="page" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-primary bg-primary/10 border border-primary hover:bg-primary/20 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" href="#">1</a>
                </li>
                <li>
                    <a className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">2</a>
                </li>
                <li>
                    <a className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">3</a>
                </li>
                <li>
                    <a className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">...</a>
                </li>
                <li>
                    <a className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">
                        <span className="sr-only">Next</span>
                        <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </a>
                </li>
            </ul>
        </nav>
    </>
}
export default Product;