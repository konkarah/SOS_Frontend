// Imports Start
import Image from 'next/image';
import { Bell } from 'lucide-react';
import { useDateTime } from '@/hooks/useDateTime';
// Imports End

const Header = () => {

  const currentDateTime = useDateTime()


  return (
    <header className="h-[7vh] bg-white border-b shadow-sm">
      <main className="h-full px-6 flex items-center justify-between">
        {/* GOK Flag Start */}
        <section className="flex items-center">
          <div className="relative w-10 h-10">
            <Image
              src="/kenyaflagicon.svg"
              alt="National Flag"
              width={40}
              height={24}
              className="object-cover"
              priority
            />
          </div>
        </section>
        {/* GOK Flag End */}
        
        <h1 className='font-bold text-[24px]'>NOC System Observability & Security(SOS) System</h1>

        {/* Date && Notification Start */}
        <section className="flex items-center space-x-8">
          {/* Date Time Display Start */}
          <div className="text-[#4b5563] font-medium text-[14px]">
            {currentDateTime}
          </div>
          {/* Date Time Display End */}

          {/* Notifications Bell Start */}
          <button className="relative text-blue-600 hover:text-blue-700 transition-colors duration-200">
            <Bell className="h-9 w-9" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          {/* Notifications Bell End */}
        </section>
        {/* Date && Notification End */}
      </main>
    </header>
  );
};

export default Header;