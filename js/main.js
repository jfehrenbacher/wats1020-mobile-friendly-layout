var mymap = L.map('mapid').setView([47.6097, 122.3331], 13);

/* L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(mymap); */


// Text box pop up
 function dynInput(cbox) {
  if (cbox.checked) {
    var input = document.createElement("input");
    input.type = "text";
	input.id = cbox.value;
	input.placeholder = input.id;
    var div = document.createElement("div");
    div.id = cbox.name;
    div.appendChild(input);
    document.getElementById("insertinputs").appendChild(div);
  } else {
    document.getElementById(cbox.name).remove();
  }
}

function capHillExplore() {
	$('#venuename').html("Neumos");
	$('#venuevideo').attr('src', 'https://www.youtube.com/embed/G_pMo1Hcn1I');
	$('#calendarlink').attr('href', 'http://neumos.com/events/');
}

function fremontExplore() {
	$('#venuename').html("The Fremont Abbey");
	$('#venuevideo').attr('src', 'https://www.youtube.com/embed/GdKPXYhIXF4');
	$('#calendarlink').attr('href', 'http://fremontabbey.org/events/');
}

function ballardExplore() {
	$('#venuename').html("Tractor Tavern");
	$('#venuevideo').attr('src', 'https://www.youtube.com/embed/Dfpgn7lVq90');
	$('#calendarlink').attr('href', 'http://www.tractortavern.com/');
}

function universityDistrictExplore() {
	$('#venuename').html("The Neptune");
	$('#venuevideo').attr('src', 'https://www.youtube.com/embed/EHK6114k3DM');
	$('#calendarlink').attr('href', 'http://www.stgpresents.org/neptune/calendar');
}

function downtownExplore() {
	$('#venuename').html("The Crocodile");
	$('#venuevideo').attr('src', 'https://www.youtube.com/embed/C_uHGj-Z9-A');
	$('#calendarlink').attr('href', 'http://www.thecrocodile.com/calendar/');
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
	var dt = ($('input.universitydistrict:checked').length);
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
		capHillExplore();
	} else if (smallest == fre) {
		$('.dropval').val('1');
		console.log("You Should Explore Fremont");
		fremontExplore();
	} else if (smallest == bal) {
		$('.dropval').val('2');
		console.log("You Should Explore Ballard");
		ballardExplore();
	} else if (smallest == ud) {
		$('.dropval').val('3');
		console.log("You Should Explore the University District");
		universityDistrictExplore();
	} else if (smallest == dt) {
		$('dropval').val('4');
		console.log("You Should Explore Downtown");
		downtownExplore();
	}
}
