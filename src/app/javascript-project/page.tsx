import React from 'react';
import Link from 'next/link';

export default function JavaScriptProject() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          JavaScript Miniproject
        </h1>
        <p className="mb-4 text-gray-800">
          This page will contain the JavaScript miniproject example.
        </p>
        <Link
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
