import React, { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CompanyGraph from './CompanyGraph';

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
          {editIndex !== null ? 'Update Company' : 'Add Company'}
        </Button>
      </form>
      {companies.map((company, index) => (
        <Card key={index} sx={{ mt: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6">{company.companyName}</Typography>
                <Typography variant="body2">Market Valuation: {company.marketValuation} billion</Typography>
                <Typography variant="body2">Cash: {company.cash} billion</Typography>
                <Typography variant="body2">Debt: {company.debt} billion</Typography>
              </Box>
              <IconButton onClick={() => handleEdit(index)} color="primary">
                <EditIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default CompanyForm;
