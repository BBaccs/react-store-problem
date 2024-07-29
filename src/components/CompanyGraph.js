import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Box } from '@mui/material';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

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

function CompanyGraph({ data }) {
  const chartData = {
    labels: ['Market Valuation', 'Enterprise Value', 'Cash', 'Debt'],
    datasets: data.map(({ companyName, marketValuation, cash, debt }, index) => {
      const enterpriseValue = marketValuation + debt - cash;
      const colorScheme = colorSchemes[index % colorSchemes.length];

      return {
        label: `${companyName}'s Financials`,
        data: [marketValuation, enterpriseValue, cash, debt],
        backgroundColor: [
          colorScheme.background,
          colorScheme.background,
          colorScheme.background,
          colorScheme.background,
        ],
        borderColor: [
          colorScheme.border,
          colorScheme.border,
          colorScheme.border,
          colorScheme.border,
        ],
        borderWidth: 1,
      };
    }),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(context.parsed.y) + ' billion';
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Bar data={chartData} options={options} />
        </CardContent>
      </Card>
    </Box>
  );
}

export default CompanyGraph;
