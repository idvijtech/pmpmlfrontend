import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import TicketSection from '../components/Home/TicketSection';
import SocialMedia from '../components/Home/SocialMedia';
import Strip from '../components/Strip';

const AboutUs = () => {
  const { t } = useTranslation();
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Scrolling Updates Strip */}
      <Strip />

      {/* Hero Banner */}
      <div className="relative h-screen overflow-hidden -mt-32">
        {/* Background Image */}
        <img 
          src="/aboutpmpml/swargate.png"
          alt="Swargate Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Hero Banner Icons */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
          <img 
            src="/herobannericons.png"
            alt="Hero Banner Icons"
            className="w-16 h-auto hover:scale-110 transition-all duration-300 shadow-lg"
          />
        </div>
      </div>

              {/* PMPML Content Section */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-9xl mx-auto">
          <h1 className="text-3xl font-bold text-black mb-6">{t('about.drivingPuneForward')}</h1>
          
          <p className="text-lg text-black leading-relaxed mb-8">
            {t('about.pmpmlLifeline')}
          </p>
          
          <p className="text-lg text-black leading-relaxed mb-8">
            {t('about.journeyHistory')}
          </p>
          
          <h2 className="text-2xl font-bold text-black mb-4">{t('about.pmpmlVision')}</h2>
          
          {/* Swargate Image */}
          <div className="w-full mb-8 ">
            <img 
              src="/aboutpmpml/swargate.png"
              alt="Swargate"
              className="w-900 h-160 rounded-lg shadow-lg object-cover"
            />
          </div>
          
          <p className="text-lg text-black leading-relaxed mb-8">
            {t('about.pmpmlCommitment')}
          </p>
          
          {/* PMPML Vision Image */}
          <div className="flex justify-center mb-8">
            <img 
              src="/pmpmlvision.png"
              alt="PMPML Vision - Historical Double Decker Buses"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          

          
          {/* Legacy of PMPML Section */}
          <h2 className="text-3xl font-bold text-black mb-6 text-left">{t('about.legacyOfPMPML')}</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">{t('about.beginning1940s')}</h3>
              <p className="text-lg text-black leading-relaxed">
                {t('about.beginning1940sDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">{t('about.formationPMT1950')}</h3>
              <p className="text-lg text-black leading-relaxed">
                {t('about.formationPMT1950Desc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">{t('about.formationPCMT1974')}</h3>
              <p className="text-lg text-black leading-relaxed">
                {t('about.formationPCMT1974Desc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">{t('about.unificationPMPML2007')}</h3>
              <p className="text-lg text-black leading-relaxed">
                {t('about.unificationPMPML2007Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PMPML Team Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">{t('about.pmpmlLeadershipTeam')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Team Member 1 */}
            <div className="text-center">
              <img 
                src="/aboutpmpml/photo1.png"
                alt="Shri Pankaj Deore IAS"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-lg font-semibold text-black mb-1">Shri Pankaj Deore IAS</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Hon Chairman and Managing Director PMPML Pune</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img 
                src="/aboutpmpml/photo2.png"
                alt="Shri Naval Kishore Ram"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-lg font-semibold text-black mb-1">Shri Naval Kishore Ram</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Hon Municipal Commissioner PMC and Director PMPML</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img 
                src="/aboutpmpml/photo3.png"
                alt="Shri Shekhar Singh IAS"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-lg font-semibold text-black mb-1">Shri Shekhar Singh IAS</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Hon. Municipal Commissioner, PCMC & Director PMPML</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <img 
                src="/aboutpmpml/photo4.png"
                alt="Dr Devendra Singh"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-lg font-semibold text-black mb-1">Dr Devendra Singh</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Hon Director of CIRT Pune and Director PMPML</p>
            </div>

            {/* Team Member 5 */}
            <div className="text-center">
              <img 
                src="/aboutpmpml/photo5.png"
                alt="Smt Archana Gaikwad"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-lg font-semibold text-black mb-1">Smt Archana Gaikwad</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Hon Regional Transport Officer Pune and Director PMPML</p>
            </div>

            {/* Team Member 6 */}
            <div className="text-center">
              <img 
                src="/aboutpmpml/photo6.png"
                alt="Shri Yogesh Mhase IAS"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-lg font-semibold text-black mb-1">Shri Yogesh Mhase IAS</h3>
              <p className="text-sm text-gray-600 leading-relaxed">CEO Metropolitan Commissioner PMRDA and Director of PMPML</p>
            </div>
          </div>
        </div>
      </div>

      {/* Road Strip Section */}
      <div className="w-full bg-gray-600 relative h-20">
        {/* Top White Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
        
        {/* Yellow Line below White */}
        <div className="absolute top-2 left-0 right-0 h-1 bg-yellow-100"></div>
        
        {/* Three Dashed Lines in Center */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
          <div className="flex justify-center space-x-12">
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
          </div>
        </div>
        
        {/* Bottom White Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">{t('about.faq')}</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-200">
              {expandedFAQ !== 0 ? (
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 bg-white"
                  onClick={() => toggleFAQ(0)}
                >
                  <span className="text-lg font-medium text-black">{t('about.typesOfPasses')}</span>
                  <svg className="w-5 h-5 text-black transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              ) : (
                <div className="bg-[#AFFFF0]">
                  <div className="p-6 pb-2">
                    <p className="text-black mb-4">
                      {t('about.typesOfPassesDesc')}
                    </p>
                    <ul className="list-disc list-inside text-black space-y-2">
                      <li>{t('about.typesOfPassesList')}</li>
                    </ul>
                  </div>
                  <div 
                    className="flex justify-end p-2 cursor-pointer"
                    onClick={() => toggleFAQ(0)}
                  >
                    <svg className="w-5 h-5 text-black transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-gray-200">
              {expandedFAQ !== 1 ? (
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 bg-white"
                  onClick={() => toggleFAQ(1)}
                >
                  <span className="text-lg font-medium text-black">{t('about.uncleanBuses')}</span>
                  <svg className="w-5 h-5 text-black transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              ) : (
                <div className="bg-[#AFFFF0]">
                  <div className="p-6 pb-2">
                    <p className="text-black mb-4">
                      {t('about.uncleanBusesDesc')}
                    </p>
                    <ul className="list-disc list-inside text-black space-y-2">
                      <li>{t('about.uncleanBusesList')}</li>
                    </ul>
                  </div>
                  <div 
                    className="flex justify-end p-2 cursor-pointer"
                    onClick={() => toggleFAQ(1)}
                  >
                    <svg className="w-5 h-5 text-black transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-gray-200">
              {expandedFAQ !== 2 ? (
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 bg-white"
                  onClick={() => toggleFAQ(2)}
                >
                  <span className="text-lg font-medium text-black">{t('about.busDelays')}</span>
                  <svg className="w-5 h-5 text-black transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              ) : (
                <div className="bg-[#AFFFF0]">
                  <div className="p-6 pb-2">
                    <p className="text-black mb-4">
                      {t('about.busDelaysDesc')}
                    </p>
                    <ul className="list-disc list-inside text-black space-y-2">
                      <li>{t('about.busDelaysList')}</li>
                    </ul>
                  </div>
                  <div 
                    className="flex justify-end p-2 cursor-pointer"
                    onClick={() => toggleFAQ(2)}
                  >
                    <svg className="w-5 h-5 text-black transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b border-gray-200">
              {expandedFAQ !== 3 ? (
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 bg-white"
                  onClick={() => toggleFAQ(3)}
                >
                  <span className="text-lg font-medium text-black">{t('about.misbehavior')}</span>
                  <svg className="w-5 h-5 text-black transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              ) : (
                <div className="bg-[#AFFFF0]">
                  <div className="p-6 pb-2">
                    <p className="text-black mb-4">
                      {t('about.misbehaviorDesc')}
                    </p>
                    <ul className="list-disc list-inside text-black space-y-2">
                      <li>{t('about.misbehaviorList')}</li>
                    </ul>
                  </div>
                  <div 
                    className="flex justify-end p-2 cursor-pointer"
                    onClick={() => toggleFAQ(3)}
                  >
                    <svg className="w-5 h-5 text-black transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className="border-b border-gray-200">
              {expandedFAQ !== 4 ? (
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 bg-white"
                  onClick={() => toggleFAQ(4)}
                >
                  <span className="text-lg font-medium text-black">{t('about.incorrectFare')}</span>
                  <svg className="w-5 h-5 text-black transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              ) : (
                <div className="bg-[#AFFFF0]">
                  <div className="p-6 pb-2">
                    <p className="text-black mb-4">
                      {t('about.incorrectFareDesc')}
                    </p>
                    <ul className="list-disc list-inside text-black space-y-2">
                      <li>{t('about.incorrectFareList')}</li>
                    </ul>
                  </div>
                  <div 
                    className="flex justify-end p-2 cursor-pointer"
                    onClick={() => toggleFAQ(4)}
                  >
                    <svg className="w-5 h-5 text-black transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 6 */}
            <div className="border-b border-gray-200">
              {expandedFAQ !== 5 ? (
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 bg-white"
                  onClick={() => toggleFAQ(5)}
                >
                  <span className="text-lg font-medium text-black">{t('about.lackOfSupport')}</span>
                  <svg className="w-5 h-5 text-black transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              ) : (
                <div className="bg-[#AFFFF0]">
                  <div className="p-6 pb-2">
                    <p className="text-black mb-4">
                      {t('about.lackOfSupportDesc')}
                    </p>
                    <ul className="list-disc list-inside text-black space-y-2">
                      <li>{t('about.lackOfSupportList')}</li>
                    </ul>
                  </div>
                  <div 
                    className="flex justify-end p-2 cursor-pointer"
                    onClick={() => toggleFAQ(5)}
                  >
                    <svg className="w-5 h-5 text-black transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 7 */}
            <div className="border-b border-gray-200">
              {expandedFAQ !== 6 ? (
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 bg-white"
                  onClick={() => toggleFAQ(6)}
                >
                  <span className="text-lg font-medium text-black">{t('about.rashDriving')}</span>
                  <svg className="w-5 h-5 text-black transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              ) : (
                <div className="bg-[#AFFFF0]">
                  <div className="p-6 pb-2">
                    <p className="text-black mb-4">
                      {t('about.rashDrivingDesc')}
                    </p>
                    <ul className="list-disc list-inside text-black space-y-2">
                      <li>{t('about.rashDrivingList')}</li>
                    </ul>
                  </div>
                  <div 
                    className="flex justify-end p-2 cursor-pointer"
                    onClick={() => toggleFAQ(6)}
                  >
                    <svg className="w-5 h-5 text-black transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 8 */}
            <div className="border-b border-gray-200">
              {expandedFAQ !== 7 ? (
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 bg-white"
                  onClick={() => toggleFAQ(7)}
                >
                  <span className="text-lg font-medium text-black">{t('about.followUpComplaint')}</span>
                  <svg className="w-5 h-5 text-black transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              ) : (
                <div className="bg-[#AFFFF0]">
                  <div className="p-6 pb-2">
                    <p className="text-black mb-4">
                      {t('about.followUpComplaintDesc')}
                    </p>
                    <ul className="list-disc list-inside text-black space-y-2">
                      <li>{t('about.followUpComplaintList')}</li>
                    </ul>
                  </div>
                  <div 
                    className="flex justify-end p-2 cursor-pointer"
                    onClick={() => toggleFAQ(7)}
                  >
                    <svg className="w-5 h-5 text-black transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 9 */}
            <div className="border-b border-gray-200">
              {expandedFAQ !== 8 ? (
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 bg-white"
                  onClick={() => toggleFAQ(8)}
                >
                  <span className="text-lg font-medium text-black">{t('about.suggestionsComplaints')}</span>
                  <svg className="w-5 h-5 text-black transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              ) : (
                <div className="bg-[#AFFFF0]">
                  <div className="p-6 pb-2">
                    <p className="text-black mb-4">
                      {t('about.suggestionsComplaintsDesc')}
                    </p>
                    <ul className="list-disc list-inside text-black space-y-2">
                      <li>{t('about.suggestionsComplaintsList')}</li>
                    </ul>
                  </div>
                  <div 
                    className="flex justify-end p-2 cursor-pointer"
                    onClick={() => toggleFAQ(8)}
                  >
                    <svg className="w-5 h-5 text-black transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Item 10 */}
            <div className="border-b border-gray-200">
              {expandedFAQ !== 9 ? (
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 bg-white"
                  onClick={() => toggleFAQ(9)}
                >
                  <span className="text-lg font-medium text-black">{t('about.cityTours')}</span>
                  <svg className="w-5 h-5 text-black transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              ) : (
                <div className="bg-[#AFFFF0]">
                  <div className="p-6 pb-2">
                    <ul className="list-disc list-inside text-black space-y-2">
                      <li>{t('about.cityToursDesc')}</li>
                    </ul>
                  </div>
                  <div 
                    className="flex justify-end p-2 cursor-pointer"
                    onClick={() => toggleFAQ(9)}
                  >
                    <svg className="w-5 h-5 text-black transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Ticket Section */}
          <div className="pt-16">
            <TicketSection />
          </div>


        </div>
      </div>

      {/* Social Media Section - Full Width */}
      <div className="bg-transparent">
        <SocialMedia />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs; 