import React from 'react';
import Link from 'next/link';

export default function Home() {
  const miniprojects = [
    {
      title: 'HTML & CSS Miniproject',
      description:
        'A project focusing on fundamental web using HTML and CSS. Your task is to replicate this website. It doesnt have to be exactly the same, the important thing is to try CSS attributes like position, grid, flex, and media query. To understand tailwind CSS better, you can try to use tailwind after the usual CSS.',
      deadline: '16 December 2024',
      route: '/html-css-project',
    },
    {
      title: 'JavaScript Miniproject',
      description:
        'A project demonstrating JavaScript functionality. Your task is to replicate this website and the functionality inside. It doesnt have to be exactly the same, the important thing is to try javascript functionality like getElement, addEventListener, etc.',
      deadline: '20 December 2024',
      route: '/javascript-project',
    },
    {
      title: 'React or Next JS Miniproject',
      description:
        'Your task is to create a single-page app using React or Next.js (for now, just use react, which is simpler) that demonstrates the following functions: create, update, edit and delete. You can create any app you want. Below is just for your reference if you want to follow along.',
      deadline: '8 January 2025',
      route: '/react-next-project',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          IT GTD XXVII Miniproject Assignment
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {miniprojects.map((project) => (
            <div
              key={project.title}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                {project.description}
              </p>
              <div className="flex flex-row  items-center justify-between">
                <p className="text-gray-600 text-sm items-center">
                  Due: {project.deadline}
                </p>
                <Link
                  href={project.route}
                  className="bg-blue-500 text-white px-4 py-2 text-sm rounded hover:bg-blue-600 transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>
            These miniprojects are designed to help sub-committee learn and
            practice web development skills through hands-on experience.
          </p>
        </div>
      </div>
    </main>
  );
}
