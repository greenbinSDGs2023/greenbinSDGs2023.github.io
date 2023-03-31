// google map ranking
var data = [
	{ name: 'Sveaborg', value: 90 },
	{ name: 'Pasila', value: 22 },
	{ name: 'Otaniemi', value: 52 },
	{ name: 'Lansimaki', value: 42 },
	{ name: 'Espoontie', value: 64 }];

var geoCoordMap = {
	'Sveaborg': [24.99, 60.15],
	'Pasila': [24.93,60.20],
	'Otaniemi': [24.83, 60.18],
	'Lansimaki': [25.11, 60.24],
	'Espoontie': [24.65, 60.21]};

var convertData = function (data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			});
		}
	}
	return res;
};

var option = {
	// 加载 google map 组件
	gmap: {
		// 地图中心 支持数组或JSON对象
		center: { lat: 60.21889, lng: 24.8732 },
		// 缩放级别
		zoom: 11,
		// 其他地图初始化参数...
		// https://developers.google.cn/maps/documentation/javascript/reference/map#MapOptions
		// 移动过程中实时渲染。默认为 true。如数据量较大，建议置为 false。
		renderOnMoving: false,
		// 谷歌地图 ECharts 图层的 zIndex。默认为 2000。
		echartsLayerZIndex: 2019,
		// 是否启用手势事件处理，如拖拽等。默认为 true。
		// 此配置项从 v1.4.0 起支持
		roam: true,
	},
	tooltip: {
		trigger: 'item'
	},
	animation: true,
	series: [
		{
			name: 'Environmental Index',
			type: 'scatter',
			// 使用谷歌地图坐标系
			coordinateSystem: 'gmap',
			// 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
			data: convertData(data),
			symbolSize: function (val) {
				return val[2] / 10;
			},
			encode: {
				value: 2,
				lng: 0,
				lat: 1
			},
			label: {
				formatter: '{b}',
				position: 'right',
				show: false
			},
			itemStyle: {
				color: '#00c1de'
			},
			emphasis: {
				label: {
					show: true
				}
			}
		},
		{
			name: 'Distribution',
			type: 'effectScatter',
			coordinateSystem: 'gmap',
			data: convertData(data.sort(function (a, b) {
				return b.value - a.value;
			}).slice(0, 6)),
			symbolSize: 30,
			encode: {
				value: 2,
				lng: 0,
				lat: 1
			},
			showEffectOn: 'render',
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				formatter: '{b}',
				position: 'right',
				show: true,
				textStyle: {
					fontSize: 16,
				},
			},
			itemStyle: {
				shadowBlur: 5,
				shadowColor: '#333'
			},
			zlevel: 1
		},
	],
	visualMap: {
		type: 'piecewise',
		pieces: [
		  {min: 0, max: 30, label: 'Terrible', color: '#d4000b'},
		  {min: 30, max: 50, label: 'Not Good', color: '#ffb700'},
		  {min: 50, max: 60, label: 'Good', color: '#008ea1'},
		  {min: 60, max: 100, label: 'Excellent', color: '#4d8800'},
		],
		show: true,
		left: 'center',
		bottom: 20,
		orient: 'horizontal',
		itemWidth: 30,
		itemHeight: 15,
		backgroundColor: 'rgba(255,255,255,0.8)'
	  },

};
// 初始化ECharts
var chart = echarts.init(document.getElementById("echarts-google-map"));
chart.setOption(option);
// 获取谷歌地图实例
var gmap = chart.getModel().getComponent("gmap").getGoogleMap();
// 添加一个Marker
var marker = new google.maps.Marker({ position: gmap.getCenter() });
marker.setMap(gmap);
// 添加交通图层
// var trafficLayer = new google.maps.TrafficLayer();
// trafficLayer.setMap(gmap);

// Header account
var menu = document.getElementById("menu"); // 获取菜单栏元素
var avatar = document.getElementById("avatar"); // 获取头像元素

avatar.addEventListener("click", function() { // 给头像元素添加点击事件监听器
    if (menu.style.display === "block") {
		menu.style.display = "none";
	  } else {
		menu.style.display = "block";
	  }
});

document.addEventListener("click", function(event) { // 给整个文档对象添加点击事件监听器
  if (menu.style.display === "block" && !menu.contains(event.target) && event.target !== avatar) {
    // 如果菜单栏正在显示 && 点击事件的目标元素不在菜单栏内 && 点击事件的目标元素不是头像元素
    menu.style.display = "none"; // 隐藏菜单栏
  }
});
