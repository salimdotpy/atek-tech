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
import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Frown } from 'lucide-react';

export function LoadingComponent() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 1000); // Simulated loading time
        return () => clearTimeout(timeout);
    }, []);
    return (
        loading && (
            <div className='fixed inset-0 bg-primary/50 flex gap-2 justify-center items-center z-[1000]'>
                {[10, 12, 14].map((size, key) =>
                    <img key={key} src={'/favicon.png'} alt='company logo' className={`size-${size} animate-bounce p-1 bg-white rounded-full shadow`} />
                )}
            </div>
        )
    )
}

export function FormSkeleton({ size = 5, className = '' }) {
    return (
        <div className={`max-w-full animate-pulse p-5 space-y-5 ${className}`}>
            {Array(size).fill(null).map((_, key) =>
                <div key={key} className="h-3 rounded-full bg-gray-300">
                    &nbsp;
                </div>
            )}
        </div>
    )
}

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center h-screen p-5'>
            <Card className='bg-header px-12 py-16'>
                <CardBody className='text-center text-fore'>
                    <Frown className='inline-block size-16 my-4 text-primary' />
                    <Typography variant='h4'>404 - Page Not Found</Typography>
                    <p className='mb-3'>Sorry, the page you are looking for does not exist.</p>
                    <Button className='bg-primary' onClick={() => navigate(-1)}>
                        Navigate Back
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
};

export const SectionHeader = ({ title, subtitle, aiThemed = false }) => (
  <div className="text-center mb-12">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide ${aiThemed ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' : 'text-fore/90'}`}>
      {title}
      {aiThemed && <Sparkles className="inline-block ml-3 w-8 h-8 text-purple-500" />}
      <span className={`block h-1 w-24 mx-auto mt-4 ${aiThemed ? 'bg-purple-500' : 'bg-amber-500'}`}></span>
    </h2>
    {subtitle && <p className="text-fore/60 max-w-2xl mx-auto text-lg">{subtitle}</p>}
  </div>
);

export const ServiceCard = ({ icon: Icon, title, description, onClick }) => (
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
