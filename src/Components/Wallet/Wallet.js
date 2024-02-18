import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API from '../../Config/Config';
import './styles.css';
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";


export default function Wallet() {

  const sellerId = localStorage.getItem('userID');

  const [totalEarnings, setTotalEarnings] = useState(0);
  const [expectedEarnings, setExpectedEarnings] = useState(0);
  const [analytics, setAnalytics] = useState([]);
  const [orderLabels, setOrderLabels] = useState([]);
  const [orderCount, setOrderCount] = useState({});


  const handleTotalEarningsData = ()=> {
    axios.get(`${API.apiUri}/totalEarnings/${sellerId}`).then((res)=> {
      console.log(res.data.totalAmount);
      setTotalEarnings(res?.data?.totalAmount);
    }).catch((e)=>{
      console.log(e);
    })
  }

  const handleExpectedEarningsData =  ()=> {
    axios.get(`${API.apiUri}/expectedEarnings/${sellerId}`).then((res)=> {
      console.log(res.data.totalAmount);
      setExpectedEarnings(res?.data?.totalAmount);
    }).catch((e)=>{
      console.log(e);
    })
  }

  const handleOrderAnalytics = ()=> {
    axios.get(`${API.apiUri}/orderAnalytics/${sellerId}`).then((res)=> {
      console.log(res?.data);

      let prices = [];
      let labels = [];
      for(let i = 0; i < res.data.length; i++){
        prices.push(res.data[i].price);
        // console.log(res.data[i].price);
        labels.push(res.data[i].cakeName);
      }

      setAnalytics([...prices]);
      setOrderLabels([...labels]);
    }).catch((e)=>{
      console.log(e);
    });

    axios.get(`${API.apiUri}/orderCount/${sellerId}`).then((res)=> {
      console.log(res?.data);
      setOrderCount(res?.data);
    }).catch((e)=> {
      console.log(e);
    })

  }

  useEffect(()=>{
    handleTotalEarningsData();
    handleExpectedEarningsData();
    handleOrderAnalytics();
  });


  return (
    <div>
      <div className='balance-container'>
        <div className='amount-container'>
          <h1>Total Earnings</h1>
          <h3>${totalEarnings}</h3>
        </div>

        <div className='amount-container'>
          <h1>Expected Earnings</h1>
          <h3>${expectedEarnings}</h3>
        </div>
      </div>

      <div className='graph-parent'>
        <div className='graph-container'>
          <Bar
              data={{
                datasets: [
                  {
                    label: "Revenue Tracker",
                    data: [totalEarnings, expectedEarnings],
                    backgroundColor: ["#F77D0A", "#343a40", "rgba(0,0,0,0.07)"],

                    hoverBackgroundColor: [
                      "#6f42c1",
                      "#6f42c1",
                      "rgba(0, 123, 255,0.5)",
                      "rgba(0,0,0,0.07)",
                    ],
                  },
                ],
                labels: ["Total Earnings", "Expected Earnings"],
              }}
              width={100}
              height={100}
              options={{
                legend: {
                  labels: {
                    color: "white",
                  },
                },

                scales: {
                  y: {
                    ticks: {
                      color: "black",
                      beginAtZero: true,
                    },
                    grid: {
                      color: "rgba(185, 185, 185, 0.427)",
                    },
                  },

                  x: {
                    ticks: {
                      color: "white",
                      beginAtZero: true,
                    },
                  },
                },
              }}
            />
        </div>

        <div className='graph-container'>
            <Line
                data={{
                  datasets: [
                    {
                      label: "Order Tracker",
                      data: analytics,
                      backgroundColor: ["#F77D0A", "#343a40", "rgba(0,0,0,0.07)"],

                      hoverBackgroundColor: [
                        "#6f42c1",
                        "#6f42c1",
                        "rgba(0, 123, 255,0.5)",
                        "rgba(0,0,0,0.07)",
                      ],
                    },
                  ],
                  labels: orderLabels,
                }}
                width={100}
                height={100}
                options={{
                  legend: {
                    labels: {
                      color: "white",
                    },
                  },

                  scales: {
                    y: {
                      ticks: {
                        color: "black",
                        beginAtZero: true,
                      },
                      grid: {
                        color: "rgba(185, 185, 185, 0.427)",
                      },
                    },

                    x: {
                      ticks: {
                        color: "white",
                        beginAtZero: true,
                      },
                    },
                  },
                }}
              />
        </div>

        <div className='graph-container'>
            <Pie
                data={{
                  datasets: [
                    {
                      label: "Order Tracker",
                      data: orderCount.data,
                      backgroundColor: ["#F77D0A", "#343a40", "rgba(0,0,0,0.07)"],

                      hoverBackgroundColor: [
                        "#6f42c1",
                        "#6f42c1",
                        "rgba(0, 123, 255,0.5)",
                        "rgba(0,0,0,0.07)",
                      ],
                    },
                  ],
                  labels: orderCount.labels,
                }}
                width={100}
                height={100}
                options={{
                  legend: {
                    labels: {
                      color: "white",
                    },
                  },

                  scales: {
                    y: {
                      ticks: {
                        color: "black",
                        beginAtZero: true,
                      },
                      grid: {
                        color: "rgba(185, 185, 185, 0.427)",
                      },
                    },

                    x: {
                      ticks: {
                        color: "white",
                        beginAtZero: true,
                      },
                    },
                  },
                }}
              />
        </div>
      </div>
      
    </div>
  )
}
