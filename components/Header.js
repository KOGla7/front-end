import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router"; // 🛠 useRouter-ийг импортлох
import React from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const router = useRouter(); // 🛠 Router ашиглах

  return (
    <div className="h-2/3 w-full bg-gray-100 bg-cover bg-center">
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">IHI</h1>
        <div>
      
          <button className="mr-4 text-gray-600" onClick={() => router.push("/Login")}>
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Sell
          </button>
        </div>
      </div>

      <section className="flex flex-col items-center text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">The best study resources</h2>
        <p className="text-gray-600 max-w-2xl">
          Save time by focusing on what matters. Study class notes and textbook summaries written by fellow students to quickly understand the essentials.
        </p>
        <div className="mt-6 flex items-center bg-white shadow-md p-2 rounded-lg w-full max-w-lg">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 p-2 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
