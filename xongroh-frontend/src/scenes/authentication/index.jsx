import React from 'react'
import { Link } from 'react-router-dom' 
import xongroh from '@/assets/xongroh.svg'
import backgroundWebP from '@/assets/background.webp'

function AuthenticationPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Left Black Box */}
      <div className="lg:w-1/2 bg-gray-900 text-white p-10 hidden lg:flex flex-col justify-between">
        <div>
          <img src={xongroh} alt="Xongroh" className="w-16 mx-auto mb-4" />
          <div className="text-lg font-medium">Xongroh</div>
          <blockquote className="mt-4 space-y-2">
            <p className="text-lg">&ldquo;Jibon Kosupator Pani&rdquo;</p>
            <footer className="text-sm">Zubeen Garg</footer>
          </blockquote>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          © {new Date().getFullYear()} Xongroh. All rights reserved.
        </p>
      </div>

      {/* Right Authentication Form */}
      <div className="lg:w-1/2 flex-1 relative flex justify-center items-center">
        {/* Background Image */}
        <div
          className="bg-cover bg-center absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundWebP})`,
          }}
        />

        {/* Transparent Container */}
        <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-8 mx-4 md:mx-8 mt-8 md:mt-0 relative z-10">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold mt-2">Create an Account</h1>
            <p className="text-sm text-gray-600">
              Enter your email below to create your account
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark"
              >
                Create Account
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            By clicking "Create Account," you agree to our{' '}
            <Link to="/terms" className="text-primary">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-primary">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Already have an account?{' '}
            <Link to="/login" className="text-primary">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthenticationPage
