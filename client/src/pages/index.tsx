// src/pages/index.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store'; // Assuming you set up a RootState
import { login, logout } from '@/store/authSlice';

const Home = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl mb-4">
          {isAuthenticated ? 'Logged In' : 'Logged Out'}
        </h1>
        <button
          onClick={() =>
            isAuthenticated
              ? dispatch(logout())
              : dispatch(login({ username: 'user1' }))
          }
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default Home;
