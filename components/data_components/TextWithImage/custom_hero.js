const heroComponent = {
    data() {
        return {
          videoSrc: 'https://www.youtube.com/watch?v=zXTNCkT8qZo',  // Path to your video
          logoSrc: '/logo.svg',
          logoAlt: 'logo',
          imageSrc: 'https://media.shopranos.eu/media/40b62232-78b3-452f-b802-188248e67873/97a4110e-ba23-423f-8c76-25a320146a66/97a4110e-ba23-423f-8c76-25a320146a66',
          imageAlt: 'image',
          textinputPlaceholder: 'Destination',
          textinputPlaceholder1: 'Date',
          textinputPlaceholder2: 'Group size',
          iconSrc: 'https://media.shopranos.eu/media/40b62232-78b3-452f-b802-188248e67873/30c60919-49a6-4b83-99dc-a37301f9d00e/30c60919-49a6-4b83-99dc-a37301f9d00e',
          iconAlt: 'search icon',
          logoSrc1: '/logo.svg',
          logoAlt1: 'logo',
          selectedLocOption:"",
          locDropdownOpen: false,
          dropdownOpen: false,
          summaryText: "Group Size",
          dropdownStyles: {
            top: '0px',
            left: '0px'
          },
          locOptions: ["Athens", "Ljubljana", "Paris"],
          options: [
            { type: "Adult", ageRange: "18 to 74 yrs", value: 0 },
            { type: "Child", ageRange: "3 to 17 yrs", value: 0 },
            { type: "Senior", ageRange: "75+ yrs", value: 0 }
          ],
        }
      },
      mounted() {
        flatpickr(this.$refs.dateInput, {
          dateFormat: "d/m/Y", // Format for dd/mm/yyyy
          position: "below", // Position it below the input field
          minDate: new Date(),
          onReady: function(selectedDates, dateStr, instance) {
            instance.calendarContainer.style.marginTop = "25px";
          }
        });
      },
      computed: {
        dropdownButtonText() {
          return this.options
            .filter(option => option.value > 0)  // Only include options with a value greater than 0
            .map(option => `${option.value} ${option.type.toLowerCase()}`)  // Format each option as "1 adult", "1 child", etc.
            .join(" · ");  // Join with separator
        }
      },
      methods: {
        toggleDropdown(selection) {
          if(selection=="location") {
            this.locDropdownOpen = !this.locDropdownOpen;
            dropdownWindow = this.locDropdownOpen
          }
          else{
            this.dropdownOpen = !this.dropdownOpen;
            dropdownWindow = this.dropdownOpen;
          }
          if (dropdownWindow) {
            this.setDropdownPosition(selection);
            window.addEventListener('scroll', this.closeDropdownOnScroll);
            document.addEventListener('click', this.handleOutsideClick);
          }
          else{
            window.removeEventListener('scroll', this.closeDropdownOnScroll);
            document.removeEventListener('click', this.handleOutsideClick);
          }
        },
        setDropdownPosition(selection) {
          if(selection=="location"){
            placingElement = this.$refs.locInput.getBoundingClientRect();
            leftPosition = placingElement.left -25;
          }
          else{
            placingElement = this.$refs.dropdownButton.getBoundingClientRect();
            leftPosition = window.innerWidth < 1200 ? placingElement.left - 150 : placingElement.left - 25;
          }
          // Position the dropdown card just below the dropdown button
          this.dropdownStyles = {
            top: `${placingElement.bottom + 25}px`,
            left: `${leftPosition}px`,
          };
        },
        incrementValue(index) {
          this.options[index].value++;
        },
        decrementValue(index) {
            if (this.options[index].value > 0) {
                this.options[index].value--;
            }
        },
        closeDropdownOnScroll() {
          this.dropdownOpen = false;
          // Remove scroll event listener when dropdown is closed
          window.removeEventListener('scroll', this.closeDropdownOnScroll);
          document.removeEventListener('click', this.handleOutsideClick);
        },
        handleOutsideClick(event) {
          const dropdownCard = this.$refs.dropdownCard;
          if (dropdownCard && !dropdownCard.contains(event.target) && !this.$refs.dropdownButton.contains(event.target)) {
            this.dropdownOpen = false;
            window.removeEventListener('scroll', this.closeDropdownOnScroll);
            document.removeEventListener('click', this.handleOutsideClick);
          }
        },
        selectOption(option){
          this.selectedLocOption = option; 
        }
      },
  }

app.component('textwithimagecustom_hero', {
    extends: heroComponent,
    template: '#textwithimagecustom_hero'
});