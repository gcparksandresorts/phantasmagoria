const $heading = document.getElementById("spotlightHeading");
const $content = document.getElementById("spotlightContent");
const $image = document.getElementById("spotlightImage");
const click_link = document.getElementById("click_link");

var head;
var cont;
var imgLink;
var link;

function runSpotlight(){
	let ran_number = Math.floor(Math.random() * 8);

	console.log("Random Number: "+ran_number);

	switch(ran_number){
		case 0:
			head = "Ride Spotlight: Dr. Frankenstein's Drop of Doom";
			cont = "Mwa-ha-ha-ha! Can you handle the power of the Park’s tallest, steepest, and fastest drop? Dr. Frankenstein is looking for test subjects for his most high voltage experiment yet.";
			imgLink = "https://gcparksandresorts.github.io/phantasmagoria/webresources/images/Drop%20of%20Doom%20Sign%20Night.png";
			link = "things-to-do/attractions/drop-of-doom";
			break;
		case 1:
			head = "Ride Spotlight: Hackenslash Ski Lift";
			cont = "Take a relaxing ride over the mountains of Camp Hackenslash, enjoying the scenic views of Trick ‘r’ Treat Hollow.";
			imgLink = "webresources/images/skiLift2.jpg";
			link = "things-to-do/attractions/hackenslash-skilift";
			break;
		case 2:
			head = "Ride Spotlight: Mushroom Canyon Mining Co";
			cont = "Thrillseekers can take a ride down the mountainside and into the mines of the Mushroom Canyon Caves on this intense swinging mine train roller coaster.";
			imgLink = "webresources/images/mushroom-mining-co";
			link = "things-to-do/attractions/mushroomCanyon3.jpg";
			break;
		case 3:
			head = "Ride Spotlight: Halloween Party Trail";
			cont = "Help the Cat deliver Halloween party invitations to all your favorite Phantasmagoria friends on this all ages outdoor & indoor dark ride.";
			imgLink = "webresources/images/halloweenParty2.jpg";
			link = "things-to-do/attractions/halloween-party-trail";
			break;
		case 4:
			head = "Ride Spotlight: ride_name";
			cont = "ride_description";
			imgLink = "webresources/images/ride_img_link";
			link = "things-to-do/attractions/attraction_link";
			break;
		case 5:
			head = "Ride Spotlight: Spirit House";
			cont = "The Fortune Teller has opened her happily haunted home for Harvest Festival, but beware her seance may have opened a path to a world beyond the grave. Enjoy the ethereal scenery on this spinning haunted house dark ride.";
			imgLink = "webresources/images/spirit1.jpg";
			link = "things-to-do/attractions/spirit-house";
			break;
		case 6:
			head = "Ride Spotlight: Journey to the Temple of Cthulhu";
			cont = "Weigh anchor! We’re shipping off from Innsmouth Isle and exploring what lies in the mysterious depths below, but beware- locals say Cthulhu may be stirring from within his ancient prison..Are you ready to take the plunge?";
			imgLink = "webresources/images/temple2.jpg";
			link = "things-to-do/attractions/temple-of-cthulu";
			break;
		case 7:
			head = "Ride Spotlight: The Bat";
			cont = "Get ready to spread your wings and take flight over Phantasmagoria as you plunge through batcaves and soar beyond the rooftops of Vampire Village on this thrilling flying coaster.";
			imgLink = "webresources/images/theBat1.jpg";
			link = "things-to-do/attractions/the-bat";
			break;
		default:
			head = "Ride Spotlight: ride_name";
			cont = "ride_description";
			imgLink = "webresources/images/ride_img_link";
			link = "things-to-do/attractions/attraction_link";
			break;
	}// end of switch statement

	$heading.innerHTML = head;
	$content.innerHTML = cont;
	$image.src = imgLink;
	click_link.href = link;
	
}
