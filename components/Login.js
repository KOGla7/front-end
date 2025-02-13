import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-xl rounded-lg">
        <div>
          <h2 className="text-2xl font-bold text-center mb-4">Login to IHI</h2>
          <p className="text-sm text-center text-gray-500 mb-4">
            Login using one of the following methods:
          </p>
          <div className="bg-blue-50 text-blue-700 p-3 rounded mb-4 flex items-center">
            <h1 className="mr-2">⚠️</h1>
            Signing in with Facebook is no longer supported.
          </div>
          <div className="flex flex-col gap-3">
            <input type="email" placeholder="Enter your email address" className="border p-2 rounded w-full" />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password" 
                className="border p-2 rounded w-full"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "⃠" : "👁"}
              </button>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
              Log in
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              No profile yet? <a href="#" className="text-blue-600">Sign up Now, it’s Free!</a>
            </p>
            <p className="text-sm mt-2">
              <a href="#" className="text-blue-600">Forgot Password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
