// https://github.com/vipinkrishna

import * as React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>React Router v6 (Nested Routing)</h1>

      <nav>
        <Link to="/home">Home</Link>
        {' | '}
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        <Route path="/">
          {/* <Route index element={<Home />} /> */}
          <Route path="home" element={<Home />} />
          <Route path="user" element={<User />}>
            {/* <Route index element={<Profile />} /> */}
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />}>
              {/* <Route index element={<Reset />} /> */}
              <Route path="reset" element={<Reset />} />
              <Route path="close" element={<Close />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

const User = () => {
  return (
    <>
      <h2>User</h2>

      <nav>
        <Link to="profile">Profile</Link>
        {' | '}
        <Link to="account">Account</Link>
      </nav>

      <Outlet />
    </>
  );
};

const Profile = () => {
  return (
    <>
      <h3>Profile</h3>
    </>
  );
};

const Account = () => {
  return (
    <>
      <h3>Account</h3>
      <nav>
        <Link to="reset">Reset Password</Link>
        {' | '}
        <Link to="close">Close Account</Link>
      </nav>

      <Outlet />
    </>
  );
};
const Reset = () => {
  return (
    <>
      <h3>Reset</h3>
    </>
  );
};
const Close = () => {
  return (
    <>
      <h3>Close</h3>
    </>
  );
};

const NoMatch = () => {
  return (
    <>
      <h1>NoMatch</h1>
    </>
  );
};

export default App;
