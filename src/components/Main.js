import React from 'react'
import menuRoutes from '../routes/menuRoute';
import logo from '../assets/cpanel.svg'
import { Menu, Layout } from "antd"
import { useNavigate } from 'react-router';
const { Sider, Content } = Layout;

const Main = ({ setIsAdmin }) => {
    const navigate = useNavigate()
    return (
        <Layout className="layout">
            <Sider>
                <div className='logo_wrapper'>
                    <img src={logo} className='logo' alt='admin_logo' />
                </div>
                <Menu className='menu' onClick={({ key }) => {
                    if (key === 'logout') {
                        navigate('/login')
                        setIsAdmin(false)
                    } else { navigate(key) }
                }} theme='dark' mode="inline" items={[
                    {
                        label: "Courses",
                        children: [{ label: 'All Courses', key: '/all-courses' }, { label: 'Add Course', key: '/add-course' }],
                    },
                    {
                        label: "Teachers",
                        children: [{ label: 'All Teachers', key: '/teachers' }, { label: 'Add Teacher', key: '/add-teacher' }],
                    },
                    {
                        label: "Users",
                        children: [{ label: 'All Users', key: '/users' }, { label: 'Add User', key: '/add-user' }],
                    },
                    { label: "Logout", key: 'logout' }
                ]}></Menu>
            </Sider>
            <Content>{menuRoutes()}</Content>
        </Layout>
    )
}

export default Main