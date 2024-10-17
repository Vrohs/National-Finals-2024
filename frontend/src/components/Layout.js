// import React from 'react';
// import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

// const Layout = ({ children }) => {
//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6">TerraToken.io</Typography>
//         </Toolbar>
//       </AppBar>
//       <Container maxWidth="lg">
//         <Box sx={{ my: 4 }}>
//           {children}
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default Layout;

// ---------------------------------------







import React from'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TerraToken.io
          </Typography>
          <Navigation />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;