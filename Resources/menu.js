var activity = Ti.Android.currentActivity;

activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
	var kalitatea = menu.add({title:'Kalitatea',icon:'ic_menu_preferences.png'});
	var about = menu.add({title:'Honi Buruz',icon:'ic_menu_info_details.png'});
	var exit = menu.add({ title: "Irten",icon: 'ic_menu_close_clear_cancel.png'});
	kalitatea.setIcon("ic_menu_preferences.png");
	about.setIcon("ic_menu_info_details.png");
    exit.setIcon("ic_menu_close_clear_cancel.png");
	about.addEventListener("click", function(e) {
			var alertDialog = Titanium.UI.createAlertDialog({
				title: 'Info7 irratia',
				message: '2011 Mikel Olasagasti Uranga\nmikel@olasagasti.info\n\nInfo7 irratia entzuteko aplikazioa\n\n0.2.1 bertsioa\n\nIrudiak: Mikel Plaza',
				buttonNames: ['OK']
			});
		alertDialog.show();
    });
	
	exit.addEventListener('click', function(){
		Titanium.UI.currentWindow.close();
	});
	
	kalitatea.addEventListener('click', function(){
		dialog.show();
	});
};

//options:['Baxua', 'Ertaina', 'Altua'],
// altua ez dabil aacp audio moetagatik
var dialog = Titanium.UI.createOptionDialog({
	options:['Baxua', 'Ertaina'],
	destructive:2,
	cancel:1,
	title:'Kalitatea aukeratu'
});

// add event listener
dialog.addEventListener('click',function(e)
{
	Ti.API.info("Aukera: "+e.index);
	Titanium.App.Properties.setString("kalitatea",e.index);
	Titanium.App.Properties.fireEvent('urlChange', {index:e.index});
});