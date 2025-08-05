import React from 'react';
import Footer from '../components/Footer';
import Gallery from '../components/Home/gallary';
import NewsUpdates from '../components/Home/newsupdates';
import SocialMedia from '../components/Home/SocialMedia';
import TicketSection from '../components/Home/TicketSection';
import Strip from '../components/Strip';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">

      {/* Scrolling Updates Strip */}
      <Strip />

      {/* Hero Banner */}
      <div className="relative h-screen overflow-hidden -mt-30">
        {/* Background Image */}
        <img 
          src="/image.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        


        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-green-400 mb-4 drop-shadow-lg">
            {t('hero.reliablePublicTransport')}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-green-400 drop-shadow-lg">
            {t('hero.since1940')}
          </h2>
        </div>
          
        {/* Search Bar at Bottom */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-md px-4">
            <div className="relative">
              <input
                type="text"
              placeholder={t('hero.routesAndTime')}
              className="w-full px-6 py-3 bg-transparent text-white placeholder-gray-200 rounded-lg focus:outline-none backdrop-blur-xl shadow-2xl transition-all duration-300"
              />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
          </div>
        </div>

        {/* Hero Banner Icons */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
          <img 
            src="/herobannericons.png"
            alt="Hero Banner Icons"
            className="w-16 h-auto hover:scale-110 transition-all duration-300 shadow-lg"
          />
        </div>

        {/* Chatbot Logo - Bottom Right */}
        <div className="absolute bottom-6 right-6 z-20">
          <img 
            src="/chatbot.png"
            alt="Chatbot Assistant"
            className="w-16 h-16 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg"
          />
        </div>
      </div>

      {/* Ticket Booking Section with Your Image */}
      <div className="w-full relative">
        <img 
          src="/image copy 4.png"
          alt="Ticket Booking"
          className="w-full h-auto"
        />
        {/* Book Pass Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <img 
            src="/bookpass.png"
            alt="Book Your Pass"
            className="w-[500px] h-auto shadow-2xl"
          />
        </div>
      </div>

      {/* Schedule a Service Section */}
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">{t('services.scheduleAService')}</h2>
          
          <div className="grid grid-cols-2 gap-18 max-w-2xl mx-auto">
            {/* Card 1: Bus Passes */}
            <div className="bg-white border-t-2 border-b-2 border-dashed border-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 bg-teal-700 rounded-xl flex items-center justify-center shadow-lg mb-4">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{t('services.busPasses')}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                  {t('services.busPassesDesc')}
                </p>
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-sm">
                  {t('services.bookNow')}
                </button>
              </div>
            </div>

            {/* Card 2: Tender & Advertisement */}
            <div className="bg-white border-t-2 border-b-2 border-dashed border-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 bg-teal-700 rounded-xl flex items-center justify-center shadow-lg mb-4">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{t('services.tenderAndAdvertisement')}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                  {t('services.tenderDesc')}
                </p>
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-sm">
                  {t('services.bookNow')}
                </button>
              </div>
            </div>

            {/* Card 3: Situational Agreement */}
            <div className="bg-white border-t-2 border-b-2 border-dashed border-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 bg-teal-700 rounded-xl flex items-center justify-center shadow-lg mb-4">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{t('services.situationalAgreement')}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                  {t('services.situationalDesc')}
                </p>
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-sm">
                  {t('services.bookNow')}
                </button>
              </div>
            </div>

            {/* Card 4: Pune Darshan & Logistics */}
            <div className="bg-white border-t-2 border-b-2 border-dashed border-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 bg-teal-700 rounded-xl flex items-center justify-center shadow-lg mb-4">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{t('services.puneDarshanAndLogistics')}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                  {t('services.puneDarshanDesc')}
                </p>
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-sm">
                  {t('services.bookNow')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Interface Section with Your Image */}
      <div className="w-full relative">
        <img 
          src="/mobile.png"
          alt="Mobile App Interface"
          className="w-full h-160"
        />
        {/* Mobile2 Image in Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <img 
            src="/mobile2.png"
            alt="Mobile App Interface 2"
            className="w-120 h-130"
          />
        </div>
      </div>

      {/* Bus Section Structure */}
      <div className="relative w-full h-[640px] overflow-hidden">
        {/* Background Bus Interior Image */}
        <img 
          src="/image copy 3.png"
          alt="Bus Interior Background"
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        />
        
                {/* About PMPML Text Content - WITH BLACK BORDER */}
        <div className="absolute top-10 left-3/5 transform -translate-x-1/2 z-10 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">About PMPML</h2>
          <div className="border-2 border-black rounded-lg p-6">
            <p className="text-black leading-relaxed mb-6 max-w-2xl">
              PMPML is Pune's vital public transport network, seamlessly connecting the city's heritage with its modern growth. Established in the 1940s and formalized as PMT in 1950, it now plays a key role in supporting education, employment, and economic activities through efficient and sustainable mobility.
            </p>
          </div>
          <div className="text-right mt-4">
            <span className="text-black font-semibold underline cursor-pointer">Read More</span>
          </div>
        </div>
                      
        {/* Bus Image on Lower Left */}
        <div className="absolute bottom-8 left-8 z-20">
          <img 
            src="/bus.png"
            alt="PMPML Electric Bus"
            className="w-180 h-auto shadow-2xl rounded-lg"
          />
        </div>
      </div>

      {/* News & Updates Section */}
      <NewsUpdates />

      {/* Gallery Section */}
      <Gallery />

      {/* Statistics Section */}
      <div className="bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Buses */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                2000
              </div>
              <div className="text-lg font-semibold text-black uppercase tracking-wide">
                Buses
              </div>
            </div>
            
            {/* Routes */}
            <div className="text-center">
              <div className="text-4xl md:text-4xl font-bold text-black mb-2">
                392
              </div>
              <div className="text-lg font-semibold text-black uppercase tracking-wide">
                Routes
              </div>
            </div>
            
            {/* Users per Day */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                900,000
              </div>
              <div className="text-lg font-semibold text-black uppercase tracking-wide">
                Users / Day
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Section */}
      <div className="my-16">
        <TicketSection />
      </div>

      {/* Social Media Section */}
      <SocialMedia />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
