// Get the root element
var r = document.querySelector(':root');

function darkModeOn(){
	window.localStorage.setItem("darkmode", "1");
	console.log("darkmode")
	console.log(window.localStorage.getItem("darkmode"))	
}

function darkModeOff(){
	window.localStorage.setItem("darkmode", "0");
	console.log("lightmode")
	console.log(window.localStorage.getItem("darkmode"))
}

function darkModeSet(){
	// Get the styles (properties and values) for the root
	var r = document.querySelector(':root');
	// Set the value to Darkmode
	  r.style.setProperty('--bg-color', '#202739');	
	  r.style.setProperty('--txt-color', '#E1DBD2');	
	  r.style.setProperty('--boxContainer-color', '#2D364A');	
	  r.style.setProperty('--border-color', '#1C212F');	
	  r.style.setProperty('--accent-bg', '#0D1324');	
	  r.style.setProperty('--link-txt-color', 'lightblue');	

}

function darkModeRemove(){
	// Get the styles (properties and values) for the root
	var r = document.querySelector(':root');

	// Set the value to Lightmode	  	
	  r.style.setProperty('--bg-color', '#fbf8f3');	
	  r.style.setProperty('--txt-color', 'black');	
	  r.style.setProperty('--boxContainer-color', '#fffdf8');	
	  r.style.setProperty('--border-color', '#d3d1cc');	
	  r.style.setProperty('--accent-bg', '#102520');	
	  r.style.setProperty('--link-txt-color', 'darkgreen');	

}

function darkModeControl(){
	console.log("hallo")
	window.localStorage.setItem("darkmode", "0")
	console.log(window.localStorage.getItem("darkmode"))
	if (window.localStorage.getItem("darkmode").localeCompare("1") == 0) {
		darkModeSet();
	} else if (window.localStorage.getItem("darkmode").localeCompare("0") == 0 ){
		darkModeRemove();
	}
	else{
		darkModeOff();
	}
}

function darkModeSwitch(){
	console.log("hello")
	console.log(window.localStorage.getItem("darkmode"))

	if (window.localStorage.getItem("darkmode").localeCompare("1") == 0) {
		darkModeOff();
		darkModeRemove();
	} else if (window.localStorage.getItem("darkmode").localeCompare("0") == 0 ){
		darkModeOn();
		darkModeSet();
	}
}

