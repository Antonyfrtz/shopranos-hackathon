const custom_carousel = {
    props: {
        model: Object
    },
    data() {
        return {
            banners: this.model.banners || [],
            fullWidth: this.model.bannerExtended || false,
            carouselLoaded: false,
            customSlideDefinition: 1
        };
    },
    mounted() {
        this.carouselInitialization();
    },
    methods: {
        carouselInitialization() {
            this.customSlideDefinition = this.model.columns > 4 ? 2 : this.model.columns;
            
            const swiper = new Swiper(".banners-carousel-" + this.model.id, {
                loop: true,
                pagination: {
                    el: ".swiper-pagination-" + this.model.id,
                    clickable: true,
                    bulletClass: 'custom-bullet', // Custom bullet class
                    bulletActiveClass: 'custom-bullet-active'
                },
                navigation: {
                    nextEl: ".swiper-button-next-" + this.model.id,
                    prevEl: ".swiper-button-prev-" + this.model.id,
                },
                slidesPerView: this.customSlideDefinition,
                slidesPerGroup: this.customSlideDefinition,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                speed: 1000,
            });
            
            this.carouselLoaded = true;
        },
        getAlignmentClass(alignment) {
            return ['justify-content-start', 'justify-content-center', 'justify-content-end'][alignment - 1] || '';
        },
        getBannerAlignmentElement(alignment) {
            return ['text-start', 'text-end', 'text-center'][alignment] || '';
        },
        getBannerHeight() {
            return ['smallHeight', 'regularHeight', 'fullHeight'][this.model.bannerHeight - 1] || '';
        },
        getClassNameByColumns() {
            return ['oneCols', 'twoCols', 'threeCols', 'fourCols', 'unequalCols-2-1', 'unequalCols-1-2'][this.model.columns - 1] || '';
        }
    }
}

app.component('bannercarouselcustom_carousel', {
    extends: custom_carousel,
    template: '#bannercarouselcustom_carousel'
});
