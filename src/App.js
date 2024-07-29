import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import CompanyForm from './components/CompanyForm';

function App() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Company Financial Graph
        </Typography>
      </Box>
      <CompanyForm />
    </Container>
  );
}

export default App;