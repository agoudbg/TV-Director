function Request(strName) {
	var strHref = location.href;
	var intPos = strHref.indexOf("?");
	var strRight = strHref.substr(intPos + 1);
	var arrTmp = strRight.split("&");
	for (var i = 0; i < arrTmp.length; i++) {
		var arrTemp = arrTmp[i].split("=");
		if (arrTemp[0].toUpperCase() == strName.toUpperCase())
			return arrTemp[1];
	}
	return "";
}

var id = Request("id");
var s = Request("s");

{
	var dp = new DPlayer({
		container: document.getElementById('live'),
		theme: '#FFFFFF',
		live: true,
		hotkey: false,
		autoplay: true,
		screenshot: true,
		volume: 1.0,
		// 视频右键菜单
		contextmenu: [
			{
				text: '229资料站',
				link: 'https://https://229.junbo.wang',
			},
			{
				text: '加载不出来再次右键',
				link: '',
			},
			{
				text: '选重新加载框架',
				link: '',
			},
		],

		video: {
			quality:
				[{ name: '', url: s, type: 'hls', }],

			pic: 'https://ae01.alicdn.com/kf/Hcb6d59ba2e394fd6b9be11b16a64c917L.jpg',
			defaultQuality: 0,
		}
	})
		;
}
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}
disable = getCookie('disable_autoplay');
//alert(disable);
if (disable == "true") {

}

else {
	dp.play();
}
window.onload = function () {
	var oBox = document.getElementById('drag');

	oBox.ondragenter = function () {
		return false;
	};
	oBox.ondragover = function () {
		return false;
	};
	oBox.ondragleave = function () {
		return false;
	};
	oBox.ondrop = function (ev) {
		var data = ev.dataTransfer.getData("text");

		//alert(data);
		location.replace("player.html?s=" + data);

		return false;
	};
};


dp.on('pause', function () {
	pausead.style.display = "block";
});
dp.on('play', function () {
	pausead.style.display = "none";
});