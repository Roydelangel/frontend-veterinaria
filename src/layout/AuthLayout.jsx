import Outlet from 'react-router-dom';

const AuthLayout = () => {

  return (
    <>
        <h1 className="font-bold text-2xl">Auth Layout</h1>

        <Outlet />
    </>
  )
}

export default AuthLayout
