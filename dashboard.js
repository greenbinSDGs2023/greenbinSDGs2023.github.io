// Header account

var menu = document.getElementById("menu"); // 获取菜单栏元素
var avatar = document.getElementById("avatar"); // 获取头像元素
avatar.addEventListener("click", function () { // 给头像元素添加点击事件监听器
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
document.addEventListener("click", function (event) { // 给整个文档对象添加点击事件监听器
  if (menu.style.display === "block" && !menu.contains(event.target) && event.target !== avatar) {
    // 如果菜单栏正在显示 && 点击事件的目标元素不在菜单栏内 && 点击事件的目标元素不是头像元素
    menu.style.display = "none"; // 隐藏菜单栏
  }
});


// 1st stacked bar column chart: Monthly Breakdown of Garbage by Type
// 获取canvas元素
var barChart = document.getElementById("stacked-bar-chart").getContext('2d');
// 随机数据
var data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
	  barThickness: 35,
      label: "Mixed",
      data: [301, 330, 316, 295, 285, 290],
      // backgroundColor: "#A29FA17F"
    //   backgroundColor: "#cbcbcb"
		backgroundColor: "#a2a0a2"
    },
    {
		barThickness: 35,
      label: "Bio",
      data: [138, 120, 130, 146, 157, 156],
      // backgroundColor: "#6E53487F"
    //   backgroundColor: "#c89c88"
		backgroundColor: "#6c5248"
    },
    {
		barThickness: 35,
      label: "Plastic",
      data: [40, 50, 52, 60, 53, 46],
      // backgroundColor: "#FFD7037F"
    //   backgroundColor: "#c8c888"
		backgroundColor: "#ffd703"
    },
    {
		barThickness: 35,
      label: "Carton",
      data: [30, 40, 34, 45, 36, 38],
      // backgroundColor: "#0180B97F"
    //   backgroundColor: "#88abc8"
		backgroundColor: "#0280b8"
    },
    {
		barThickness: 35,
		borderRadius: 3,
      label: "Other",
      data: [50, 60, 58, 43, 62, 53],
      // backgroundColor: "#0000007F"
    //   backgroundColor: "#8e8e8e"
	  backgroundColor: "#000000"
    }
  ]
};
// 配置选项
var options = {
  plugins: {
    legend: {
      position: 'bottom',
	  align: "end",
    labels: {
      usePointStyle: true,
      pointStyle: 'rect',
    },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
		grid: {
			display: false,
		},
      stacked: true,
      ticks: {
        font: {
          size: 14,
          weight: 'normal',
        }
      },
    },
    y: {
      title: {
        display: true,
        text: 'Cost per 100 People  (EUR)',
        font: {
          size: 12,
          weight: 'normal',
        }
      },
      ticks: {
        font: {
          size: 14,
          weight: 'normal',
        }
      },
      stacked: true,
      suggestedMin: 0,
      suggestedMax: 700,
    }
  }
};
// 创建图表
var chart = new Chart(barChart, {
  type: 'bar',
  data: data,
  options: options
});


// 2nd co2 emission chart
// 获取canvas元素
var barChart = document.getElementById("co2-emission-chart").getContext('2d');

// 随机数据
var data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: 'CO2 Emission',
      data: [36, 13, 26, 6, 17, 14],
      pointRadius: 0,
      // borderColor: "#F2C94C",
      // borderColor: "#898871",
      borderColor: "#5f684b",
      // backgroundColor: "#F2C94C",
      // backgroundColor: "#898871",
      backgroundColor: "#5f684b",
	  borderWidth: 4,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
      type: 'line',
    },
    {
		barThickness: 35,
      label: 'Volume of Mixed Waste',
      data: [86, 53, 76, 56, 67, 64],
      borderColor: "#628D2A",
      // backgroundColor: "#8CC63FAF",
    //   backgroundColor: "#cbcbcb",
	backgroundColor: "#a2a0a2",
	borderRadius: 3,
      stack: 'combined',
      yAxisID: 'y1',
      type: 'bar'
    }
  ]
};
// 配置选项
var options = {
  plugins: {
    legend: {
      position: 'bottom',
	  align: "end",
    labels: {
      usePointStyle: true,
      pointStyle: 'rect',
    },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
		grid: {
			display: false,
		},
      ticks: {
        font: {
          size: 14,
          weight: 'normal',
        }
      },
    },
    y: {
		grid: {
			display: false,
		},
        display: true,
        title: {
          display: true,
          text: 'CO2 Emission  (Kg)',
        },
        suggestedMin: 0,
        suggestedMax: 50
      },
    y1: {
      display: true,
      position: 'right',
      title: {
        display: true,
        text: 'Volume of Mixed Waste  (ton)',
      },
      suggestedMin: 30,
      suggestedMax: 90,
    }


    }
};
// 创建图表
var chart = new Chart(barChart, {
  type: 'bar',
  data: data,
  options: options
});


// 3rd line chart: Monthly Garbage Disposal Cost per 100 People
// 获取canvas元素
var lineChart = document.getElementById("line-chart").getContext('2d');

var data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "My Community",
      data: [4, 5, 10, 9, 12, 13, 10, 7, 5, 3, 2, 1],
      pointRadius: 5,
      // borderColor: "#D0A00F",
      borderColor: "#b3892e",
      // backgroundColor: "#F2C94C",
      backgroundColor: "#b3892e",
      pointStyle: 'rectRot',
      pointRadius: 3,
      // pointBorderColor: 'rgb(0, 0, 0)'
      pointBorderColor: "#b3892e",
      // cubicInterpolationMode: 'monotone',
      // tension: 0.4
	  borderWidth: 4
    }
  ]
};
// 配置选项
var options = {
  plugins: {
    legend: {
	  display: false,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle: 'rect',
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
		grid: {
			display: false,
		},
      ticks: {
        font: {
          size: 14,
          weight: 'normal',
        }
      },
    },
    y: {
    //   display: false,
	reverse: true,
      title: {
        display: true,
        text: 'Ranking',
      },
      suggestedMin: 1,
      suggestedMax: 15,
    }
  }
};
// 创建图表
var chart = new Chart(lineChart, {
  type: 'line',
  data: data,
  options: options
});

// 4th ranking curve chart
// 获取canvas元素
var lineChart = document.getElementById("ranking-curve-chart").getContext('2d');

var data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "My Community",
      data: [55, 62, 58, 71, 56, 68, 75, 69, 65, 72, 67, 65],
      pointRadius: 6,
      // borderColor: "#F8FCF4",
      borderColor: "#ffffff00",
      // backgroundColor: "#F2C94C",
      backgroundColor: "#b2841f",
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: "Median",
      data: [50, 60, 53, 73, 62, 53, 63, 59, 65, 73, 62, 65],
      pointRadius: 1,
      // borderColor: "#628D2A",
      borderColor: "#d5ae598F",
      // backgroundColor: "#8CC63F2F",
      backgroundColor: "#d5ae592F",
      fill: true,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }
  ]
};
// 配置选项
var options = {
  plugins: {
    legend: {
      position: 'bottom',
	  align: "end",
    labels: {
      usePointStyle: true,
      pointStyle: 'rect',
    },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
		grid: {
			display: false,
		},
      ticks: {
        font: {
          size: 14,
          weight: 'normal',
        }
      },
    },
    y: {
    //   display: false,
      title: {
        display: true,
        text: 'Sorting Rate  (%)',
      },
      suggestedMin: 30,
      suggestedMax: 90,
    }
  }
};
// 创建图表
var chart = new Chart(lineChart, {
  type: 'line',
  data: data,
  options: options
});





/* // 3rd pie-chart:
var pieChart = document.getElementById("pie-chart").getContext('2d');
// 随机数据
var data = {
  labels: [
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Orange"
  ],
  datasets: [{
    data: [300, 50, 100, 70, 200, 150],
    backgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#4BC0C0",
      "#9966FF",
      "#FF9F40"
    ],
    hoverBackgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#4BC0C0",
      "#9966FF",
      "#FF9F40"
    ]
  }]
};
// 配置选项
var options = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: 'Pie Chart'
  }
};
// 创建图表
var chart = new Chart(pieChart, {
  type: 'pie',
  data: data,
  options: options
});

// radar-chart
var radarChart = document.getElementById("radar-chart").getContext('2d');
// 随机数据
var data = {
  labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
  datasets: [{
    label: "Data",
    backgroundColor: "rgba(179,181,198// ,0.2)",
    borderColor: "rgba(179,181,198,1)",
    pointBackgroundColor: "rgba(179,181,198,1)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(179,181,198,1)",
    data: [65, 59, 90, 81, 56, 55, 40]
  }]
};
// 配置选项
var options = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: 'Radar Chart'
  },
  scale: {
    ticks: {
      beginAtZero: true
    }
  }
};
// 创建图表
var chart = new Chart(radarChart, {
  type: 'radar',
  data: data,
  options: options
});

 */
