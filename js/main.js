
// Text box pop up
// function dynInput(cbox) {
// 	if (cbox.checked) {
// 		var input = document.createElement("input");
// 		input.type = "text";
// 		input.id = cbox.value;
// 		input.placeholder = input.id;
// 		var div = document.createElement("div");
// 		div.id = cbox.name;
// 		div.appendChild(input);
// 		document.getElementById("insertinputs").appendChild(div);
// 	} else {
// 		document.getElementById(cbox.name).remove();
// 	}
// }

function capHillExplore() {
	$('#venuename').html("Neumos");
	$('#venuevideo').attr('src', 'https://www.youtube.com/embed/G_pMo1Hcn1I');
	$('#calendarlink').attr('href', 'http://neumos.com/events/');
	newLocation(47.6139, -122.3196);
	$('#directions').attr('value', '925 E Pike St, Seattle, WA 98122');
}

function fremontExplore() {
	$('#venuename').html("The Fremont Abbey");
	$('#venuevideo').attr('src', 'https://www.youtube.com/embed/GdKPXYhIXF4');
	$('#calendarlink').attr('href', 'http://fremontabbey.org/events/');
	newLocation(47.6591888, -122.34968220000002);
	$('#directions').attr('value', '4272 Fremont Ave N, Seattle, WA 98103');
}

function ballardExplore() {
	$('#venuename').html("Tractor Tavern");
	$('#venuevideo').attr('src', 'https://www.youtube.com/embed/Dfpgn7lVq90');
	$('#calendarlink').attr('href', 'http://www.tractortavern.com/');
	newLocation(47.6658, -122.3827);
	$('#directions').attr('value', '5213 Ballard Ave NW, Seattle, WA 98107');
}

function universityDistrictExplore() {
	$('#venuename').html("The Neptune");
	$('#venuevideo').attr('src', 'https://www.youtube.com/embed/EHK6114k3DM');
	$('#calendarlink').attr('href', 'http://www.stgpresents.org/neptune/calendar');
	newLocation(47.66117089999999, -122.31401599999998);
	$('#directions').attr('value', '1303 NE 45th St, Seattle, WA 98105');
}

function downtownExplore() {
	$('#venuename').html("The Crocodile");
	$('#venuevideo').attr('src', 'https://www.youtube.com/embed/C_uHGj-Z9-A');
	$('#calendarlink').attr('href', 'http://www.thecrocodile.com/calendar/');
	newLocation(47.61359340000001, -122.3443024);
	$('#directions').attr('value', '2200 2nd Ave, Seattle, WA 98121');
}





function classCount() {
	var cap = ($('input.capitolhill:checked').length);
	console.log("Capitol Hill Venues: " + cap);
	var fre = ($('input.fremont:checked').length);
	console.log("Fremont Venues: " + fre);
	var bal = ($('input.ballard:checked').length);
	console.log("Ballard Venues: " + bal);
	var ud = ($('input.universitydistrict:checked').length);
	console.log("University District Venues: " + ud);
	var dt = ($('input.downtown:checked').length);
	console.log("Downtown Venues: " + dt);

	var neighborhoodarray = [cap, fre, bal, ud, dt];
	console.log(neighborhoodarray);
	var largest = Math.max.apply(Math, neighborhoodarray);
	console.log(largest);
	var smallest = Math.min.apply(Math, neighborhoodarray);
	console.log(smallest);

	if (largest == cap) {
		$('.favoritehood').html("Capitol Hill");
		console.log("Your Favorite Neighborhood is Capitol Hill");
	} else if (largest == fre) {
		$('.favoritehood').html("Fremont");
		console.log("Your Favorite Neighborhood is Fremont");
	} else if (largest == bal) {
		$('.favoritehood').html("Ballard");
		console.log("Your Favorite Neighborhood is Ballard");
	} else if (largest == ud) {
		$('.favoritehood').html("University District");
		console.log("Your Favorite Neighborhood is the University District");
	} else if (largest == dt) {
		$('.favoritehood').html("Downtown");
		console.log("Your Favorite Neighborhood is Downtown");
	}


	if (smallest == cap) {
		$('.dropval').val('4');
		console.log("You Should Explore Capitol Hill");
		$('.explorehood').html("Capitol Hill");
		capHillExplore();
	} else if (smallest == fre) {
		$('.dropval').val('1');
		console.log("You Should Explore Fremont");
		$('.explorehood').html("Fremont");
		fremontExplore();
	} else if (smallest == bal) {
		$('.dropval').val('2');
		console.log("You Should Explore Ballard");
		$('.explorehood').html("Ballard");
		ballardExplore();
	} else if (smallest == ud) {
		$('.dropval').val('3');
		console.log("You Should Explore the University District");
		$('.explorehood').html("University District");
		universityDistrictExplore();
	} else if (smallest == dt) {
		$('dropval').val('4');
		console.log("You Should Explore Downtown");
		$('.explorehood').html("Downtown");
		downtownExplore();
	}
}
$('.dropval').change(function() {
	$(this).val();
	var fredrop = $('#fredrop');
	var baldrop = $('#baldrop');
	var uddrop = $('#uddrop');
	var capdrop = $('#capdrop');
	var dtdrop = $('dtdrop');
	if ($(this).val() == 1) {
		fremontExplore();
	} else if ($(this).val() == 2) {
		ballardExplore();
	} else if ($(this).val() == 3) {
		universityDistrictExplore();
	} else if ($(this).val() == 4) {
		capHillExplore();
	} else if ($(this).val() == 5) {
		downtownExplore();
	}
});
// Google Map
var myCenter = new google.maps.LatLng(47.613843, -122.31971599999997);
var abbeyCenter = new google.maps.LatLng(47.6592, -122.3499);
var tractorCenter = new google.maps.LatLng(47.6658, -122.3827);
var neptuneCenter = new google.maps.LatLng(47.66117089999999, -122.31401599999998);
var crocodileCenter = new google.maps.LatLng(47.61359340000001, -122.3443024);
var map;

function initialize() {
	var mapProp = {
		center: myCenter,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// Neumos
	var neumosWindow = new google.maps.InfoWindow({
    content: "Neumos, 925 E Pike St, Seattle, WA 98122"
  });
	
	var neumosMarker = new google.maps.Marker({
    position: myCenter,
    map: map,
  });
	neumosMarker.addListener('click', function() {
    neumosWindow.open(map, neumosMarker);
  });
	neumosWindow.open(map,neumosMarker);
// Abbey
	var abbeyWindow = new google.maps.InfoWindow({
		content: "Fremont Abbey Arts Center, 4272 Fremont Ave N, Seattle, WA 98103"
	});
	
	var abbeyMarker = new google.maps.Marker({
		position: abbeyCenter,
		map: map,
	});
	abbeyMarker.addListener('click', function() {
		abbeyWindow.open(map, abbeyMarker);
	});
	abbeyWindow.open(map,abbeyMarker);
// Tractor
	var tractorWindow = new google.maps.InfoWindow({
		content: "Tractor Tavern, 5213 Ballard Ave NW, Seattle, WA 98107"
	});
	var tractorMarker = new google.maps.Marker({
		position: tractorCenter,
		map: map,
	});
	tractorWindow.open(map,tractorMarker);
// Neptune
	var  neptuneWindow = new google.maps.InfoWindow({
		content: "The Neptune, 1303 NE 45th St, Seattle, WA 98105"
	});
	var neptuneMarker = new google.maps.Marker({
		position: neptuneCenter,
		map: map,
	});
	neptuneWindow.open(map,neptuneMarker);
// Crocodile
	var crocodileWindow = new google.maps.InfoWindow({
		content: "The Crocodile, 2200 2nd Ave, Seattle, WA 98121"
	});
	var crocodileMarker = new google.maps.Marker({
		position: crocodileCenter,
		map:map,
	});
	crocodileWindow.open(map,crocodileMarker);
}

function newLocation(newLat, newLng) {
	map.setCenter({
		lat: newLat,
		lng: newLng
	});
}
$("#submit").click(function() {
    $('html,body').animate({
        scrollTop: $("#submit").offset().top},
        'slow');
});


google.maps.event.addDomListener(window, 'load', initialize);