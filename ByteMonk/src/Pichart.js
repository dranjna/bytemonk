import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';

// Define a function to generate unique colors
const getColor = (() => {
  const colorMap = {};
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF69B4', '#6A5ACD', '#D2691E', '#32CD32']; // Add more colors if needed
  let index = 0;

  return (category) => {
    if (!colorMap[category]) {
      colorMap[category] = COLORS[index % COLORS.length];
      index += 1;
    }
    return colorMap[category];
  };
})();

export default function Pichart({ category }) {
  const reports = useSelector((state) => state.reports);
  const filteredReports = category === 'All'
    ? reports
    : reports.filter((report) => report.category === category);

  const data = filteredReports.reduce((acc, report) => {
    const existingCategory = acc.find((item) => item.name === report.category);
    if (existingCategory) {
      existingCategory.value += 1;
    } else {
      acc.push({ name: report.category, value: 1 });
    }
    return acc;
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}> {/* Make width responsive */}
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          cx="50%" // Center x
          cy="50%" // Center y
          outerRadius="80%" // Adjust outer radius
          label={({ name }) => name} // Display category name on the pie slice
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
          ))}
        </Pie>
        <Tooltip
          content={({ payload }) => {
            if (!payload || payload.length === 0) return null;
            const { name, value } = payload[0].payload;
            return (
              <div style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ddd' }}>
                <strong style={{ color: getColor(name) }}>{name}</strong>: {value}
              </div>
            );
          }}
        />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          wrapperStyle={{ padding: '10px' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
