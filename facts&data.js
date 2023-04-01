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

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Profit', 'Expenses', 'Income']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'value'
    }
  ],
  yAxis: [
    {
      type: 'category',
      axisTick: {
        show: false
      },
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  series: [
    {
      name: 'Profit',
      type: 'bar',
      label: {
        show: true,
        position: 'inside'
      },
      emphasis: {
        focus: 'series'
      },
      data: [200, 170, 240, 244, 200, 220, 210]
    },
    {
      name: 'Income',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 302, 341, 374, 390, 450, 420]
    },
    {
      name: 'Expenses',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'left'
      },
      emphasis: {
        focus: 'series'
      },
      data: [-120, -132, -101, -134, -190, -230, -210]
    }
  ]
};

option && myChart.setOption(option);
