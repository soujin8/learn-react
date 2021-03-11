import React, { useRef } from "react";
import "@toast-ui/chart/dist/toastui-chart.min.css";
import { BarChart } from "@toast-ui/react-chart";

const Chart: React.FC = () => {
  const chartRef = useRef(null);

  const data = {
    categories: ["June", "July", "Aug", "Sep", "Oct", "Nov"],
    series: [],
  };

  const options = {
    chart: {
      width: 1160,
      height: 650,
      title: "Monthly Revenue",
    },
    yAxis: {
      title: "Month",
    },
    xAxis: {
      title: "Amount",
    },
  };

  const containerStyle = {
    width: "600px",
    height: "600px",
  };

  const handleClick = () => {
    // if (chartRef.current !== null) {
    chartRef.current.getInstance().setData({
      categories: ["June", "July", "Aug", "Sep", "Oct", "Nov"],
      series: [],
    });
    // }
  };

  React.useEffect(() => {
    chartRef.current.getInstance().setData({
      categories: ["June", "July", "Aug", "Sep", "Oct", "Nov"],
      series: [
        {
          name: "Budget",
          data: [5000, 3000, 5000, 7000, 6000, 4000],
        },
        {
          name: "Income",
          data: [8000, 1000, 7000, 2000, 5000, 3000],
        },
      ],
    });
  }, [chartRef]);

  return (
    <>
      <button onClick={handleClick}>Reset</button>
      <BarChart
        ref={chartRef}
        data={data}
        options={options}
        style={containerStyle}
      />
    </>
  );
};
export default Chart;
