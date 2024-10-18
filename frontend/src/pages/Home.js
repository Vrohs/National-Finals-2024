// import React from 'react';
// import { Typography, Box, Paper, Grid, Container, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import heroBackground from './IMGs/Dalle.webp'

// const HeroSection = styled(Paper)(({ theme }) => ({
//   backgroundImage: `url(${heroBackground})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   color: theme.palette.common.white,
//   padding: theme.spacing(8),
//   textAlign: 'center',
//   position: 'relative',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
//   },
// }));

// const HeroContent = styled(Box)({
//   position: 'relative',
//   zIndex: 1,
// });

// const FeatureSection = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(6),
// }));

// const FeatureItem = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   textAlign: 'center',
//   height: '100%',
// }));

// const Home = () => {
//   return (
//     <Container maxWidth="lg">
//       <HeroSection elevation={3}>
//         <HeroContent>
//           <Typography variant="h2" component="h1" gutterBottom>
//             TerraToken
//           </Typography>
//           <Typography variant="h5" paragraph>
//             The Future of Carbon Credits Trading
//           </Typography>
//           <Button variant="contained" color="secondary" size="large">
//             Start Trading
//           </Button>
//         </HeroContent>
//       </HeroSection>

//       <FeatureSection>
//         <Typography variant="h4" component="h2" align="center" gutterBottom>
//           Why TerraToken?
//         </Typography>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={4}>
//             <FeatureItem elevation={3}>
//               <Typography variant="h6" gutterBottom>
//                 Decentralized and Secure
//               </Typography>
//               <Typography variant="body1">
//                 Our platform is built on blockchain technology, ensuring secure and transparent transactions.
//               </Typography>
//             </FeatureItem>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <FeatureItem elevation={3}>
//               <Typography variant="h6" gutterBottom>
//                 Easy to Use
//               </Typography>
//               <Typography variant="body1">
//                 Buy, sell, and manage your carbon credits with just a few clicks. No complicated processes.
//               </Typography>
//             </FeatureItem>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <FeatureItem elevation={3}>
//               <Typography variant="h6" gutterBottom>
//                 Make a Positive Impact
//               </Typography>
//               <Typography variant="body1">
//                 By trading carbon credits, you contribute to the fight against climate change and support sustainable projects.
//               </Typography>
//             </FeatureItem>
//           </Grid>
//         </Grid>
//       </FeatureSection>

//       <Box my={4} textAlign="center">
//         <Typography variant="h5" gutterBottom>
//           Join the Carbon Credits Revolution
//         </Typography>
//         <Typography variant="body1" paragraph>
//           TerraToken.io provides a seamless and efficient marketplace for carbon credits trading. By leveraging blockchain technology, we ensure transparency, security, and accessibility for businesses and individuals alike.
//         </Typography>
//         <Typography variant="body1" paragraph>
//           Our platform enables you to offset your carbon footprint and support sustainable initiatives worldwide. Together, we can drive positive change and create a greener future.
//         </Typography>
//         <Button variant="contained" color="primary" size="large">
//           Get Started
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default Home;


// ----------------


// import React from 'react';
// import { Typography, Box, Paper, Grid, Container, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleStartTrading = () => {
//     navigate('/trade');
//   };

//   return (
//     <Container maxWidth="lg">
//       <Box my={4}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Welcome to TerraToken.io
//             </Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <Paper elevation={3}>
//               <Box p={3}>
//                 <Typography variant="body1" paragraph>
//                   TerraToken.io is a decentralized platform for carbon credits trading. Our mission is to promote sustainability and reduce carbon emissions by facilitating the exchange of carbon credits between businesses and individuals.
//                 </Typography>
//                 <Typography variant="body1" paragraph>
//                   With TerraToken.io, you can easily buy, sell, and manage your carbon credits, all on a secure and transparent blockchain network. Join us in the fight against climate change and start trading carbon credits today!
//                 </Typography>
//                 <Button 
//                   variant="contained" 
//                   color="primary" 
//                   size="large" 
//                   onClick={handleStartTrading}
//                 >
//                   Start Trading
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default Home;



// ---------------------------------






import React from 'react';
import { Typography, Box, Paper, Grid, Container, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import heroBackground from './IMGs/Dalle.webp';

const HeroSection = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${heroBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: theme.palette.common.white,
  padding: theme.spacing(8),
  textAlign: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

const HeroContent = styled(Box)({
  position: 'relative',
  zIndex: 1,
});

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
}));

const FeatureItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
}));

const Home = () => {
  const navigate = useNavigate();

  const handleStartTrading = () => {
    navigate('/trade');
  };

  return (
    <Container maxWidth="lg">
      <HeroSection elevation={3}>
        <HeroContent>
          <Typography variant="h2" component="h1" gutterBottom>
            TerraToken
          </Typography>
          <Typography variant="h5" paragraph>
            The Future of Carbon Credits Trading
          </Typography>
          <Button variant="contained" color="secondary" size="large" onClick={handleStartTrading}>
            Start Trading
          </Button>
        </HeroContent>
      </HeroSection>

      <FeatureSection>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Why TerraToken?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FeatureItem elevation={3}>
              <Typography variant="h6" gutterBottom>
                Decentralized and Secure
              </Typography>
              <Typography variant="body1">
                Our platform is built on blockchain technology, ensuring secure and transparent transactions.
              </Typography>
            </FeatureItem>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureItem elevation={3}>
              <Typography variant="h6" gutterBottom>
                Easy to Use
              </Typography>
              <Typography variant="body1">
                Buy, sell, and manage your carbon credits with just a few clicks. No complicated processes.
              </Typography>
            </FeatureItem>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureItem elevation={3}>
              <Typography variant="h6" gutterBottom>
                Make a Positive Impact
              </Typography>
              <Typography variant="body1">
                By trading carbon credits, you contribute to the fight against climate change and support sustainable projects.
              </Typography>
            </FeatureItem>
          </Grid>
        </Grid>
      </FeatureSection>

      <Box my={4} textAlign="center">
        <Typography variant="h5" gutterBottom>
          Join the Carbon Credits Revolution
        </Typography>
        <Typography variant="body1" paragraph>
          TerraToken.io provides a seamless and efficient marketplace for carbon credits trading. By leveraging blockchain technology, we ensure transparency, security, and accessibility for businesses and individuals alike.
        </Typography>
        <Typography variant="body1" paragraph>
          Our platform enables you to offset your carbon footprint and support sustainable initiatives worldwide. Together, we can drive positive change and create a greener future.
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={handleStartTrading}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;