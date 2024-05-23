import {Link, Outlet} from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Link to='/'>board</Link>
      <Link to='/about'>about</Link>

      {/* // 二级路由出口 */}
      <Outlet />
    </div>
  );
}

export default Layout;
