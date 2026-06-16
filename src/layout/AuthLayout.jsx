import { Outlet } from 'react-router-dom';

const AuthLayout = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/50">
      <main className='container mx-auto md:grid md:grid-cols-2 min-h-screen gap-10 p-5 items-center'>
        <Outlet />
      </main>
    </div>
  )
}
    
export default AuthLayout;
        

