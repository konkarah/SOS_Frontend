'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navigationItems = [
  {
    href: '/',
    label: 'Home',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#326FD2"  // Blue
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-200 hover:stroke-blue-700"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  // {
  //   href: '/dataCenter',
  //   label: 'Data Center',
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="#16A34A"  // Green
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="transition-colors duration-200 hover:stroke-green-700"
  //     >
  //       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  //       <circle cx="9" cy="7" r="4" />
  //       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  //       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  //     </svg>
  //   )
  // },
  // {
  //   href: '/roles',
  //   label: 'Roles',
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="#9333EA"  // Purple
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="transition-colors duration-200 hover:stroke-purple-700"
  //     >
  //       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  //       <path d="M8 11h8" />
  //       <path d="M8 8h8" />
  //       <path d="M8 14h8" />
  //     </svg>
  //   )
  // },
  // {
  //   href: '/organizations',
  //   label: 'Organizations',
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="#EA580C"  // Orange
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="transition-colors duration-200 hover:stroke-orange-700"
  //     >
  //       <rect width="16" height="20" x="4" y="2" rx="2" />
  //       <path d="M9 22v-4h6v4" />
  //       <path d="M8 6h8" />
  //       <path d="M8 10h8" />
  //       <path d="M8 14h8" />
  //     </svg>
  //   )
  // },
  // {
  //   href: '/clients',
  //   label: 'Clients',
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="#fbd700"  // Cyan
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="transition-colors duration-200 hover:stroke-cyan-700"
  //     >
  //       <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
  //       <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  //       <path d="M12 10v4" />
  //       <path d="M9 13h6" />
  //     </svg>
  //   )
  // },
  // {
  //   href: '/groups',
  //   label: 'Groups',
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="#6366F1"  // Indigo
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="transition-colors duration-200 hover:stroke-indigo-700"
  //     >
  //       <rect x="3" y="3" width="7" height="7" rx="1" />
  //       <rect x="14" y="3" width="7" height="7" rx="1" />
  //       <rect x="3" y="14" width="7" height="7" rx="1" />
  //       <rect x="14" y="14" width="7" height="7" rx="1" />
  //     </svg>
  //   )
  // },

  // {
  //   href: '/permissions',
  //   label: 'Permissions',
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="#EA580C"  // Orange
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="transition-colors duration-200 hover:stroke-orange-700"
  //     >
  //       <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
  //       <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  //       <circle cx="12" cy="16" r="1" />
  //       <path d="M12 17v2" />
  //     </svg>
  //   )
  // },
  {
    href: '/reports',
    label: 'Reports',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0891B2"  // Red
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-200 hover:stroke-red-700"
      >
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    )
  }
];
export default function Sidebar() {
  // State Start
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // State End

  // Toggle SideBar Start
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  // Toggle SideBar End

  return (
    <>
      {/* Mobile Menu Burger Start */}
      <div
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-[#B0B0B0]"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </div>
      {/* Mobile Menu Burger End */}


      {/* Sidebar Start*/}
      <aside className={` fixed lg:relative w-64 bg-white border-r border-gray-100 h-screen flex flex-col transform transition-transform duration-300 ease-in-out  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} z-40 `}>
        {/* Logo Section Start */}
        <div className="px-6 py-4 flex items-center">
          <div className="flex items-center gap-2">
            {/* GOK Logo Start */}
            <div className="relative">
                    <Image
                      src="/gok.svg"
                      alt="GOK Logo"
                      width={40}
                      height={40}
                      priority
                      className="object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-0 -right-1 h-full flex">
                    <div className="w-[1px] h-full bg-black"></div>
                      <div className="w-[1px] h-full bg-red-600"></div>
                      <div className="w-[1px] h-full bg-green-600"></div>
                    </div>
                  </div>
            {/* GOK Logo End */}

            {/* GoK Text Start */}
            <p className="text-[12px] font-[800] text-gray-900">
             GoK SOS
            </p>
            {/* GoK Text Start */}

          </div>
        </div>
        {/* Logo Section End */}

        {/* Sidebar Navigation URL Start */}
        <nav className="mt-6 flex-grow">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center px-6 py-3 text-[#1e1e1e] hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.icon}
                  <span className="ml-2 text-[13.6px]">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Sidebar Navigation URL End */}

        {/* Logout Section Start */}
        <div className="mt-auto border-t border-gray-100">
          <Link
            href="/settings"
            className="flex items-center px-6 py-4 text-[#1e1e1e] hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span className="ml-2 text-[13.6px]">Logout</span>
          </Link>
        </div>
        {/* Logout Section End */}
      </aside>
      {/* Sidebar End*/}



      {/* Mobile Overlay Start */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Mobile Overlay End */}

    </>
  );
}