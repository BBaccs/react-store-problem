import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';
import CompanyGraph from './components/CompanyGraph';

const API_KEY = 'cqhfe4hr01qm46d7i1h0cqhfe4hr01qm46d7i1hg';

function App() {
  const [companyData, setCompanyData] = useState(null);
  const [symbol, setSymbol] = useState('AAPL');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const marketValResponse = await axios.get(`https://financialmodelingprep.com/api/v3/market-capitalization/${symbol}?apikey=${API_KEY}`);
        const cashResponse = await axios.get(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${symbol}?apikey=${API_KEY}`);
        const debtResponse = await axios.get(`https://financialmodelingprep.com/api/v3/income-statement/${symbol}?apikey=${API_KEY}`);

        const marketValuation = marketValResponse.data[0]?.marketCapitalization / 1e9; // Convert to billions
        const cash = cashResponse.data[0]?.cashAndCashEquivalents / 1e9; // Convert to billions
        const debt = debtResponse.data[0]?.totalDebt / 1e9; // Convert to billions

        setCompanyData({ marketValuation, cash, debt });
        console.log(companyData)
      } catch (error) {
        console.error('Error fetching data:', error);
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
