import './Layout.css';
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
const Layout = () => {
    return <div className="container">
       <Sidebar />
        <div className="content">
            <Header />
            <div className="main"></div>
            <div className="footer"></div>
        </div>
    </div>;
}

export default Layout;