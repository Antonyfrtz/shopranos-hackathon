const textwithimagecustom_aboutus = {
    props: {
      model: Object,
    },
    data() {
      return {
        imgUrl: this.model.image ? this.model.image.link : 'girl.jpg', // Default image
        imgAlt: this.model.image?.alt || 'About Us Image',
      };
    },
    methods: {
      // Any additional methods needed can be added here
    },
  };
  
  // Register the component
  app.component('textwithimagecustom_aboutus', {
    extends: textwithimagecustom_aboutus,
    template: '#textwithimagecustom_aboutus',
  });
  