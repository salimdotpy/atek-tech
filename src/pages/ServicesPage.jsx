import { 
  Shield, 
  Camera, 
  MapPin, 
  Zap, 
  Battery, 
  Smartphone, 
  Tv, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Map, 
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
  Sun,
  Flame,
  Wrench,
  Sparkles,
  MessageSquare,
  Send,
  Loader,
  Lightbulb,
  AlertTriangle,
  ClipboardList
} from 'lucide-react';
import { SectionHeader } from '@/ui/sections';

const ServicesPage = () => {
  const servicesList = [
    {
      icon: Camera,
      title: "CCTV Surveillance",
      desc: "HD & IP Cameras, DVR/NVR setup, remote viewing configuration on mobile/PC, and maintenance.",
      features: ["Night Vision", "Motion Detection", "Cloud Storage"]
    },
    {
      icon: MapPin,
      title: "GPS Car Tracking",
      desc: "Advanced vehicle tracking solutions ensuring the safety of your fleet or personal car.",
      features: ["Real-time Location", "Engine Shutdown", "Geo-fencing"]
    },
    {
      icon: Sun,
      title: "Solar & Power Solutions",
      desc: "Complete off-grid and hybrid solar installations to keep your lights on when the grid goes down.",
      features: ["Solar Panels", "Inverters", "Deep Cycle Batteries"]
    },
    {
      icon: Flame,
      title: "Fire & Burglar Alarms",
      desc: "Early warning systems to protect life and property from fire hazards and intruders.",
      features: ["Smoke Detectors", "Motion Sensors", "GSM Auto-dialers"]
    },
    {
      icon: Smartphone,
      title: "Phone Sales & Repair",
      desc: "We sell the latest smartphones and provide expert repair services for screens, batteries, and boards.",
      features: ["Screen Replacement", "Software Issues", "Genuine Accessories"]
    },
    {
      icon: Tv,
      title: "Electronics Repair",
      desc: "Professional repair of Plasma TVs, home theaters, and general household electronics.",
      features: ["Component Level Repair", "Power Supply Fixes", "Audio Systems"]
    }
  ];

  return (
    <div className="animate-fade-in pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Services" 
          subtitle="Comprehensive security and technology solutions tailored to your specific needs."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-header rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-fore" data-aos="fade-up" data-aos-delay={200}>
              <div className="bg-secondary/90 p-6 flex justify-center">
                <service.icon className="w-12 h-12 text-amber-400" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-fore/90 mb-3">{service.title}</h3>
                <p className="text-fore/60 mb-6">{service.desc}</p>
                <div className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center text-sm text-fore/50">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Need a Custom Installation Plan?</h3>
          <p className="text-secondary/80 text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to visit your site for a comprehensive assessment and free quotation.
          </p>
          <a 
            href="tel:+2349134377218" 
            className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Schedule a Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;