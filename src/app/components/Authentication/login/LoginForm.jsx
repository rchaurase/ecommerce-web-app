'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { login } from '@/app/store/slices/authSlice';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [buttonDisable, setButtonDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // State for handling error messages

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Show the spinner
    try {
      const response = await axios.post('/api/users/login', user);
      
      const { token, user: userInfo } = response.data;
      localStorage.setItem('authToken', token);
      
      // Ensure the login action expects an object with user and token
      dispatch(login({ user: userInfo, token }));

      router.push('/');
    } catch (error) {
      setError('Login failed. Please check your credentials.'); // Set error message
      console.error('Error in login', error);
    } finally {
      setLoading(false); // Hide the spinner after the request completes
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [user]);

  return (
    <div className={`relative bg-white`}>
      <div className={`w-full max-w-md bg-[#2f1e45] p-8 rounded-lg shadow-md ${loading ? 'blur-sm' : ''}`}>
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-50">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-50">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-[#048567] text-white px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${buttonDisable ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={buttonDisable}
          >
            Log In
          </button>
        </form>
        <div className="mt-5 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <Link href="/signup" className="text-[#048567] hover:underline">Sign up</Link>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <Link href="/forgot-password" className="text-[#048567] hover:underline">Forgot your password?</Link>
          </p>
        </div>
      </div>
      {loading && <LoadingSpinner />} {/* Show spinner when loading is true */}
    </div>
  );
};

export default LoginForm;
