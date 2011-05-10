//var win = Titanium.UI.currentWindow;
var win = Titanium.UI.createWindow({title:'Info7 Irratia',backgroundImage:'default.png',backgroundColor:'#E08726',fullscreen: true,url: 'menu.js', exitOnClose: true,navBarHidden: true});
var kalitatea = Titanium.App.Properties.getString("kalitatea");
var url= "";

function getUrl(kalitatea){
	switch(kalitatea){
		case 0:
			url="http://mp3.live.tv-radio.com/info7/all/info7-32k.mp3";
			break;
		case 1:
			url="http://mp3.live.tv-radio.com/info7/all/info7-64k.mp3";
			break;
		case 2:
			url="http://mp3.live.tv-radio.com/info7/all/info7-128k.mp3";
			break;
		default:
			url="http://mp3.live.tv-radio.com/info7/all/info7-64k.mp3";
	}
	return url;
}

url = getUrl(kalitatea);

Ti.API.info("Kalitatea: "+kalitatea);

var audio = Titanium.Media.createAudioPlayer({url:url,preload:false});
createEvents();

var audioStatus = Titanium.UI.createLabel({color:'#FFF',text:'',font:{fontSize:20,fontFamily:'Helvetica Neue'},textAlign:'center',	width:'auto',left:118,top:255});

var kaxa = Titanium.UI.createLabel({backgroundImage: 'kuadroa.png', height:111,width:190,left:65,top:173});
var play = Titanium.UI.createLabel({backgroundImage: 'play.png', height:64,width:64,left:90,top:183});
var stop = Titanium.UI.createLabel({backgroundImage: 'stop.png', height:64,width:64,left:168,top:183});

play.addEventListener('click', function()
{	
	Ti.API.info("Play sakatuta");
	audioStatus.text="Kargatzen";
	audio.play();
	
});


stop.addEventListener('click', function()
{
	Ti.API.info("Stop sakatuta");
	audioStatus.text="Gelditzen";
	audio.stop();
	
});

Ti.App.Properties.addEventListener('urlChange', function(data){
	Ti.API.info("urlChange fired");
	audio.stop();
	audio = Titanium.Media.createAudioPlayer({url:url,preload:false});
	createEvents();
	audio.start();
});

function createEvents(){
	audio.addEventListener('change', function(e)
	{
		egoerak(e.state);
	});

	audio.addEventListener('progress', function(e)
	{
		egoerak(e.state);
	});
}


function egoerak(egoera){
	switch(egoera){
		case 0:
			audioStatus.text="Kargatzen";
			break;
		case 1:
			audioStatus.text="Abiarazten";
			break;
		case 2:
			audioStatus.text="Pausatua";
			break;
		case 3:
		  audioStatus.text="Entzuten";
		  break;
		case 4:
			audioStatus.text="Abiarazten";
			break;
		case 5:
		  audioStatus.text="Geldituta";
		  break;
		case 5:
		  audioStatus.text="Gelditzen";
		  break;
		default:
			//audioStatus.text="Ezezaguna " + egoera;
	}
}

win.add(kaxa);
win.add(play);
win.add(stop);
win.add(audioStatus);
win.open();