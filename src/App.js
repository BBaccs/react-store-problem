import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import CompanyForm from './components/CompanyForm';
import CompanyGraph from './components/CompanyGraph';

function App() {
  const [companyData, setCompanyData] = useState(null);

  const handleFormSubmit = (data) => {
    // Convert all values to billions
    const updatedData = {
      ...data,
      marketValuation: data.marketValuation * 1000,
      cash: data.cash * 1000,
      debt: data.debt * 1000,
    };
    setCompanyData(updatedData);
  };

  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Company Financial Graph
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          All values are in billion dollars.
        </Typography>
      </Box>
      <CompanyForm onFormSubmit={handleFormSubmit} />
      {companyData && <CompanyGraph data={companyData} />}
    </Container>
  );
}

export default App;
