import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Types
// -----------
import { CategoryTotalPrice } from "./types";

interface CategoryTotalPriceProduct {
  categoryTotalsPrice: CategoryTotalPrice | undefined;
}

export function BarChart({ categoryTotalsPrice }: CategoryTotalPriceProduct) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };
  const data = {
    labels: ["Teknoloji", "Giyim", "Kozmetik", "Mobilya", "Aksesuar"],
    datasets: [
      {
        label: "Tutar",
        data: [
          categoryTotalsPrice?.tecnology,
          categoryTotalsPrice?.clothes,
          categoryTotalsPrice?.cosmetic,
          categoryTotalsPrice?.furniture,
          categoryTotalsPrice?.accessory,
        ],
        backgroundColor: "#84C7C4",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
