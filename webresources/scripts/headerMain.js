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
		
		if(window.innerWidth >= 900){
			// Desktop Version

			Header.innerHTML = "<div id='headerBar'></div><div id='ttdMenu'></div><div id='moreMenu'></div><div id='ttdHide' onclick='hideTTD();' onmouseover='hideTTD();'></div> <div id='moreHide' onclick='hideMore();' onmouseover='hideMore();'></div> <div id='headerSpacer'></div>";

			let headBar = document.getElementById("headerBar");
			headBar.innerHTML = "";
			
			headBar.innerHTML = "<img id='headerBarLogo' src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/gcResortLogoRemade.png' onclick='funcGoToHome();'>";
			headBar.innerHTML += "<button id='headerBarTP' onmouseover='hideTTD();hideMore();' onclick='window.open(" + tpssLink + ")'>Tickets and Passes</button>  <button class='headerBarButton' onclick='showMore()' onmouseover='showMore()'>More &#9661;</button>";
			headBar.innerHTML += "<button class='headerBarButton' onmouseover='hideTTD();hideMore();' onclick='window.open(" + eventsLink + ")'>Special Events</button>";
			headBar.innerHTML += "<button class='headerBarButton' onmouseover='hideTTD();hideMore();' onclick='window.open(" + hotelsLink + ")'>Hotels and Resorts</button>";
			headBar.innerHTML += "<button class='headerBarButton' onclick='showTTD()' onmouseover='showTTD()' id='ttdBtnH'>Things to Do &#9661;</button>";

			decorateHeaderBar();
														
		}//end of if statemement
		else{
			
			console.log('Mini Header 1'); 
			createMiniHeader();
			
			
		}//end of else statemement
		
	}

	window.onresize = function(){initializeHeader();};

//---------------------------------------------------------------------------------------------------------------------------------- FOOTER SETUP
	function createFooter(){
		footBar.innerHTML = "<div class='spacer'></div>";

		footBar.innerHTML += "<div class='spacer'></div> \
				     <div class='container' style='text-align:center;line-height:2;'> \
				     <b>Get in Touch</b> <br> (312) 988 1000 <br> <a href='mailto: globecityparksandresorts@gmail.com'>guestservices.gcrh@gcpr.net</a> </div>";
		
		footBar.innerHTML += "<div class='spacer'></div> \
			              <div style='text-align:center'> <br> \
			              <img src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/gcprGrayLogo.png' style='width:300px;height:auto;margin:auto;'> \
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

	function decorateHeaderBar(){

		console.log("Checking for Header Decorations -> curDate = " + curDate);

		let headBar = document.getElementById("headerBar");
		
		if(curDate == 5){
			document.getElementById("headerBarLogo").src = "https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/GCRESORT-PrideLogo.png";
			console.log('HAPPY PRIDE!!'); 
		}
		// If september or october set headerto halloween color scheme
		else if(curDate == 8 || curDate == 9 ){

			headBar.style.background = "url('https://gcparksandresorts.github.io/gcresorthighland/webresources/images/spookyGradient.jpg')";
			headBar.style.backgroundSize = "cover";
			headBar.style.backgroundRepeat = "no-repeat";
			headBar.style.backgroundPosition = "center";

			console.log("Header Set For Halloween");
 		}
		// If november or december set headerto SOL color scheme
		else if(curDate == 10 || curDate == 11 ){

			headBar.style.background = "url('https://gcparksandresorts.github.io/gcresorthighland/webresources/images/solbkg01.jpg')";
			headBar.style.backgroundSize = "cover";
			headBar.style.backgroundRepeat = "no-repeat";
			headBar.style.backgroundPosition = "center";

			console.log("Header Set For Halloween");
 		}
	}


//---------------------------------------------------------------------------------------------------------------------------------- PAGE LOADING FUNCTIONS 
  	function funcGoToHome(){window.open("https://gcparksandresorts.github.io/gcresorthighland","_self");}
  
  	function endLoadingInit(){
  		document.getElementById('loader').style.display = 'none';
  	}

	function showTTD(){

		document.getElementById("moreMenu").style.display='none'; document.getElementById("moreHide").style.display='none';
		
		const ttdManu = document.getElementById("ttdMenu");

		//document.getElementById("ttdBtnH").style.background = "#efefef";
		

		const aplnk = '"https://gcparksandresorts.github.io/gcresorthighland/destinations/adventure-park", "_self"';
		const cslnk = '"https://gcparksandresorts.github.io/gcresorthighland/destinations/city-shop", "_self"';
		const aelnk = '"https://gcparksandresorts.github.io/gcresorthighland/attractions", "_self"';
		const dilnk = '"https://gcparksandresorts.github.io/gcresorthighland/dining", "_self"';
		const shlnk = '"https://gcparksandresorts.github.io/gcresorthighland/shopping", "_self"';

		ttdManu.innerHTML = "<button class='ttdParkIcon' id='ttdAP' onclick='window.open(" + aplnk + ")'>Adventure Park</button>";
		ttdManu.innerHTML += "<button class='ttdParkIcon' id='ttdCS' onclick='window.open(" + cslnk + ")'>City-Shop</button>";
		ttdManu.innerHTML += "<button class='ttdButton' onclick='window.open(" + aelnk + ")'>Attractions and Entertainment</button>";
		ttdManu.innerHTML += "<button class='ttdButton' onclick='window.open(" + dilnk + ")'>Resturaunts and Dining</button>";
		ttdManu.innerHTML += "<button class='ttdButton' onclick='window.open(" + shlnk + ")'>Shopping</button>";
		
		document.getElementById("ttdHide").style.display='block';

		ttdManu.style.display = 'block';
		
	}

	function hideTTD(){const ttdManu = document.getElementById("ttdMenu"); ttdManu.style.display = 'none'; document.getElementById("ttdHide").style.display='none';}

	function showMore(){

		document.getElementById("ttdMenu").style.display = 'none'; document.getElementById("ttdHide").style.display='none';
		
		const moreManu = document.getElementById("moreMenu");

		const inflnk = '"https://gcparksandresorts.github.io/gcresorthighland/information/resort-schedule", "_self"';
		const vplnk = '"https://gcparksandresorts.github.io/gcresorthighland/tickets/gcvip", "_self"';
		const apslnk = '"https://gcparksandresorts.github.io/gcresorthighland/tickets/annual-passports", "_self"';
		const morelnk2 = '"https://gcparksandresorts.github.io/gcresorthighland/information/about", "_self"';
		const morelnk3 = '"https://gcparksandresorts.github.io/gcresorthighland/information/safety-guidelines", "_self"';

		moreManu.innerHTML = "<button class='moreBtn' onclick='window.open(" + inflnk + ")'>Resort Hours and Information</button>";
		moreManu.innerHTML += "<button class='moreBtn' onclick='window.open(" + vplnk + ")'>GC VIP Admission</button>";
		moreManu.innerHTML += "<button class='moreBtn' onclick='window.open(" + apslnk + ")'>Annual Passports</button>";
		moreManu.innerHTML += "<button class='moreBtn' onclick='window.open(" + morelnk2 + ")'>About Us</button>";
		moreManu.innerHTML += "<button class='moreBtn' onclick='window.open(" + morelnk3 + ")'>Safety Guidelines</button>";

		moreManu.style.display = 'block';

		document.getElementById("moreHide").style.display='block';
	}

	function hideMore(){document.getElementById("moreMenu").style.display='none'; document.getElementById("moreHide").style.display='none';}

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
