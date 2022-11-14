import './App.css';
import { Layout, Menu } from 'antd';
import React from 'react';
const { Content, Sider } = Layout;


const items = [
  { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
  { label: 'item 2', key: 'item-2' }, // which is required
  {
    label: 'sub menu',
    key: 'submenu',
    children: [{ label: 'item 3', key: 'submenu-item-1' }],
  },
];
const App = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider>
        <div className="logo">LOGO</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item><a href='https://www.facebook.com/'>item 1</a></Menu.Item>
          <Menu.Item>item 2</Menu.Item>
          <Menu.SubMenu title="sub menu">
            <Menu.Item>item 3</Menu.Item>
          </Menu.SubMenu>
        </Menu>;
      </Sider>
      <Layout className="site-layout">

        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;