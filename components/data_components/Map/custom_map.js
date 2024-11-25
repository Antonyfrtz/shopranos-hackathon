const mapcustom_map = {
    props: {
        model: Object,
    },
    data() {
        return {
            address: this.model.address,
            mapSrc: "",
            latitude: this.model.latitude,
            longitude: this.model.longitude,
            zoom: this.model.zoom,
            fullWidth: this.model.mapExtended ? this.model.mapExtended : false,
            mapStyle: [
                {
                    'featureType': 'administrative',
                    'elementType': 'all',
                    'stylers': [
                        { 'visibility': 'on' },
                        { 'lightness': 33 },
                    ],
                },
                {
                    'featureType': 'landscape',
                    'elementType': 'all',
                    'stylers': [
                        { 'color': '#A3B2A1' },
                    ],
                },
                {
                    'featureType': 'poi.park',
                    'elementType': 'geometry',
                    'stylers': [
                        { 'color': '#c5dac6' },
                    ],
                },
                {
                    'featureType': 'poi.park',
                    'elementType': 'labels',
                    'stylers': [
                        { 'visibility': 'on' },
                        { 'lightness': 20 },
                    ],
                },
                {
                    'featureType': 'road',
                    'elementType': 'all',
                    'stylers': [
                        { 'lightness': 20 },
                    ],
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'geometry',
                    'stylers': [
                        { 'color': '#c5c6c6' },
                    ],
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'geometry',
                    'stylers': [
                        { 'color': '#e4d7c6' },
                    ],
                },
                {
                    'featureType': 'road.local',
                    'elementType': 'geometry',
                    'stylers': [
                        { 'color': '#fbfaf7' },
                    ],
                },
                {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': [
                        { 'visibility': 'on' },
                        { 'color': '#6E8690' },
                    ],
                },
            ],
            locations : {
                "type": "FeatureCollection",
                "features": [{
                  "geometry": {
                    "type": "Point",
                    "coordinates": [24.015314, 35.513765]
                  },
                  "type": "Feature",
                  "properties": {
                    "category": "ΧΑΝΙΑ",
                    "hours": "10πμ - 6μμ",
                    "description": "Βρισκόμαστε στην οδό Πειραιώς 3, 731 31. Ιδιοκτήτης ΚΩΝΣΤΑΝΤΙΝΟΣ ΧΑΛΙΚΑΚΗΣ",
                    "name": "Soulfly Travel - Chania",
                    "phone": "+30 2821086868",
                    "storeid": "01"
                  }
                },
                  {
                    "geometry": {
                      "type": "Point",
                      "coordinates": [ 23.785304, 37.834320 ]
                    },
                    "type": "Feature",
                    "properties": {
                      "category": "ΑΘΗΝΑ",
                      "hours": "10πμ - 6μμ",
                      "description": "Βρισκόμαστε επι της οδού Καλύμνου 96, Βούλα, 166 73, στην καρδιά της Αθηναϊκής Ριβιέρας.",
                      "name": "Soulfly Travel - Kalymnou",
                      "phone": "+30 2108993024",
                      "storeid": "02"
                    }
                  },
                  {
                    "geometry": {
                      "type": "Point",
                      "coordinates": [23.810992, 38.004786]
                    },
                    "type": "Feature",
                    "properties": {
                      "category": "ΑΘΗΝΑ",
                      "hours": "10πμ - 6μμ",
                      "description": "Soulfly Travel - Agia Paraskevi - Ιδιοκτήτης ΣΟΛΏΝΑΚΗ ΗΡΩ",
                      "name": "Soulfly Travel - Agia Paraskevi",
                      "phone": "+30 2111822080",
                      "storeid": "04"
                    }
                  },
                  {
                    "geometry": {
                      "type": "Point",
                      "coordinates": [23.652221, 37.941597]
                    },
                    "type": "Feature",
                    "properties": {
                      "category": "ΑΘΗΝΑ",
                      "hours": "10πμ - 6μμ",
                      "description": "Βρισκόμαστε απέναντι απο το πανεπιστήμιο Πειραιώς στην γωνία Τσαμαδού και Δεληγιώργη",
                      "name": "Soulfly Travel - Piraeus",
                      "phone": "+30 2160002200",
                      "storeid": "05"
                    }
                  },
                  {
                    "geometry": {
                      "type": "Point",
                      "coordinates": [22.944336, 40.633475]
                    },
                    "type": "Feature",
                    "properties": {
                      "category": "ΘΕΣΣΑΛΟΝΙΚΗ",
                      "hours": "10πμ - 6μμ",
                      "description": "Το νέο μας κατάστημα στην Σαλούγκα σας περιμένει απο τις 12/5/2023",
                      "name": "Soulfly Travel - Thessaloniki - NEW!",
                      "phone": "+30 2317510951",
                      "storeid": "06"
                    }
                  },
                  {
                    "geometry": {
                      "type": "Point",
                      "coordinates": [22.724816,37.720996]
                    },
                    "type": "Feature",
                    "properties": {
                      "category": "ΕΠΑΡΧΙΑ",
                      "hours": "8πμ - 9:30μμ",
                      "description": "Βρισκόμαστε στον επαρχιακό δρόμο ΕΟ Κορίνθου-Άργους - Ιδιοκτήτης ΤΣΙΩΤΑΚΗ ΕΛΕΝΗ",
                      "name": "Soulfly Travel - Fixtia",
                      "phone": "+30 2751076963",
                      "storeid": "11"
                    }
                  },
                  {
                    "geometry": {
                      "type": "Point",
                      "coordinates": [25.126843,35.337657]
                    },
                    "type": "Feature",
                    "properties": {
                      "category": "ΗΡΑΚΛΕΙΟ",
                      "hours": "8πμ - 9:30μμ",
                      "description": "Βρισκόμαστε επι της οδού Δεδάλου, στο ιστορικό κέντρο. Ελάτε και κερνάμε τσικουδιά. Ιδιοκτήτης ΝΙΚΟΛΑΟΣ ΠΑΠΑΔΑΚΗΣ",
                      "name": "Soulfly Travel - Heraklion",
                      "phone": "+30 2810240619",
                      "storeid": "12"
                    }
                  },
                  {
                    "geometry": {
                      "type": "Point",
                      "coordinates": [22.957046,39.362204]
                    },
                    "type": "Feature",
                    "properties": {
                      "category": "ΒΟΛΟΣ",
                      "hours": "8πμ - 9:30μμ",
                      "description": "Με τον κωδικό 'FALL5' έχετε 5% έκπτωση σε όλες τις χειμερινές αποδράσεις. Η προσφορά ισχύει εώς εξαντλήσεως αποθεμάτων",
                      "name": "Soulfly Travel - Volos",
                      "phone": "+30 2421049676",
                      "storeid": "13"
                    }
                  }
                ]
              }
        }
    },
    mounted() {
        this.mapSrc = this.getMapUrl();
        this.initMap();
    },
    methods: {
        initMap() {
            const mapOptions = {
                center: {
                    lat: 37.974562,
                    lng: 23.735637,
                },
                zoom: 6,
                styles: this.mapStyle,
            };
            
            // Find the container for the map
            const mapElement = this.$refs.mapContainer;
    
            // Initialize the Google Map
            const map = new google.maps.Map(mapElement, mapOptions);

            // fetch("https://zcontentecom.blob.core.windows.net/themes/40b62232-78b3-452f-b802-188248e67873/staging/Assets/stores.json")
            // .then(response => response.json())
            // .then(storeInfo => {
            //     console.log(storeInfo); // Logs the fetched JSON
            //     map.data.loadGeoJson(storeInfo, { idPropertyName: 'storeid' }); // Use the resolved JSON
            // })
            // .catch(error => {
            //     console.error("Error fetching store information:", error);
            // });
            map.data.addGeoJson(this.locations, {idPropertyName: 'storeid'});
            map.data.setStyle(function(feature) {
                return /** @type {google.maps.Data.StyleOptions} */({
                    icon: {url:'https://media.shopranos.eu/media/40b62232-78b3-452f-b802-188248e67873/1117e515-0a28-41a0-b455-1cbf62db97d0/1117e515-0a28-41a0-b455-1cbf62db97d0',
                    scaledSize: new google.maps.Size(16, 32),}
                });
            });
    
            const infoWindow = new google.maps.InfoWindow();


            // Show the information for a store when its marker is clicked.
            map.data.addListener('click', (event) => {
                const category = event.feature.getProperty('category');
                const name = event.feature.getProperty('name');
                const description = event.feature.getProperty('description');
                const hours = event.feature.getProperty('hours');
                const phone = event.feature.getProperty('phone');
                const position = event.feature.getGeometry().get();
                const content = `
              <h4>${name}</h4><p style="font-size: 16px">${description}</p>
              <p style="font-size: 14px"><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
            `;
        
                infoWindow.setContent(content);
                infoWindow.setPosition(position);
                infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
                infoWindow.open(map);
            });
        
        
            // Build and add the search bar
            const card = document.createElement('div');
            const titleBar = document.createElement('div');
            const title = document.createElement('div');
            const container = document.createElement('div');
            const input = document.createElement('input');
            const options = {
                types: ['address'],
                componentRestrictions: {country: 'gr'},
            };
            // Search
            card.setAttribute('id', 'pac-card');
            title.setAttribute('id', 'title');
            title.textContent = 'Βρείτε το κοντινότερο παράρτημα';
            titleBar.appendChild(title);
            container.setAttribute('id', 'pac-container');
            input.setAttribute('id', 'pac-input');
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', 'Εισάγετε διεύθυνση');
            input.className="input-style"
            container.appendChild(input);
            card.appendChild(titleBar);
            card.appendChild(container);
            map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
            // Make the search bar into a Places Autocomplete search bar and select
            // which detail fields should be returned about the place that
            // the user selects from the suggestions.
            const autocomplete = new google.maps.places.Autocomplete(input, options);
            autocomplete.setFields(['address_components', 'geometry', 'name']);
        
        
            // Set the origin point when the user selects an address
            const originMarker = new google.maps.Marker({
                map: map,
                title: 'Η τοποθεσία σας',
                icon: {url:'https://media.shopranos.eu/media/40b62232-78b3-452f-b802-188248e67873/1117e515-0a28-41a0-b455-1cbf62db97d0/1117e515-0a28-41a0-b455-1cbf62db97d0',
                    scaledSize: new google.maps.Size(16, 32),}
            });
            originMarker.setVisible(false);
            let originLocation = map.getCenter();
        
            autocomplete.addListener('place_changed', async () => {
                originMarker.setVisible(false);
                originLocation = map.getCenter();
                const place = autocomplete.getPlace();
        
                if (!place.geometry) {
                    // User entered the name of a Place that was not suggested and
                    // pressed the Enter key, or the Place Details request failed.
                    window.alert('No address available for input: \'' + place.name + '\'');
                    return;
                }
        
                // Recenter the map to the selected address
                originLocation = place.geometry.location;
                map.setCenter(originLocation);
                map.setZoom(13);
                console.log(place);
        
                originMarker.setPosition(originLocation);
                originMarker.setVisible(true);
        
                // Use the selected address as the origin to calculate distances
                // to each of the store locations
                const rankedStores = await calculateDistances(map.data, originLocation);
                showStoresList(map.data, rankedStores);
            });

            // List the closest stores
            async function calculateDistances(data, origin) {
                const stores = [];
                const destinations = [];

                // Build parallel arrays for the store IDs and destinations
                data.forEach((store) => {
                    const storeNum = store.getProperty('storeid');
                    const storeLoc = store.getGeometry().get();

                    stores.push(storeNum);
                    destinations.push(storeLoc);
                });

                // Retrieve the distances of each store from the origin
                // The returned list will be in the same order as the destinations list
                const service = new google.maps.DistanceMatrixService();
                const getDistanceMatrix =
                    (service, parameters) => new Promise((resolve, reject) => {
                        service.getDistanceMatrix(parameters, (response, status) => {
                            if (status != google.maps.DistanceMatrixStatus.OK) {
                                reject(response);
                            } else {
                                const distances = [];
                                const results = response.rows[0].elements;
                                for (let j = 0; j < results.length; j++) {
                                    const element = results[j];
                                    const distanceText = element.distance.text;
                                    const distanceVal = element.distance.value;
                                    const distanceObject = {
                                        storeid: stores[j],
                                        distanceText: distanceText,
                                        distanceVal: distanceVal,
                                    };
                                    distances.push(distanceObject);
                                }

                                resolve(distances);
                            }
                        });
                    });

                const distancesList = await getDistanceMatrix(service, {
                    origins: [origin],
                    destinations: destinations,
                    travelMode: 'DRIVING',
                    unitSystem: google.maps.UnitSystem.METRIC,
                });

                distancesList.sort((first, second) => {
                    return first.distanceVal - second.distanceVal;
                });

                return distancesList;
            }


            // Show the stores in order
            function showStoresList(data, stores) {
                if (stores.length == 0) {
                    console.log('empty stores');
                    return;
                }
            
                // Locate the map container div
                const mapContainer = document.getElementById("map");
                if (!mapContainer) {
                    console.error('Map container not found');
                    return;
                }
            
                let panel = document.createElement('div');
            
                // If the panel already exists, use it. Else, create it and add to the map container.
                if (document.getElementById('panel')) {
                    panel = document.getElementById('panel');
                    // If panel is already open, close it
                    if (panel.classList.contains('open')) {
                        panel.classList.remove('open');
                    }
                } else {
                    panel.setAttribute('id', 'panel');
                    mapContainer.appendChild(panel); // Append to the map container
                }
            
                // Clear the previous details
                while (panel.lastChild) {
                    panel.removeChild(panel.lastChild);
                }

                // Add a header to the panel
                const header = document.createElement('h3');
                header.textContent = "Nearby Stores";
                header.style.paddingTop = "20px"; // Add top padding
                header.style.paddingLeft = "20px"; // Add top padding
                panel.appendChild(header);
                const hr = document.createElement('hr');
                hr.style.margin = "10px 0"; // Add some spacing
                panel.appendChild(hr);
            
                stores.forEach((store) => {
                    // Add store details with text formatting
                    const name = document.createElement('p');
                    name.classList.add('place');
                    const currentStore = data.getFeatureById(store.storeid);
                    name.textContent = currentStore.getProperty('name');
                    panel.appendChild(name);
            
                    const distanceText = document.createElement('p');
                    distanceText.classList.add('distanceText');
                    distanceText.textContent = store.distanceText;
                    panel.appendChild(distanceText);
                });
            
                // Open the panel
                panel.classList.add('open');
            }
            
        },
        getAlignmentClass(alignment) {
            switch (alignment) {
                case 1:
                    return 'justify-content-start';
                case 2:
                    return 'justify-content-center';
                case 3:
                    return 'justify-content-end';
                default:
                    return '';
            }
        },
        getMapUrl() {
            var baseUrl = 'https://www.google.com/maps/embed/v1/place?';
            var apiKey = 'key=AIzaSyD5v3eMW9XFHbd3mzsOGx_ePTFrI1YML48';
            var addressUrl;
            if (this.address.address1 || this.address.city || this.address.postalCode) {
                addressUrl = `&q=${this.address.address1},${this.address.city},${this.address.postalCode}`;
            } else if (this.latitude !== null && this.longitude !== null) {
                addressUrl = `&q=${this.latitude},${this.longitude}`;
            }
            return `${baseUrl}${apiKey}${addressUrl}&zoom=${this.zoom}`;
        }
    }
}

app.component('mapcustom_map', {
    extends: mapcustom_map,
    template: '#mapcustom_map'
});