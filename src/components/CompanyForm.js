import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Box, TextField, Button } from '@mui/material';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import CompanyGraph from './CompanyGraph';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function CompanyForm() {
  const [companies, setCompanies] = useState([]);
  const [formValues, setFormValues] = useState({
    companyName: '',
    marketValuation: '',
    cash: '',
    debt: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCompany = {
      companyName: formValues.companyName,
      marketValuation: parseFloat(formValues.marketValuation),
      cash: parseFloat(formValues.cash),
      debt: parseFloat(formValues.debt),
    };
    setCompanies([...companies, newCompany]);
    setFormValues({ companyName: '', marketValuation: '', cash: '', debt: '' });
    console.log(companies, 'companiesSTATE');
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Company Name"
          name="companyName"
          value={formValues.companyName}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Market Valuation"
          name="marketValuation"
          value={formValues.marketValuation}
          onChange={handleInputChange}
          type="number"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cash"
          name="cash"
          value={formValues.cash}
          onChange={handleInputChange}
          type="number"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Debt"
          name="debt"
          value={formValues.debt}
          onChange={handleInputChange}
          type="number"
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Add Company
        </Button>
      </form>
      <CompanyGraph data={companies} />
    </Box>
  );
}

export default CompanyForm;
