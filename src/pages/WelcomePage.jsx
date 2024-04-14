import { Container, Card, CardContent, Typography } from '@mui/material';
import carRepairimg from  '../assets/car-repair.gif';
import TypewriterEffect from '../components/ui/TypewriterEffect';
const words = [
    {
      text: "Experience",
    },
    {
      text: "the",
    },
    {
      text: "new",
    },
    {
      text: "era",
    },
    {
      text: "of",
    },
    {
      text: "Car Maintainance.",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];


  const cardStyle = {
    width: '100%',
    backdropFilter: 'blur(12px)', // Add blur effect
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Add transparency
    borderRadius: '20px',
  };


const WelcomePage = () => {
    return (        
        <Card variant="outline" style={cardStyle}>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', minHeight: '70vh', textWrap: 'nowrap' }}>
            <img src={carRepairimg} alt="Car Repair" style={{ width: '100vh', filter: 'invert(90%)',clipPath: 'inset(20% 0 10% 0)' }} />
            <h2 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Motomedic
            </h2>
            <TypewriterEffect words={words} />
          </div>
        </CardContent>
      </Card>
    );
    }

export default WelcomePage; 