
	var coins = 0
	var minelvl = 1
	var picklvl = 1
	var upgradepicklvlprice = 300;
	var coinAdd = 0;
	var mineupgradeprice = 100;
	var autominerupgradeprice = 500;
	var autominercount = 0;
	var coinspersec = 0;
	var coinspersec1 = 0;
	var password = "Evan1233";
	var check = getCookie("ccoins");
	if(check != "") {
       	coins = getCookie("ccoins");
	minelvl = getCookie("cminelvl");
	picklvl = getCookie("cpicklvl");
	upgradepicklvlprice = getCookie("cupgradepicklvlprice");
	mineupgradeprice = getCookie("cmineupgradeprice");
	autominerupgradeprice = getCookie("cautominerupgradeprice");
	autominercount = getCookie("cautominercount");
	coinspersec = getCookie("ccoinspersec");
	coinspersec1 = getCookie("ccoinspersec1");
	};
function upgrademine(){
			if(coins >= mineupgradeprice && minelvl < 20){
			coins = coins - mineupgradeprice;
			document.getElementById("coincount").innerHTML = "$" + coins;
			minelvl = minelvl + 1;
			if(minelvl == 20){
			document.getElementById("minelvlcount").innerHTML = " " + minelvl + " Max";
			} else {
			document.getElementById("minelvlcount").innerHTML = " " + minelvl;
			};
			
			coinAdd = coinAdd + 1;
			var mineupgradeprice1 = mineupgradeprice * 2.8;
			mineupgradeprice = Math.round(mineupgradeprice1);
			document.getElementById("upgradebutton").innerHTML = "upgrade mine for $" + mineupgradeprice;
			coinspersec1 = 1 + coinAdd;
			coinspersec2 = coinspersec1 * autominercount;
			coinspersec = coinspersec2 * 20;
			document.getElementById("coinpersec").innerHTML = "$" + coinspersec + " per sec";
			if(minelvl == 2){
				document.getElementById('mine').setAttribute('src', 'https://2.pixiecdn.com/sprites/231110/original.png');
				document.getElementById("minetype").innerHTML = "Tin value is 2";
			};
			if(minelvl == 3){
				document.getElementById('mine').setAttribute('src', 'https://3.pixiecdn.com/sprites/231111/original.png');
				document.getElementById("minetype").innerHTML = "Iron value is 3";
			};
			if(minelvl == 4){
				document.getElementById('mine').setAttribute('src', 'https://0.pixiecdn.com/sprites/231112/original.png');
				document.getElementById("minetype").innerHTML = "Silver value is 4";
			};
			if(minelvl == 5){
				document.getElementById('mine').setAttribute('src', 'https://2.pixiecdn.com/sprites/231174/original.png');
				document.getElementById("minetype").innerHTML = "Quartz value is 5";
			};
			if(minelvl == 6){
				document.getElementById('mine').setAttribute('src', 'https://1.pixiecdn.com/sprites/231113/original.png');
				document.getElementById("minetype").innerHTML = "Topaz value is 6";
			};
			if(minelvl == 7){
				document.getElementById('mine').setAttribute('src', 'https://3.pixiecdn.com/sprites/231175/original.png');
				document.getElementById("minetype").innerHTML = "Uranium value is 7";
			};
			if(minelvl == 8){
				document.getElementById('mine').setAttribute('src', 'https://3.pixiecdn.com/sprites/231115/original.png');
				document.getElementById("minetype").innerHTML = "Amethyst value is 8";
			};
			if(minelvl == 9){
				document.getElementById('mine').setAttribute('src', ' https://0.pixiecdn.com/sprites/231116/original.png');
				document.getElementById("minetype").innerHTML = "Ruby value is 9";
			};
			if(minelvl == 10){
				document.getElementById('mine').setAttribute('src', 'https://0.pixiecdn.com/sprites/231176/original.png');
				document.getElementById("minetype").innerHTML = "Bismuth value is 10";
			};
			if(minelvl == 11){
				document.getElementById('mine').setAttribute('src', 'https://1.pixiecdn.com/sprites/231117/original.png');
				document.getElementById("minetype").innerHTML = "Gold value is 11";
			};
			if(minelvl == 12){
				document.getElementById('mine').setAttribute('src', ' https://1.pixiecdn.com/sprites/231177/original.png');
				document.getElementById("minetype").innerHTML = "Sapphire value is 12";
			};
			if(minelvl == 13){
				document.getElementById('mine').setAttribute('src', 'https://2.pixiecdn.com/sprites/231178/original.png');
				document.getElementById("minetype").innerHTML = "Tourmaline value is 13";
			};
			if(minelvl == 14){
				document.getElementById('mine').setAttribute('src', 'https://2.pixiecdn.com/sprites/231114/original.png');
				document.getElementById("minetype").innerHTML = "Emerald value is 14";
			};
			if(minelvl == 15){
				document.getElementById('mine').setAttribute('src', 'https://3.pixiecdn.com/sprites/231179/original.png');
				document.getElementById("minetype").innerHTML = "Aquamarine value is 15";
			};
			if(minelvl == 16){
				document.getElementById('mine').setAttribute('src', 'https://2.pixiecdn.com/sprites/231118/original.png');
				document.getElementById("minetype").innerHTML = "Diamond value is 16";
			};
			if(minelvl == 17){
				document.getElementById('mine').setAttribute('src', 'https://1.pixiecdn.com/sprites/231181/original.png');
				document.getElementById("minetype").innerHTML = "Beryl value is 17";
			};
			if(minelvl == 18){
				document.getElementById('mine').setAttribute('src', 'https://2.pixiecdn.com/sprites/231182/original.png');
				document.getElementById("minetype").innerHTML = "Benitoite value is 18";
			};
			if(minelvl == 19){
				document.getElementById('mine').setAttribute('src', 'https://3.pixiecdn.com/sprites/231183/original.png');
				document.getElementById("minetype").innerHTML = "Taaffeite value is 19";
			};
			if(minelvl == 20){
				document.getElementById('mine').setAttribute('src', 'https://1.pixiecdn.com/sprites/231185/original.png');
				document.getElementById("minetype").innerHTML = "Meteorite value is 20";
			};
			};
};
function upgradeautominercount(){
			if(coins >= autominerupgradeprice){
			coins = coins - autominerupgradeprice;
			document.getElementById("coincount").innerHTML = "$" + coins;
			autominercount = autominercount + 1;
			document.getElementById("autominercount").innerHTML = " " + autominercount;
			var autominerupgradeprice1 = autominerupgradeprice * 1.2;
			autominerupgradeprice = Math.round(autominerupgradeprice1);
			document.getElementById("upgradebutton2").innerHTML = "Upgrade Auto Miner Count for $" + autominerupgradeprice;
			coinspersec1 = 1 + coinAdd;
			coinspersec2 = coinspersec1 * autominercount;
			coinspersec = coinspersec2 * 20;
			document.getElementById("coinpersec").innerHTML = "$" + coinspersec + " per sec";
			if(autominercount == 1){
			setInterval(automine, 50);
			};
			};
};

function upgradepicklvl(){
			if(coins >= upgradepicklvlprice){
			coins = coins - upgradepicklvlprice;
			document.getElementById("coincount").innerHTML = "$" + coins;
			picklvl = picklvl + 1;
			coinAdd = coinAdd + 1;
			document.getElementById("picklvl1").innerHTML = " " + picklvl;
			var upgradepicklvlprice1 = upgradepicklvlprice * 2.8;
			upgradepicklvlprice = Math.round(upgradepicklvlprice1);
			document.getElementById("upgradebutton3").innerHTML = "Upgrade Pickaxe Level For $" + upgradepicklvlprice;
			};
};
function mine(){
	coins = coins + 1 + coinAdd;		
	document.getElementById("coincount").innerHTML = "$" + coins;
};
function automine(){
			coins = coins + 1 + coinAdd * autominercount;
			document.getElementById("coincount").innerHTML = "$" + coins;
};
setInterval(rarey, 60000);
function rarey(){
	if (Math.random() * 100 > 60) {
 		 coins = coins + 1 + coinAdd * 50;
	document.getElementById("coinpersec").innerHTML = "RARE!!";
	setTimeout(unrarey, 800);
};
	
};
function unrarey(){
	document.getElementById("coinpersec").innerHTML = "$" + coinspersec + " per sec";
};
function savegame(){
	document.cookie = "ccoins=" + coins +"; path=/; cminelvl=" + minelvl +"; cpicklvl=" + picklvl +"; cupgradepicklvlprice=" + cupgradepicklvlprice +"; ccoinAdd=" + coinAdd +"; cmineupgradeprice=" + mineupgradeprice +"; cautominerupgradeprice=" + autominerupgradeprice +"; cautominercount=" + autominercount +"; ccoinspersec=" + coinspersec +"; ccoinspersec1=" + coinspersec1 +"; expires=Thu, 01 Jan 2300 00:00:00 GMT";	
	
};
