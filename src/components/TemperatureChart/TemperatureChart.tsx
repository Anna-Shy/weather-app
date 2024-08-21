import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

interface TemperatureChartProps {
  hourlyData: any[];
}

export const TemperatureChart: React.FC<TemperatureChartProps> = ({
  hourlyData,
}) => {
  const labels = hourlyData.map((data) =>
    new Date(data.dt * 1000).toLocaleTimeString(),
  );
  const temperatures = hourlyData.map((data) => data.main.temp);

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        borderColor: "#ff6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  return <Line data={data} className="TemperatureChart" />;
};
