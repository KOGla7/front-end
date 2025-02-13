import React from "react";
import Link from "next/link"; // 🛠 Next.js-ийн Link ашиглах

const Body = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold">Find subjects on IHI</h3>
          <p className="text-gray-600 mt-2">
            Find summaries, practice questions, and study documents for all subjects.
          </p>
          <Link href="/subjects" className="text-blue-600 mt-2 inline-block">Find my subject →</Link>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold">Textbooks</h3>
          <p className="text-gray-600 mt-2">
            Search for study books and find the best summaries and practice exams.
          </p>
          <Link href="/textbooks" className="text-blue-600 mt-2 inline-block">Find textbooks →</Link>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold">Qualifications</h3>
          <p className="text-gray-600 mt-2">
            Find summaries for specific qualifications to make studying easier.
          </p>
          <Link href="/qualifications" className="text-blue-600 mt-2 inline-block">Notes and summaries →</Link>
        </div>
      </div>

      <div className="text-center py-10 px-6">
        <h2 className="text-3xl font-bold">Sell your summaries in an instant</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <img src="/summary1.jpg" alt="Make Money by selling summaries" className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-bold mt-4">Make money quickly</h3>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <img src="/summary2.jpg" alt="Easily upload study materials" className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-bold mt-4">Easy uploading</h3>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <img src="/summary3.jpg" alt="Win rewards for top summaries" className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-bold mt-4">Nothing to lose, only to win</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
