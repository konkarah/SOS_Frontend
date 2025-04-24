// Imports Start
import Image from 'next/image';
import { Bell } from 'lucide-react';
import { useDateTime } from '@/hooks/useDateTime';
// Imports End

const Header = () => {

  const currentDateTime = useDateTime()


  return (
<header className="h-[7vh] bg-white border-b shadow-sm">
  <main className="h-full px-4 md:px-6 flex items-center justify-between">
    {/* Left Section: Logo / Flag */}
    <div className="flex items-center space-x-2">
      <Image
        src="/kenyaflagicon.svg"
        alt="National Flag"
        width={32}
        height={20}
        className="object-cover"
        priority
      />
    </div>

    {/* Center Section: Title */}
    <div className="flex-1 flex justify-center">
      <h1 className="text-center font-medium text-[14px] md:text-[16px] text-gray-800 whitespace-nowrap">
        NOC System Observability & Security (SOS)
      </h1>
    </div>

    {/* Right Section: Time and Notifications */}
    <div className="flex items-center space-x-4 md:space-x-6">
      <div className="text-gray-500 text-xs md:text-sm font-medium">
        {currentDateTime}
      </div>
      <button className="relative text-blue-600 hover:text-blue-700 transition-colors duration-200">
        <Bell className="h-6 w-6 md:h-7 md:w-7" />
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
          3
        </span>
      </button>
    </div>
  </main>
</header>

  
  
  );
};

export default Header;