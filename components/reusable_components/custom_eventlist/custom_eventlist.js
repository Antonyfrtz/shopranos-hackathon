const custom_eventlist  = {
        props:
            {},
        data() {
            return {
            }
            },
        mounted(){
        }
}

app.component('custom_eventlist', {
    extends: custom_eventlist,
    template: '#custom_eventlist'
});