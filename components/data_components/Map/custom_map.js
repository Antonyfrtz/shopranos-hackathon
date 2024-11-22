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
        }
    },
    mounted() {
        this.mapSrc = this.getMapUrl();
    },
    methods: {
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