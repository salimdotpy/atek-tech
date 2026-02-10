import heroIntro from '@/assets/hero.mp4';
import { SectionHeader } from '@/ui/sections';
import { Button } from "@material-tailwind/react";
import {
  ArrowRight,
  Camera,
  CheckCircle,
  MapPin,
  Shield,
  Sun
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const ServiceCard = ({ icon: Icon, title, description, onClick }) => (
  <div
    onClick={onClick}
    className="bg-header text-fore p-8 rounded-xl shadow-lg border-b-4 border-amber-500 hover:shadow-2xl transition-all duration-300 group cursor-pointer" data-aos="fade-up" data-aos-delay={300}
  >
    <div className="w-16 h-16 bg-secondary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/90 transition-colors duration-300">
      <Icon className="w-8 h-8 text-secondary/90 group-hover:text-amber-400 transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold text-fore/90 mb-3">{title}</h3>
    <p className="text-fore/60 mb-4">{description}</p>
    <div className="flex items-center text-blue-700 font-semibold group-hover:text-blue-900">
      Learn More <ArrowRight className="ml-2 w-4 h-4" />
    </div>
  </div>
);

const TestimonialCard = ({ name, title, quote, imageUrl }) => {
  return (
    <div className="flex flex-col justify-between p-8 bg-header shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
      <blockquote className="relative px-0 py-7 mb-6 italic text-fore/70
        before:content-['\201C'] before:absolute before:-top-4 before:-left-2 
        before:text-6xl before:font-black before:text-primary
        after:content-['\201D'] after:absolute after:-bottom-10 after:right-4 
        after:text-6xl after:font-black after:text-primary">
        {quote}
      </blockquote>

      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full mr-4 object-cover"
          src={imageUrl}
          alt={`Profile of ${name}`}
        />
        <div>
          <p className="text-sm font-semibold text-fore">{name}</p>
          <p className="text-sm text-fore/50">{title}</p>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    name: 'Judith Black',
    title: 'Business Owner',
    quote:
      'ATEK TECHNOLOGIES provided an exceptional CCTV installation. The team was professional, efficient, and the system offers incredible peace of mind. Highly recommend their services for any security needs.',
    imageUrl: '/images/face_2.jpg',
  },
  {
    id: 2,
    name: 'David Mensah',
    title: 'IT Manager',
    quote:
      'We needed a robust car tracking system, and ATEK delivered. The technology is advanced, and their support team is responsive. Our fleet is now more secure than ever.',
    imageUrl: '/images/face_3.jpg',
  },
  {
    id: 3,
    name: 'Aisha Bello',
    title: 'Homeowner',
    quote:
      'The solar panel system installed by ATEK has significantly reduced my electricity bills. Their consultation was thorough, and the installation was flawless. Truly a reliable energy partner.',
    imageUrl: '/images/face_1.jpg',
  },
  {
    id: 4,
    name: 'Samuel Oseni',
    title: 'Operations Director',
    quote:
      'The access control system ATEK implemented for our warehouse is top-notch. It has streamlined our entry protocols and enhanced our overall site safety significantly.',
    imageUrl: '/images/face_4.jpg',
  },
  {
    id: 5,
    name: 'Sarah Jenkins',
    title: 'Store Manager',
    quote:
      'Incredible service! The smart alarm system is easy to use and very reliable. ATEK took the time to train our staff on how to use it, which we really appreciated.',
    imageUrl: '/images/face_5.jpg',
  },
  {
    id: 6,
    name: 'Kwame Boateng',
    title: 'Estate Developer',
    quote:
      'We partner with ATEK for all our new residential projects. Their intercommunication systems and gate automation are consistently high-quality and modern.',
    imageUrl: '/images/face_6.jpg',
  },
  {
    id: 7,
    name: 'Elena Rodriguez',
    title: 'Facility Coordinator',
    quote:
      'Prompt, knowledgeable, and reliable. ATEK fixed our aging security network when others couldn’t. They are now our go-to for all technical maintenance.',
    imageUrl: '/images/face_7.jpg',
  },
  {
    id: 8,
    name: 'Michael Chen',
    title: 'Private Client',
    quote:
      'The backup power solution ATEK installed is a life-changer. No more worrying about power outages during work hours. The transition to battery power is seamless.',
    imageUrl: '/images/face_8.jpg',
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "testimonial",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <video className='z-0 absolute bottom-10 md:top-10 md:right-10' src={heroIntro} loop autoPlay muted></video>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl !z-10">
            <div className="inline-block bg-amber-500 text-secondary font-bold px-4 py-1 rounded-full mb-6 text-xs uppercase tracking-wider">
              Trusted Security Experts
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Your Trusted Partner in <span className="text-primary">Security & Power</span> Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl" data-aos="zoom-in-right">
              From advanced CCTV surveillance and solar power systems to precision electronics repair. We secure your world and keep you powered up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary normal-case self-start" onClick={() => navigate('/contact')} data-aos="flip-right">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-back py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Expert Technicians", value: "50+" },
              { label: "Projects Completed", value: "1200+" },
              { label: "Support Available", value: "24/7" },
              { label: "Client Satisfaction", value: "100%" }
            ].map((stat, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={100}>
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-fore/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-header">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Core Services"
            subtitle="We provide comprehensive technology solutions tailored for homes and businesses across the region."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 *:bg-back">
            <ServiceCard
              icon={Camera}
              title="CCTV Installation"
              description="High-definition surveillance systems with remote viewing capabilities for homes and offices."
              onClick={() => navigate('/services')}
            />
            <ServiceCard
              icon={Sun}
              title="Solar Power Systems"
              description="Sustainable energy solutions including solar panels, inverters, and high-capacity batteries."
              onClick={() => navigate('/services')}
            />
            <ServiceCard
              icon={MapPin}
              title="Car Tracking"
              description="Real-time GPS vehicle tracking with engine cut-off features and fleet management."
              onClick={() => navigate('/services')}
            />
          </div>
          <div className="text-center mt-12">
            <Button className="bg-secondary normal-case" onClick={() => navigate('/services')} >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-back">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Discover how ATEKTECHNOLOGIES has empowered businesses and homes with reliable security and power solutions."
          />
          <div className='pt-5 slider-container'>
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className='p-3 sm:px-5'>
                  <TestimonialCard
                    name={testimonial.name}
                    title={testimonial.title}
                    quote={testimonial.quote}
                    imageUrl={testimonial.imageUrl}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] to-indigo-900 via-indigo-500  from-blue-700 to-100% text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right" data-aos-delay={300}>
              <h2 className="text-3xl font-bold mb-6">Why ATEK Technologies?</h2>
              <div className="space-y-6">
                {[
                  "Professional and certified installation experts",
                  "Affordable pricing with no hidden costs",
                  "High-quality equipment from trusted brands",
                  "Excellent after-sales support and maintenance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-400 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button onClick={() => navigate('/contact')} className="bg-primary normal-case">
                  Contact Us Today
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-white/5 p-8 rounded-xl border border-white/10" data-aos="fade-left" data-aos-delay={300}>
              <div className="text-center">
                <Shield className="w-20 h-20 text-amber-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Security You Can Trust</h3>
                <p className="text-gray-300">
                  In an uncertain world, ATEK provides the certainty of safety. We don't just sell products; we sell peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;