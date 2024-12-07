'use client';
import React, { useState } from 'react';
import Link from 'next/link';
export default function CounterComponent() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
    setError('');
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setError('');
    } else {
      setError('Counter cannot be less than zero!');
    }
  };

  const handleReset = () => {
    setCount(0);
    setError('');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 font-sans">
      <section className="bg-white rounded-lg shadow-md p-8 text-center max-w-96">
        <h1 className="text-2xl text-gray-800 font-bold mb-6">
          Simple Counter App
        </h1>

        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-lg text-gray-600">Current Count: {count}</p>
        </div>

        <div className="flex justify-between space-x-2 mb-4">
          <button
            onClick={handleIncrease}
            className="flex-1 text-sm bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Increase
          </button>

          <button
            onClick={handleDecrease}
            className="flex-1 text-sm bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Decrease
          </button>

          <button
            onClick={handleReset}
            className="flex-1 text-sm bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Reset
          </button>
        </div>

        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </section>
      <section className="mt-8 mb-8">
        <Link
          href="/"
          className="bg-blue-500 text-white text-[0.8rem] px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Back to Home
        </Link>
      </section>
    </div>
  );
}
