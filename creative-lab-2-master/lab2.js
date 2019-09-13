var searchTerm;
$(document).ready(function() {

    $("#title-div").fadeIn(8500);

    $("#romanticButton").click(function(e) {
        console.log("Romantic");
        e.preventDefault();
        generateDate(e, "Romantic");
    });

    $("#casualButton").click(function(e) {
        console.log("Casual");
        e.preventDefault();
        generateDate(e, "Casual");
    });

    $("#groupButton").click(function(e) {
        console.log("Group");
        e.preventDefault();
        generateDate(e, "Group");
    });

    $("#firstButton").click(function(e) {
        console.log("First");
        e.preventDefault();
        generateDate(e, "First");
    });

    $("#adventurousButton").click(function(e) {
        console.log("Adventurous");
        e.preventDefault();
        generateDate(e, "Adventurous");
    });

    function adventurous(e) {
        generateDate(e, "Adventurous");
    }

    function generateDate(e, value) {
        console.log(value);
        e.preventDefault();
        $("#inputedDate").text(value);
        var myurl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=4019d3f847ddf668d0fc9045edfd2f3c&q=provo";
        console.log(myurl);
        $.ajax({
            url: myurl,
            dataType: "json",
            success: function(parsed_json) {
                var location = parsed_json['name'];
                var weather = parsed_json['weather'][0]['main'];
                var temp = parsed_json['main']['temp'];
                var temp_min = parsed_json['main']['temp_min'];
                var temp_max = parsed_json['main']['temp_max'];
                var dateWeather;
                dateWeather = dateWeatherCalc(weather, temp_max);
                searchTerm = determineDate(dateWeather, value);
                console.log(searchTerm);
                call4Square();
            }
        });

        function dateWeatherCalc(weather, temp_max) {
            var dateWeather;
            if ((weather == "Clear") && (temp_max >= 60)) {
                dateWeather = 'good';
            }
            else if ((weather == 'Rain')) {
                dateWeather = 'rainy';
            }
            else if ((weather == "Clear" || weather == "Clouds") && (temp_max < 60)) {
                dateWeather = "cold";
            }
            else {
                dateWeather = "other";
            }
            console.log(dateWeather);
            return dateWeather;
        }

        function determineDate(dateWeather, dateType) {
            var searchTerm;
            if (dateWeather == "good") {
                if (dateType == "Casual") {
                    searchTerm = "park";
                    console.log("Going to the park, getting icecream");
                }
                else if (dateType == "Romantic") {
                    console.log("Picnic in the park, outdoor movie");
                    searchTerm = "park";
                }
                else if (dateType == "Adventurous") {
                    console.log("going on a hike, rock climbing");
                    searchTerm = "trail";
                }
                else if (dateType == "Group") {
                    console.log("geocaching, games, scavenger hunt, mini golfing, people watching");
                    searchTerm = "mall";
                }
                else if (dateType == "First") {
                    searchTerm = "icecream";
                    console.log("icecream");
                }
            }
            else if (dateWeather == "rainy") {
                if (dateType == "Casual") {
                    console.log("going to a movie and fast food");
                    searchTerm = "movie theater";
                }
                else if (dateType == "Romantic") {
                    console.log("homemade dinner by candle light");
                    searchTerm = "italian restaurant";
                }
                else if (dateType == "Adventurous") {
                    searchTerm = "Rock climbing";
                    console.log("playing in the rain, trampoline place, indoor climbing");
                }
                else if (dateType == "Group") {
                    console.log("game night inside");
                    searchTerm = "museum";
                }
                else if (dateType == "First") {
                    console.log("dinner");
                    searchTerm = "fast food";
                }
            }
            else if (dateWeather == "cold") {
                if (dateType == "Casual") {
                    console.log("casual cold date ideas");
                    searchTerm = "bowling";
                }
                else if (dateType == "Romantic") {
                    console.log("dinner at a nice restaurant");
                    searchTerm = "restaurant";
                }
                else if (dateType == "Adventurous") {
                    console.log("snowball fights, sledding");
                    searchTerm = "park";
                }
                else if (dateType == "Group") {
                    console.log("more ideas to come");
                    searchTerm = "museum";
                }
                else if (dateType == "First") {
                    searchTerm = "bakery";
                    console.log("hot chocolate");
                }
            }
            else {
                if (dateType == "Casual") {
                    console.log("insert idea here");
                    searchTerm = "food";
                }
                else if (dateType == "Romantic") {
                    console.log("something romantic");
                    searchTerm = "color me mine";
                }
                else if (dateType == "Adventurous") {
                    console.log("something adventurous");
                    searchTerm = "fun";
                }
                else if (dateType == "Group") {
                    console.log("something for a group");
                    searchTerm = "bowling";
                }
                else if (dateType == "First") {
                    console.log("awkward first date");
                    searchTerm = "food";
                }
            }
            return searchTerm;
        }

        function call4Square() {
            var secret = "52PG551ZL1YUUQDBPOGPV3VWURFT3DNIOWWYPXDZWXTBADVQ";
            var clientId = "QHXS5FBXRC5JU5XXUIIXFOUUB0SAIHZYCH1DJDSFHZVZK1ZV";
            var myurl2 = "https://api.foursquare.com/v2/venues/explore?client_id=" + clientId + "&client_secret=" + secret + "&v=20180323&ll=40.2338,-111.6585&query=";
            myurl2 += searchTerm;
            console.log(myurl2);


            $.ajax({
                url: myurl2,
                dataType: "json",
                success: function(parsed_json) {
                    console.log(parsed_json);
                    var searchResults = parsed_json['response']['groups'][0]['items'];
                    console.log(searchResults);

                    var previousIndex = -1;
                    var latLongArray = [];
                    var nameArray = [];

                    if (searchResults.length != 0) {

                        for (var i = 0; i < 3; i++) {

                            var div = "#area" + i;
                            var currentIndex = "index" + i;

                            var max = searchResults.length;
                            var min = 0;
                            var index = Math.floor(Math.random() * (max - min) + min);

                            if (previousIndex == -1) {
                                previousIndex = index;
                            }
                            else if (previousIndex == (max - 1)) {
                                index = 0;
                            }
                            else {
                                index = previousIndex + 1;
                                previousIndex++;
                            }

                            console.log("index: " + index);

                            var results = searchResults[index];
                            var name = results['venue']['name'];
                            var addressArray = results['venue']['location']['formattedAddress'];
                            var address = "";
                            for (var j = 0; j < addressArray.length; j++) {
                                address += addressArray[j] + " ";
                            }

                            var latitude = results['venue']['location']['lat'];
                            var longitude = results['venue']['location']['lng'];
                            var ideaLocation = "{lat: " + latitude + ", lng: " + longitude + "}";
                            var category = results['venue']['categories'][0]['name'];

                            var everything = "<ul>";
                            everything += "<li>Name: " + name;
                            everything += "<li>Address: " + address;
                            everything += "<li>Category: " + category;
                            everything += "</ul>";
                            $(div).html(everything);

                            latLongArray.push(latitude);
                            latLongArray.push(longitude);
                            console.log(ideaLocation);
                            nameArray.push(name);
                        }

                        addMarker(latLongArray, nameArray);
                        
                        $(".date-space").css("display","flex");
                        $("#plotted-date").css("display","block");
                    }
                }

            });
        }

        function addMarker(latLongArray, nameArray) {

            console.log(latLongArray[0]);

            var map0 = new google.maps.Map(document.getElementById('map0'), {
                center: { lat: latLongArray[0], lng: latLongArray[1] },
                zoom: 17,
                styles: [
                    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [{ color: '#263c3f' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#6b9a76' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{ color: '#38414e' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#212a37' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#9ca5b3' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{ color: '#746855' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#1f2835' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#f3d19c' }]
                    },
                    {
                        featureType: 'transit',
                        elementType: 'geometry',
                        stylers: [{ color: '#2f3948' }]
                    },
                    {
                        featureType: 'transit.station',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{ color: '#17263c' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#515c6d' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.stroke',
                        stylers: [{ color: '#17263c' }]
                    }
                ]
            });

            var marker0 = new google.maps.Marker({
                position: { lat: latLongArray[0], lng: latLongArray[1] },
                map: map0,
                title: nameArray[0]
            });

            var map1 = new google.maps.Map(document.getElementById('map1'), {
                center: { lat: latLongArray[2], lng: latLongArray[3] },
                zoom: 17,
                styles: [
                    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [{ color: '#263c3f' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#6b9a76' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{ color: '#38414e' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#212a37' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#9ca5b3' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{ color: '#746855' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#1f2835' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#f3d19c' }]
                    },
                    {
                        featureType: 'transit',
                        elementType: 'geometry',
                        stylers: [{ color: '#2f3948' }]
                    },
                    {
                        featureType: 'transit.station',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{ color: '#17263c' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#515c6d' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.stroke',
                        stylers: [{ color: '#17263c' }]
                    }
                ]
            });

            var marker1 = new google.maps.Marker({
                position: { lat: latLongArray[2], lng: latLongArray[3] },
                map: map1,
                title: nameArray[1]
            });

            var map2 = new google.maps.Map(document.getElementById('map2'), {
                center: { lat: latLongArray[4], lng: latLongArray[5] },
                zoom: 17,
                styles: [
                    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [{ color: '#263c3f' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#6b9a76' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{ color: '#38414e' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#212a37' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#9ca5b3' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{ color: '#746855' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#1f2835' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#f3d19c' }]
                    },
                    {
                        featureType: 'transit',
                        elementType: 'geometry',
                        stylers: [{ color: '#2f3948' }]
                    },
                    {
                        featureType: 'transit.station',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{ color: '#17263c' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#515c6d' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.stroke',
                        stylers: [{ color: '#17263c' }]
                    }
                ]
            });

            var marker2 = new google.maps.Marker({
                position: { lat: latLongArray[4], lng: latLongArray[5] },
                map: map2,
                title: nameArray[2]
            });

            var map3 = new google.maps.Map(document.getElementById('map3'), {
                center: { lat: 40.2338, lng: -111.6585 },
                zoom: 12,
                styles: [
                    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [{ color: '#263c3f' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#6b9a76' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{ color: '#38414e' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#212a37' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#9ca5b3' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{ color: '#746855' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#1f2835' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#f3d19c' }]
                    },
                    {
                        featureType: 'transit',
                        elementType: 'geometry',
                        stylers: [{ color: '#2f3948' }]
                    },
                    {
                        featureType: 'transit.station',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{ color: '#17263c' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#515c6d' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.stroke',
                        stylers: [{ color: '#17263c' }]
                    }
                ]
            });

            var markerA = new google.maps.Marker({
                position: { lat: latLongArray[0], lng: latLongArray[1] },
                map: map3,
                title: nameArray[0]
            });

            var markerB = new google.maps.Marker({
                position: { lat: latLongArray[2], lng: latLongArray[3] },
                map: map3,
                title: nameArray[1]
            });

            var markerC = new google.maps.Marker({
                position: { lat: latLongArray[4], lng: latLongArray[5] },
                map: map3,
                title: nameArray[2]
            });


        }

    }
});
