// CompanyForm.js

import React, { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CompanyGraph from './CompanyGraph';

const colorSchemes = [
  {
    background: 'rgba(75, 192, 192, 0.2)',
    border: 'rgba(75, 192, 192, 1)',
  },
  {
    background: 'rgba(54, 162, 235, 0.2)',
    border: 'rgba(54, 162, 235, 1)',
  },
  {
    background: 'rgba(255, 99, 132, 0.2)',
    border: 'rgba(255, 99, 132, 1)',
  },
  {
    background: 'rgba(153, 102, 255, 0.2)',
    border: 'rgba(153, 102, 255, 1)',
  },
  {
    background: 'rgba(255, 206, 86, 0.2)',
    border: 'rgba(255, 206, 86, 1)',
  },
  {
    background: 'rgba(75, 192, 192, 0.2)',
    border: 'rgba(75, 192, 192, 1)',
  },
  // Add more color schemes if needed
];

function CompanyForm() {
  const [companies, setCompanies] = useState([]);
  const [formValues, setFormValues] = useState({
    companyName: '',
    marketValuation: '',
    cash: '',
    debt: '',
  });
  const [editIndex, setEditIndex] = useState(null);

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

    if (editIndex !== null) {
      const updatedCompanies = companies.map((company, index) =>
        index === editIndex ? newCompany : company
      );
      setCompanies(updatedCompanies);
      setEditIndex(null);
    } else {
      setCompanies([...companies, newCompany]);
    }

    setFormValues({ companyName: '', marketValuation: '', cash: '', debt: '' });
  };

  const handleEdit = (index) => {
    const companyToEdit = companies[index];
    setFormValues({
      companyName: companyToEdit.companyName,
      marketValuation: companyToEdit.marketValuation.toString(),
      cash: companyToEdit.cash.toString(),
      debt: companyToEdit.debt.toString(),
    });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedCompanies = companies.filter((_, i) => i !== index);
    setCompanies(updatedCompanies);
  };

  return (
    <Box>
      <CompanyGraph data={companies} />
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
          label="Market Valuation (in billions USD)"
          name="marketValuation"
          value={formValues.marketValuation}
          onChange={handleInputChange}
          type="number"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cash (in billions USD)"
          name="cash"
          value={formValues.cash}
          onChange={handleInputChange}
          type="number"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Debt (in billions USD)"
          name="debt"
          value={formValues.debt}
          onChange={handleInputChange}
          type="number"
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          {editIndex !== null ? 'Update Company' : 'Add Company'}
        </Button>
      </form>
      {companies.map((company, index) => {
        const colorScheme = colorSchemes[index % colorSchemes.length];
        return (
          <Card key={index} sx={{ mt: 2, borderLeft: `8px solid ${colorScheme.border}` }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="h6">{company.companyName}</Typography>
                  <Typography variant="body2">Market Valuation: {company.marketValuation} billion USD</Typography>
                  <Typography variant="body2">Cash: {company.cash} billion USD</Typography>
                  <Typography variant="body2">Debt: {company.debt} billion USD</Typography>
                </Box>
                <Box>
                  <IconButton onClick={() => handleEdit(index)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(index)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}

export default CompanyForm;
