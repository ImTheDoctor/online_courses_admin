import AddCourse from '../pages/courses/AddCourse.js';
import AllCourses from '../pages/courses/AllCourses.js';
import Logout from '../pages/auth/Logout.js';
import AddTeacher from '../pages/teachers/AddTeacher';
import AllTeachers from '../pages/teachers/AllTeachers';
import AddUser from '../pages/users/AddUser';
import AllUsers from '../pages/users/AllUsers';
import Login from '../pages/auth/Login.js';
import PageNotFound from '../pages/PageNotFound.js';

const routes = [
    {
        path : "/",
        element: Login
    },
    {
        path: "/course",
        element: AllCourses
    },
    {
        path: "/add-course",
        element: AddCourse
    },
    {
        path: "/add-user",
        element: AddUser
    }, {
        path: "/users",
        element: AllUsers
    },
    {
        path: "/add-teacher",
        element: AddTeacher
    },
    {
        path: "/teachers",
        element: AllTeachers
    },
    {
        path: "/logout",
        element: Logout
    },
    {
        path: "*",
        element: PageNotFound
    }
];

export default routes