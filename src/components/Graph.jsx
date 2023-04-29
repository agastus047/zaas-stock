import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import axios from "axios";

function Graph({ func }) {
  const [time, setTime] = useState([]);
  const [price, setPrice] = useState([]);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  function test() {
    func(price[price.length - 1]);
  }

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/getgraph",
    }).then(function (res) {
      //   console.log(res.data);
      setPrice(res.data.arr2);
      setTime(res.data.arr1);
      //   console.log(time[time.length-1])
      test();
    });
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: time,
      datasets: [
        {
          label: "Price",
          data: price,
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <>
      <Chart type="line" data={chartData} options={chartOptions} />
    </>
  );
}

export default Graph;
