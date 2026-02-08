import { SectionHeader } from '@/ui/sections';
import { Camera, Battery } from 'lucide-react';
import { Button, Avatar} from "@material-tailwind/react";
import camera from '../assets/camera.jpeg';
import sensor from '../assets/sensor.jpeg';
import power from '../assets/power.jpeg';
import inverter from '../assets/inverter.jpeg';
import tracker from '../assets/tracker.jpeg';
import cases from '../assets/cases.jpeg';

const ProductsPage = () => {
  // Mock product data
  const products = [
    { cat: "Security", name: "Hikvision 5MP Bullet Camera", price: "Call for Price", tag: "Best Seller", img: camera},
    { cat: "Security", name: "Wireless Door/Window Sensor", price: "Affordable", tag: "New", img: sensor },
    { cat: "Power", name: "200Ah Tubular Battery", price: "High Durability", tag: "Hot", img: power },
    { cat: "Power", name: "5KVA Hybrid Inverter", price: "Premium", tag: "Warranty", img: inverter },
    { cat: "Tracking", name: "GPS Tracker 4G", price: "Subscription Free", tag: "Sale", img: tracker },
    { cat: "Mobile", name: "Screen Protectors & Cases", price: "Various", tag: "Accessories", img: cases }
  ];

  return (
    <div className="animate-fade-in pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Products" 
          subtitle="Top-quality equipment from world-renowned manufacturers."
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "CCTV Cameras", "Solar & Batteries", "Car Trackers", "Accessories"].map((filter, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full border-2 text-sm font-bold transition-colors ${idx === 0 ? 'bg-blue-900 border-blue-900 text-white' : 'border-gray-300 text-gray-600 hover:border-blue-900 hover:text-blue-900'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 group hover:border-amber-500 transition-all">
              <div className="h-48 bg-gray-100 rounded-md mb-6 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-2 right-2 bg-amber-500 text-xs font-bold px-2 py-1 rounded text-blue-900 uppercase z-20">
                  {product.tag}
                </span>
                <div className="text-gray-400 group-hover:scale-110 transition-transform duration-300">
                  {/*{idx % 2 === 0 ? <Camera size={48} /> : <Battery size={48} />}*/}
                  <Avatar src={product.img} className="!w-auto !h-40 !rounded-lg" />
                </div>
              </div>
              <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">{product.cat}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-4">{product.price}</p>
              <Button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 focus:ring-blue-900 w-full text-sm bg-transparent py-2 normal-case">
                Inquire Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;