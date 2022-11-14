import './App.css';
import menuRoutes from './routes/menuRoute';
import { Menu, Layout } from "antd"
import { useNavigate } from 'react-router';
const { Sider, Content } = Layout;



const App = () => {
  const navigate = useNavigate()
  return (
    <>
      <Layout className="layout">
        <Sider>
          <Menu className='menu' onClick={({ key }) => {
            if (key === 'logout') {
              console.log('sss')
            } else { navigate(key) }
          }} theme='dark' mode="inline" defaultSelectedKeys={['1']} items={[
            {
              label: "Home", key: '/',
            }, {
              label: "Courses",
              children: [{ label: 'All Courses', key: '/courses' }, { label: 'Add Course', key: '/add-course' }],
            },
            {
              label: "Teachers",
              children: [{ label: 'All Teachers', key: '/teachers' }, { label: 'Add Teacher', key: '/add-teacher' }],
            },
            {
              label: "Users",
              children: [{ label: 'All Users', key: '/users' }, { label: 'Add User', key: '/add-user' }],
            },
            { label: "Settings", key: '/settings' },
            { label: "Logout", key: '/logout' }
          ]}></Menu>
        </Sider>
        <Content>{menuRoutes()}</Content>
      </Layout>

    </>
  );
};
export default App;