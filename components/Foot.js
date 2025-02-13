import React from "react";

const Foot = () =>{
  return (
    <div className="text-center py-10 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6">Sell your summaries in an instant</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white shadow-md p-6 rounded-lg">
          <img
            src="/summary1.jpg"
            alt="Nothing to lose, only to win"
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="text-lg font-bold mt-4">Nothing to lose, only to win</h3>
          <p className="text-gray-600 mt-2">
            Tens of thousands of people are searching for notes on Stuvia every day.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <img
            src="/summary2.jpg"
            alt="Make money quickly"
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="text-lg font-bold mt-4">Make money quickly</h3>
          <p className="text-gray-600 mt-2">
            Each time your documents sell, you earn money instantly.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <img
            src="/summary3.jpg"
            alt="Easy uploading"
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="text-lg font-bold mt-4">Easy uploading</h3>
          <p className="text-gray-600 mt-2">
            In less than a minute, you can upload and start selling.
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">
          Start selling
        </button>
        <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg">
          Tell me more
        </button>
      </div>
    </div>
  );
}
export default Foot;
