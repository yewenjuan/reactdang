import Index from "@views/index/Index.jsx";
import Course from "@views/course/Course.jsx";
import Lecturer from "@views/lecturer/Lecturer.jsx";
import Login from "@views/login/Login.jsx";
import Work from "@views/work/Work.jsx";

const routeList = [
  {
    name: "首页",
    path: "/",
    exact: true,
    redirect:"/index",
    render(props) {
      return <Index {...props} />
    }
    // component: Index
  },
  {
    name: "课程安排",
    path: "/course",
    exact: true,
    render(props) {
      return <Course {...props} />
    }
  },
  {
    name: "讲师团队",
    path: "/lecturer",
    exact: true,
    render(props) {
      return <Lecturer {...props}/>
    }
  },
  {
    name: "登录",
    path: "/login",
    exact: true,
    render(props) {
      return <Login {...props}/>
    }
  },
  {
    name: "作品详情",
    path: "/work",
    exact: true,
    render(props) {
      return <Work {...props}/>
    }
  }
]

export default routeList