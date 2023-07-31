import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul className={css.list}>
              <li className={css.item}>
                <NavLink className={css.link} to="/">
                  Home
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink className={css.link} to="/movies">
                  Muvies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
