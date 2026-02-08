import { SectionHeader } from '@/ui/sections';
import logo from '../assets/atek_logo.png';

const AboutPage = () => {
  return (
    <div className="animate-fade-in pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="About ATEK Technologies" />
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2 px-4">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500 rounded-tl-3xl z-0"></div>
              <div className="relative hiden z-10 bg-header rounded-xl p-8 h-80 flex items-center justify-center border-2 border-red-500">
                <div className="text-center">
                  <img src={logo} className="w-80"/>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-900 rounded-br-3xl z-0"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Securing Africa's Future with Technology</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ATEK Technologies was founded with a single mission: to provide accessible, high-quality security and power solutions to businesses and households. We understand the unique challenges of our environment, which is why we specialize in robust systems that stand the test of time.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From securing your perimeter with advanced CCTV to ensuring your business never stops with our solar inverters, we are dedicated to excellence. Our team consists of highly trained engineers and technicians who are passionate about what they do.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-900">
                <h4 className="font-bold text-blue-900">Our Vision</h4>
                <p className="text-sm text-gray-600">To be the #1 security tech provider in the region.</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-bold text-blue-900">Our Mission</h4>
                <p className="text-sm text-gray-600">Delivering reliability through technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
