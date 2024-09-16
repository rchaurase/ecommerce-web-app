'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const LoginForm = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [buttonDisable, setButtonDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true); // Show the spinner
    try {
      await axios.post('/api/users/login', user);
      console.log('login success');
      router.push('/profile');
    } catch (error) {
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
    <div className={`relative bg-white `}>
      <div className={`w-full max-w-md bg-[#2f1e45] p-8 rounded-lg shadow-md ${loading ? 'blur-sm' : ''}`}>
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor='email' className="block text-sm font-medium text-gray-50">
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
            <label htmlFor='password' className="block text-sm font-medium text-gray-50">Password</label>
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
        {/* Add this link if it's not already included */}
      </div>
      {loading && <LoadingSpinner />} {/* Show spinner when loading is true */}
    </div>
  );
};

export default LoginForm;
