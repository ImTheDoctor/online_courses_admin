import home from '../pages/home.js';
import addCourse from '../pages/courses/addCourse.js';
import courses from '../pages/courses/allCourses.js';
import logout from '../pages/logout.js';
import settings from '../pages/settings.js';
import addTeacher from '../pages/teachers/addTeacher';
import allTeachers from '../pages/teachers/allTeachers';
import addUser from '../pages/users/addUser';
import allUsers from '../pages/users/allUsers';

const routes = [
    {
        path: "/",
        exact: true,
        element: home
    },
    {
        path: "/add-course",
        element: addCourse
    },
    {
        path: "/courses",
        element: courses
    },
    {
        path: "/add-user",
        element: addUser
    }, {
        path: "/users",
        element: allUsers
    },
    {
        path: "/add-teacher",
        element: addTeacher
    },
    {
        path: "/teachers",
        element: allTeachers
    },
    {
        path: "/settings",
        element: settings
    }, {
        path: "/logout",
        element: logout
    }
];

export default routes