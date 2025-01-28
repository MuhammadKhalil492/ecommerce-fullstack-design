import React from 'react';

export default function BreadcrumbsSection() {
  return (
    <div>
      <nav className="py-4 hidden md:block">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700">Home</a>
          </li>
          <li className="text-gray-400">
            <span className="mx-2">{'>'}</span>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700">Clothings</a>
          </li>
          <li className="text-gray-400">
            <span className="mx-2">{'>'}</span>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700">Men's wear</a>
          </li>
          <li className="text-gray-400">
            <span className="mx-2">{'>'}</span>
          </li>
          <li>
            <span className="text-gray-700">Summer clothing</span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
