import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Box } from '@mui/material';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function CompanyGraph({ data }) {
  const chartData = {
    labels: ['Market Valuation', 'Cash', 'Debt', 'Enterprise Value'],
    datasets: data.map(({ companyName, marketValuation, cash, debt }, index) => {
      const enterpriseValue = marketValuation + debt - cash;

      const colors = [
        ['rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
        ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
      ];

      const borderColor = colors[index % colors.length].map(color => color.replace('0.2', '1'));

      return {
        label: `${companyName}'s Financials`,
        data: [marketValuation, cash, debt, enterpriseValue],
        backgroundColor: colors[index % colors.length],
        borderColor: borderColor,
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
