'use client';
import React from 'react';
import Link from 'next/link';
import './styles.css';
import Image from 'next/image';
import { useState, FormEvent } from 'react';

export default function HTMLCSSProject() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    console.log('Form submitted:', formData);
  };
  return (
    <>
      <div className="bg-gray-100 font-sans">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={100}
              height={100}
              className="w-36 h-36 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h1 className="text-4xl font-bold text-gray-800">
              IT GTD Committee Portfolio
            </h1>
            <p className="text-2xl text-gray-600 mt-2">
              Showcasing Our Skills and Projects
            </p>
          </div>

          <main>
            <section className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                About Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are the dedicated IT committee of our organization, committed
                to continuous learning and technological innovation. This
                portfolio represents our journey of skill development and
                collaborative growth.
              </p>
            </section>

            <section className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Our Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg text-center skill-card">
                  <h3 className="font-semibold text-gray-800">HTML</h3>
                  <p className="text-sm text-gray-600">Markup Language</p>
                  <div className="mt-2">
                    <div className="bg-blue-200 h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      75% Proficiency
                    </p>
                  </div>
                </div>
                <div className="bg-green-100 p-4 rounded-lg text-center skill-card">
                  <h3 className="font-semibold text-gray-800">CSS</h3>
                  <p className="text-sm text-gray-600">Styling Techniques</p>
                  <div className="mt-2">
                    <div className="bg-green-200 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
                    </div>
                    <p className="text-xs mt-1 text-gray-500">
                      65% Proficiency
                    </p>
                  </div>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg text-center skill-card">
                  <h3 className="font-semibold text-gray-800">
                    Responsive Design
                  </h3>
                  <p className="text-sm text-gray-600">Mobile-First Approach</p>
                  <div className="mt-2">
                    <div className="bg-purple-200 h-2 rounded-full">
                      <div className="bg-purple-500 h-2 rounded-full w-1/2"></div>
                    </div>
                    <p className="text-xs mt-1 text-gray-500">
                      50% Proficiency
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Project Showcase
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Web Development Workshop
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A workshop where we learned HTML5 semantic structure, CSS
                    flexbox, and responsive design principles.
                  </p>
                  <div className="flex items-center">
                    <span className="mr-2">🖥️</span>
                    <span className="text-sm text-gray-500">
                      Completed: December 2024
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Network Security Seminar
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A seminar exploring cybersecurity practices and the latest
                    trends in IT infrastructure protection.
                  </p>
                  <div className="flex items-center">
                    <span className="mr-2">🛡️</span>
                    <span className="text-sm text-gray-500">
                      Completed: December 2024
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white shadow-md rounded-lg p-6 pl-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Timeline of Learning
              </h2>
              <div className="relative border-l-4 border-gray-300 pl-4">
                <div className="mb-6 ml-4">
                  <span className="absolute -left-3 mt-1.5 h-3 w-3 rounded-full bg-blue-500"></span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    HTML Basics
                  </h3>
                  <p className="text-gray-600">
                    November 2024: Learned fundamental HTML structure and tags
                  </p>
                </div>
                <div className="mb-6 ml-4">
                  <span className="absolute -left-3 mt-1.5 h-3 w-3 rounded-full bg-green-500"></span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    CSS Styling
                  </h3>
                  <p className="text-gray-600">
                    December 2024: Mastered CSS selectors and layout techniques
                  </p>
                </div>
                <div className="ml-4">
                  <span className="absolute -left-3 mt-1.5 h-3 w-3 rounded-full bg-purple-500"></span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Responsive Design
                  </h3>
                  <p className="text-gray-600">
                    December 2024: Explored mobile-first design and media
                    queries
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white shadow-md rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Contact
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-md block mb-2 text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="text-md w-full text-gray-600 p-2 border rounded-md"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-md block mb-2 text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="text-md w-full p-2 border text-gray-600 rounded-md"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-md block mb-2 text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="text-md w-full p-2 border text-gray-600 rounded-md"
                    rows={3}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-md text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Send Message
                </button>
              </form>
            </section>
            <section className="mt-8 mb-8">
              <Link
                href="/"
                className="bg-blue-500 text-white text-md px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Back to Home
              </Link>
            </section>
          </main>

          <footer className="text-center mt-8 text-gray-500 text-[0.8rem]">
            <p>&copy; 2024 IT GTD Committee Portfolio. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
