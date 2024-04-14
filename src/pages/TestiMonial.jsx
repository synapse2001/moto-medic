import React from 'react';
import Card from '@mui/material/Card';          // Import Card from Material-UI
import CardContent from '@mui/material/CardContent';  // Import CardContent from Material-UI
import InfiniteMovingCards from '../components/ui/InfiniteMovingCards';  // Import InfiniteMovingCards component
const cardStyle = {
    width: '100%',
    height:'70%',
    backdropFilter: 'blur(12px)', // Add blur effect
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Add transparency
    borderRadius: '20px',
  };

const Testimonial = () => {
  return (
    <Card variant="outlined" style={cardStyle}>
        <div style={{margin:'10vw'}}></div>
      <CardContent>
        {/* Embedding the InfiniteMovingCards component */}
        <InfiniteMovingCards
          items={[
            {
              quote: "It was the best of times, it was the worst of times...",
              name: "Charles Dickens",
              title: "A Tale of Two Cities",
            },
            {
                quote: " it was the worst of times...",
                name: "Charles Dickens",
                title: "A Tale of To Cities",
              },
            // Add other items as needed
          ]}
          direction="right"
          speed="slow"
        />
      </CardContent>
    </Card>
  );
};

export default Testimonial;
