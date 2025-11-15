import { Button, Dropdown, Space, type MenuProps } from 'antd';
import { BellOutlined, DownOutlined, MenuOutlined, MoonOutlined } from '@ant-design/icons';
import './Header.css'
import Search from 'antd/es/input/Search';
const items: MenuProps['items'] = [
  {
    label: (
      <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
const Header = () => {
    return <div className="header">
        <div className="left-header">
            <Button icon={<MenuOutlined />}/>
            <Search placeholder="input search text" style={{ width: 300 }} />
        </div>
        <div className="right-header">
            <Button type="default" shape="round" icon={<MoonOutlined />} />
            <Button type="default" shape="round" icon={<BellOutlined />} />
            <div className="user-info">
                <div className="avatar"></div>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Click me
                        <DownOutlined />
                    </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
    </div>;
};
export default Header;