import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function CompanyForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    companyName: '',
    marketValuation: '',
    cash: '',
    debt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <TextField
        label="Company Name"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Market Valuation (in billion dollars)"
        name="marketValuation"
        type="number"
        value={formData.marketValuation}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Cash (in billion dollars)"
        name="cash"
        type="number"
        value={formData.cash}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Debt (in billion dollars)"
        name="debt"
        type="number"
        value={formData.debt}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
}

export default CompanyForm;
