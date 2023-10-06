//---------------------------------------------------------------------------------------------------------------------------------- VARIABLES AND INITIALIZATION
  	const Header = document.getElementById("header");
	const footBar = document.getElementById("footer");

	function runHeaderSetup(){
		Header.innerHTML = "";
		
		createFooter();
		initializeHeader();
	}

	

//---------------------------------------------------------------------------------------------------------------------------------- HEADER SETUP
	
	function initializeHeader(){
		console.log('resizing header'); 
		
		if(window.innerWidth >= 675){
			// Desktop Version

			Header.innerHTML = "<div id='headerBar'></div><div id='headerSpacer'></div>";

			let headBar = document.getElementById("headerBar");
			headBar.innerHTML = "";
			
			headBar.innerHTML = "<img id='headerBarLogo' src='https://gcparksandresorts.github.io/phantasmagoria/webresources/images/logos/PhantasmagoriaLogo1.png' onclick='funcGoToHome();'>";
			headBar.innerHTML += "<br>";
			headBar.innerHTML += "<a class='headerBarButton' href='https://gcparksandresorts.github.io/phantasmagoria/tickets'>Tickets and Passes</a>";
			headBar.innerHTML += "<a class='headerBarButton' onhover=''>Things to Do</a>";
			headBar.innerHTML += "<a class='headerBarButton' href='https://gcparksandresorts.github.io/phantasmagoria/hotels'>Hotels</a>";
			headBar.innerHTML += "<a class='headerBarButton' onhover=''>Information</a>";
			
						
		}//end of if statemement
		else{
			
			console.log('Mini Header 1'); 
			createMiniHeader();
			
			
		}//end of else statemement
		
	}

	window.onresize = function(){initializeHeader();};

//---------------------------------------------------------------------------------------------------------------------------------- FOOTER SETUP
	function createFooter(){
		footBar.classList.add('fullContainer');
		footBar.style.backgroundColor = "#C03C09";

		footBar.innerHTML = "";
		
		footBar.innerHTML += "<div class='container' style='text-align:center;line-height:2; color:white;'> \
				     <b>Get in Touch</b> <br> (312) 732 1000 <br> <a style='color:white;' href='mailto: globecityparksandresorts@gmail.com'>guestservices@phantasmagoria.com</a> </div>";
		
		footBar.innerHTML += "<div class='spacer' style='background:white;'></div> \
			              <div style='text-align:center' onclick='window.open(" + '"https://sites.google.com/view/gcparksandresorts/home", "_self"' + ")'> <br> \
			              <img src='https://gcparksandresorts.github.io/phantasmagoria/webresources/images/logos/gcprMain1.png' style='width:200px;height:auto;margin:auto;cursor:pointer;'> \
			              </div> <br>";
		
		footBar.innerHTML += "<div style='text-align:center'> <p class='disclaimer'>©2023 Globe-City Parks and Resorts LLC.<br></p> \
    				      <a href='https://gcparksandresorts.github.io/gcresorthighland/information/legal'>Privacy Policy</a> | <a href='https://gcparksandresorts.github.io/gcresorthighland/information/legal'>Legal Information</a> | <a href='https://gcparksandresorts.github.io/gcresorthighland/webresources/generators/date-tier-generator.html'>MCBPO</a> | <a>Careers</a> \
    				      <br><br>    </div>";
		
	}

	function createMiniHeader(){ // Mobile Version

			console.log('Mini Header 2');

			Header.innerHTML = "<div id='headerBar'></div> <div id='minimizedHeaderMenu'></div> <div id='miniMenuHider' onclick='runMiniMenu()'></div> <div id='headerSpacer'></div>";

			let headBar = document.getElementById("headerBar");
			headBar.innerHTML = "";	
		
			headBar.innerHTML = "<img id='headerBarLogo' src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/gcResortLogoRemade.png' onclick='funcGoToHome();'>";
			headBar.innerHTML += "<button id='openHeaderMenuMinimized' onclick='runMiniMenu()'>&#8801;</button>";

			
			const La = 'window.open("https://gcparksandresorts.github.io/gcresorthighland/tickets", "_self")';

			const MHM = document.getElementById("minimizedHeaderMenu");
			MHM.innerHTML = "";

			MHM.innerHTML = "<button id='headerBarTP' onclick='" + La + "'>Tickets and Passes</button>";
			MHM.innerHTML += "<a onclick='openMiniMenu(1)'>Things to Do &#9661;</a>";
				MHM.innerHTML += "<div id='ttdMiniMenu' class='i'> \
							<a href='https://gcparksandresorts.github.io/gcresorthighland/destinations/adventure-park'>Adventure Park</a> \
							<a href='https://gcparksandresorts.github.io/gcresorthighland/destinations/city-shop'>City-Shop</a> \
							<a href='https://gcparksandresorts.github.io/gcresorthighland/attractions'>Attractions and Entertainment</a> \
							<a href='https://gcparksandresorts.github.io/gcresorthighland/dining'>Places to Eat</a> \
							<a href='https://gcparksandresorts.github.io/gcresorthighland/shopping'>Shopping</a> </div>";
			MHM.innerHTML += "<a href='https://gcparksandresorts.github.io/gcresorthighland/hotels'>Hotels and Resorts</a>";
			MHM.innerHTML += "<a href='https://gcparksandresorts.github.io/gcresorthighland/events'>Special Events</a>";
			MHM.innerHTML += "<a onclick='openMiniMenu(2)'>More &#9661;</a>";
				MHM.innerHTML += "<div id='mreMiniMenu' class='i'> \
							<a href='https://gcparksandresorts.github.io/gcresorthighland/information/resort-schedule'>Hours and Information</a> \
							<a href='https://gcparksandresorts.github.io/gcresorthighland/tickets/gcvip'>GC VIP Tickets</a> \
							<a href='https://gcparksandresorts.github.io/gcresorthighland/tickets/annual-passports'>Annual Passports</a> \
							<a href='https://gcparksandresorts.github.io/gcresorthighland/information/about'>About Us</a> \
							<a href='https://gcparksandresorts.github.io/gcresorthighland/information/safety-guidelines'>Safety Guidelines</a> </div>";

		console.log('Mini Header 3');
		decorateHeaderBar();
	}



//---------------------------------------------------------------------------------------------------------------------------------- PAGE LOADING FUNCTIONS 
  	function funcGoToHome(){window.open("https://gcparksandresorts.github.io/phantasmagoria","_self");}
  
  	function endLoadingInit(){
  		document.getElementById('loader').style.display = 'none';
  	}


	// -- MINI MENU (MINIMIZED MENU -- 

	function openMiniMenu(num){
        
        	const tmini = document.getElementById("ttdMiniMenu");
            	const mmini = document.getElementById("mreMiniMenu");
            
        	if(num==1){
            	
                if(tmini.style.display == 'block'){
                	tmini.style.display = 'none';
                }else{
                	tmini.style.display = 'block';
                }
                
            }else if(num==2){
            	if(mmini.style.display == 'block'){
                	mmini.style.display = 'none';
                }else{
                	mmini.style.display = 'block';
                }
            }
        }
        
        function runMiniMenu(){
        	const mmm = document.getElementById("minimizedHeaderMenu");
		let hhh = document.getElementById("miniMenuHider");
            
            if(mmm.style.display == 'block'){
           		mmm.style.display = 'none';
		    	hhh.style.display = 'none';
            }else{
            	mmm.style.display = 'block';
		    hhh.style.display = 'block';
            }
            
        }
