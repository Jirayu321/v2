import React, { useState } from "react";
import Chart from "react-apexcharts";

const Chart1 = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF1654", "#247BA0"],
    series: [
      {
        name: "This month",
        data: [0, 0, 0, 0],
      },
      {
        name: "Last month",
        data: [0, 0, 0, 0],
      },
    ],
    stroke: {
      width: [2, 2],
    },
    plotOptions: {
      bar: {
        columnWidth: "10%",
      },
    },
    xaxis: {
      categories: ["week1", "week2", "week3", "week4"],
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
          color: "#FF1654",
        },
        labels: {
          style: {
            colors: "#FF1654",
          },
        },
      },
      {
        opposite: false,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#247BA0",
        },
        labels: {
          style: {
            colors: "#247BA0",
          },
        },
        title: {
        //   text: "Last month",
          style: {
            color: "#247BA0",
          },
        },
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
      y: {
        show: false,
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 10,
    },
  });

  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type={options.chart.type}
        height={180}
        width={400}
      />
    </div>
  );
};

export default Chart1;
