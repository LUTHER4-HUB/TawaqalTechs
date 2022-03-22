var state_arr = new Array("Mombasa", "Kwale", "Kilifi", "Tana river", "Lamu", "Taita-Taveta", "Garissa", "Wajir", "Mandera", "Marsabit", "Isiolo", "Meru", "Tharaka-Nithi", "Embu", "Kitui", "Machakos", "Makueni", "Nyandarua", "Nyeri", "Kirinyaga", "Murang'a", "Kiambu", "Turkana", "West Pokot", "Samburu", "Trans Nzoia", "Uasin Gishu", "Elgeyo-Marakwet", "Nandi", "Baringo", "Laikipia", "Nakuru", "Narok", "Kajiado", "Kericho", "Bomet", "Kakamega", "Vihiga", "Bungoma", "Busia", "Siaya", "Kisumu", "Homa Bay", "Migori", "Kisii", "Nyamira", "Nairobi");

var s_a = new Array();
s_a[0]="";
s_a[1]=" Mombasa town | Kisauni | Likoni | Changamwe | Jomvu |  | Mvita | Nyali ";
s_a[2]=" Kwale Town| Kinango | Lunga Lunga | Msambweni | Matuga | Kinangop ";
s_a[3]=" Kilifi Town | Ganze | Malindi | Rabai | Kaloleni | Mariakani | Takaungu ";
s_a[4]=" Hola Town |  | Galole | Garsen | Bura | Godhana Dhadho Gaddae ";
s_a[5]=" Lamu ";
s_a[6]=" Mwatete | Bura | Voi | Taveta | Wundanyi | Mwatete";
s_a[7]=" Garissa Town | Fafi | Lagdera | Balambala ";
s_a[8]=" Tarbaj | Wajir Town ";
s_a[9]=" Mandera Town | Lafey ";
s_a[10]=" Marsabit Town | Moyale Town | Laisamis | Saku | North Horr ";
s_a[11]=" Isiolo Town | Isiolo North | Isiolo South";
s_a[12]=" Maua | Kanuni | Igembe | Tigana | Mikinduri";
s_a[13]=" Chuka | Tharaka | Nithi ";
s_a[14]=" Embu Town ";
s_a[15]=" Kitui ";
s_a[16]=" Machakos ";
s_a[17]=" Makueni ";
s_a[18]=" Nyandarua ";
s_a[19]=" Nyeri ";
s_a[20]=" Mwea ";
s_a[21]=" Kiharu ";
s_a[22]=" Juja | Kiambu ";
s_a[23]=" Turkana ";
s_a[24]=" Pokot ";
s_a[25]=" Samburu ";
s_a[26]=" Trans Nzoia ";
s_a[27]=" Uasin Gishu ";
s_a[28]=" Marakwet ";
s_a[29]=" Kapsabet | Eldoret ";
s_a[30]=" Baringo ";
s_a[31]=" Laikipia ";
s_a[32]=" Nakuru ";
s_a[33]=" Narok ";
s_a[34]=" Kajiado ";
s_a[35]=" Kericho ";
s_a[36]=" Bomet ";
s_a[37]=" Kakamega | Mumias | Khuisero | Butere";
s_a[38]=" Majengo | Luanda";
s_a[39]=" Bungoma ";
s_a[40]=" Busia ";
s_a[41]=" Siaya ";
s_a[42]=" Kisumu ";
s_a[43]=" Homa Bay ";
s_a[44]=" Migori ";
s_a[45]=" Kisii ";
s_a[46]=" Nyamira ";
s_a[47]=" Nairobi ";

function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}
