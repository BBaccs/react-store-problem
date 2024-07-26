import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';
import CompanyGraph from './components/CompanyGraph';

const API_KEY = 'cqhfhr1r01qm46d7i3agcqhfhr1r01qm46d7i3b0'; 

function App() {
  const [companyData, setCompanyData] = useState(null);
  const [symbol, setSymbol] = useState('AAPL');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch company profile (includes market cap)
        const profileResponse = await axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_KEY}`);
        // console.log('Profile Response:', profileResponse);

        // Fetch company financials (includes balance sheet)
        const financialsResponse = await axios.get(`https://finnhub.io/api/v1/stock/financials?symbol=${symbol}&token=${API_KEY}&statement=bs&freq=annual`);
        console.log('Financials Response:', financialsResponse);

        const marketValuation = profileResponse.data.marketCapitalization / 1e9; // Convert to billions
        const cash = financialsResponse.data.balanceSheet[0]?.cashAndCashEquivalents / 1e9; // Convert to billions
        const debt = financialsResponse.data.balanceSheet[0]?.totalDebt / 1e9; // Convert to billions

        setCompanyData({ marketValuation, cash, debt });
      } catch (error) {
        if (error.response) {
          // The request was made, and the server responded with a status code outside of the range of 2xx
          console.error('Error response data:', error.response.data);
          console.error('Error response status:', error.response.status);
          console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error('Error request data:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
      }
    };

    fetchData();
  }, [symbol]);

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
      {companyData && <CompanyGraph data={companyData} />}
    </Container>
  );
}

export default App;
