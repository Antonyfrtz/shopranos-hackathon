// Import the HTML template
//import CustomIconBlockTemplate from './custom_IconBlock.html';

const CustomIconBlockTemplate = {
    props: {
      model: Object,
    },
}

app.component('iconblockcustom_IconBlock', 
  {  extends: CustomIconBlockTemplate,
  template: '#iconblockcustom_IconBlock'
});