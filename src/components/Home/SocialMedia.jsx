import React from 'react';
import { useTranslation } from 'react-i18next';

const SocialMedia = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="w-full">

        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
                          {/* Social 1 */}
                <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="/social1.png"
                alt="PMPML Social Media Update"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/linkdin.png"
                  alt="LinkedIn Icon"
                  className="w-16 h-16 opacity-90 hover:opacity-100 hover:scale-110 hover:drop-shadow-lg hover:[filter:brightness(0)_saturate(100%)_invert(48%)_sepia(79%)_saturate(2476%)_hue-rotate(190deg)_brightness(118%)_contrast(119%)] transition-all duration-300"
                />
              </div>
            </div>
          </div>
          
                          {/* Social 2 */}
                <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="/social2.png"
                alt="PMPML Social Media Campaign"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/instagram.png"
                  alt="Instagram Icon"
                  className="w-16 h-16 opacity-90 hover:opacity-100 hover:scale-110 hover:drop-shadow-lg hover:[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(51%)_saturate(2878%)_hue-rotate(346deg)_brightness(104%)_contrast(97%)] transition-all duration-300"
                />
              </div>
            </div>
          </div>

                          {/* Social 3 - GIF */}
                <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="/videoplayback (19).gif"
                alt="PMPML Animation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/youtube.png"
                  alt="YouTube Icon"
                  className="w-16 h-16 opacity-90 hover:opacity-100 hover:scale-110 hover:drop-shadow-lg hover:[filter:brightness(0)_saturate(100%)_invert(8%)_sepia(100%)_saturate(7482%)_hue-rotate(0deg)_brightness(95%)_contrast(118%)] transition-all duration-300"
                />
              </div>
            </div>
          </div>

                          {/* Social 4 - Placeholder */}
                <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="/social4.png"
                alt="PMPML Animation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/tutorlogo.png"
                  alt="Twitter Icon"
                  className="w-16 h-16 opacity-90 hover:opacity-100 hover:scale-110 hover:drop-shadow-lg hover:[filter:brightness(0)_saturate(100%)_invert(48%)_sepia(79%)_saturate(2476%)_hue-rotate(190deg)_brightness(118%)_contrast(119%)] transition-all duration-300"
                />
              </div>
            </div>
          </div>

                          {/* Social 5 - Image */}
                <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="/social5.png"
                alt="PMPML Bus Inauguration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/facebook.png"
                  alt="Facebook Icon"
                  className="w-16 h-16 opacity-90 hover:opacity-100 hover:scale-110 hover:drop-shadow-lg hover:[filter:brightness(0)_saturate(100%)_invert(40%)_sepia(100%)_saturate(1000%)_hue-rotate(200deg)_brightness(100%)_contrast(100%)] transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia; 