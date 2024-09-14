'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignupForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '', // Change 'fullName' to 'username'
  });
  const [buttonDisable, setButtonDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      setLoading(true);
      const response = await axios.post('/api/users/signup', user);
      console.log('User', user);
      console.log('Signup success:', response.data);
      router.push('/login');
    } catch (error) {
      console.log('Error in signup', error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 3 && user.username.length > 0) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [user]);

  return (
    <div className={`relative min-h-screen w-auto bg-white ${loading ? 'overflow-hidden' : ''}`}>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <LoadingSpinner />
        </div>
      )}
      <div className={`w-full max-w-md mx-auto bg-[#2f1e45] p-8 rounded-xl shadow-lg ${loading ? 'blur-sm' : ''}`}>
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-white mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-white mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-[#048567] text-white px-4 py-3 rounded-lg shadow-sm hover:bg-[#036d57] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ${buttonDisable ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={buttonDisable}
          >
            Sign Up
          </button>
          <div className="mt-4 text-center">
            <p className="text-sm text-white">
              Already have an account? <Link href="/login" className="text-[#048567] hover:underline">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
