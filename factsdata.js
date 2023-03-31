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


// fatcs pie chart
var pieChart = document.getElementById("facts-pie-chart").getContext('2d');
// 随机数据
var data = {
  labels: [
    "Bio",
    "Mixed",
    "Carton",
    "Plastic",
    "Others"
  ],
  datasets: [{
    data: [11, 49, 5, 3, 32],
    backgroundColor: [
      "#7EAB55",
      "#468B6A",
      "#110B94",
      "#5F9DB6",
      "#4064AE",
    ],
    hoverBackgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#4BC0C0",
      "#9966FF"
    ]
  }]
};
// 配置选项
var options = {
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
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


// fatcs mixed pie chart
var pieChart = document.getElementById("facts-pie-mixed-chart").getContext('2d');
// 随机数据
var data = {
  labels: [
    "Bio",
    "Mixed",
    "Carton",
    "Plastic",
    "Others"
  ],
  datasets: [{
    data: [39, 15, 10, 14, 22],
    backgroundColor: [
      "#7EAB55",
      "#468B6A",
      "#110B94",
      "#5F9DB6",
      "#4064AE"
    ],
    hoverBackgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#4BC0C0",
      "#9966FF"
    ]
  }]
};
// 配置选项
var options = {
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
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
// var radarChart = document.getElementById("radar-chart").getContext('2d');
// // 随机数据
// var data = {
//   labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
//   datasets: [{
//     label: "Data",
//     backgroundColor: "rgba(179,181,198// ,0.2)",
//     borderColor: "rgba(179,181,198,1)",
//     pointBackgroundColor: "rgba(179,181,198,1)",
//     pointBorderColor: "#fff",
//     pointHoverBackgroundColor: "#fff",
//     pointHoverBorderColor: "rgba(179,181,198,1)",
//     data: [65, 59, 90, 81, 56, 55, 40]
//   }]
// };
// // 配置选项
// var options = {
//   responsive: true,
//   maintainAspectRatio: false,
//   title: {
//     display: true,
//     text: 'Radar Chart'
//   },
//   scale: {
//     ticks: {
//       beginAtZero: true
//     }
//   }
// };
// // 创建图表
// var chart = new Chart(radarChart, {
//   type: 'radar',
//   data: data,
//   options: options
// });


