//vert_slider

let anchor;

$(document).ready(function() {
	$("a").on("click", function(e) {
		e.preventDefault();
		anchor = $(this).attr("href");
		console.log($(anchor));
		console.log(anchor);
		$(".dot-ul a").removeClass("active");
		$(this).addClass("active");
		console.log('hello');
		$("html, body").animate(
			{
				scrollTop: $(anchor).offset().top
			},
			1000
		);
	});

	// init controller
	let controller = new ScrollMagic.Controller({addIndicators: false,
		globalSceneOptions: { duration: "100%" }
	});

	new ScrollMagic.Scene({ triggerElement: "#header" })
		.setClassToggle("#first", "active")
		.addTo(controller);
	new ScrollMagic.Scene({ triggerElement: "#project" })
		.setClassToggle("#second", "active")
		.addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#news" })
		.setClassToggle("#third", "active")
		.addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#gallery" })
		.setClassToggle("#fourth", "active")
		.addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#contact" })
		.setClassToggle("#fifth", "active")
		.addTo(controller);
});

$('.slider-news').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
	dots: true,
	variableWidth: true,
	centerMode: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        //arrows: true,
        //slidesToScroll: 1,
        slidesToShow: 1,
        //dots: false,
      }
    },
  ]
});

//burger-menu
let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
//end burger-menu

//include G-maps

const styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "saturation": -15
      },
      {
        "lightness": -5
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text",
    "stylers": [
      {
        "saturation": 20
      },
      {
        "lightness": 75
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      },
      {
        "saturation": -20
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

let map;

function initMap() {
  const markerPoint = { lat: 40.681292161043345, lng: -73.94362608999357 }
	map = new google.maps.Map(document.getElementById("map"), {
    center: markerPoint,
    zoom: 14,
		styles: styles,
  });

	const image = "img/Pin.png"

	new google.maps.Marker({
    position: markerPoint,
    map,
    title: "Hello in Brooklyn",
		icon: image,
  });
}

window.initMap = initMap;