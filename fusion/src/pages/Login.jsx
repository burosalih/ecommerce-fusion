import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "fusion" && password === "fusionbelle") {
      // ne znam hocul ovdje hardkodirat ovako ovu sifru i user
      window.location.href = "/adminpanel";
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 ">
      <div className="flex-1 h-full max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-2xl ">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700">
                Login
              </h1>
              <label>
                <span>Username</span>
                <input
                  className="my-2 flex p-1 border border-gray-400 rounded-lg"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder=""
                />
              </label>

              <label className="my-2 flex-col">
                <span>Password</span>
                <input
                  className="my-2 flex p-1 border border-gray-400 rounded-lg"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*********"
                />
              </label>
              {error && <p className="text-red-500">{error}</p>}
              <button
                className="my-2 flex bg-primary text-white rounded-lg p-2"
                onClick={handleLogin}
              >
                Log in
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
