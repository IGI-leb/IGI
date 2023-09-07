const app = Vue.createApp({
    data() {
        return {
            api: "https://script.google.com/macros/s/AKfycbyThynZcY1YSiZK_axOtbrtCxIE_DQXoToWMle8npvQeJgGRHZPFCn3xGTrBD9J4IGP/exec",
            projPage: {},
            facebookLink: "",
            instagramLink: "",
            linkedinLink: "",
            phoneLink: "",
            phone: "",
            locationLink: "",
            location: "",
            email: "",
            logoUrl: "",
            currYear: new Date().getFullYear(),
            spinner: false
        }
    },
    mounted() {
        this.spinner = true
        fetch(this.api).then((res) => {
            return res.json()
        }).then(res => {

            this.projPage = res
            this.facebookLink = this.projPage.contact.facebookLink
            this.instagramLink = this.projPage.contact.instagramLink
            this.linkedinLink = this.projPage.contact.linkedinLink
            this.phoneLink = this.projPage.contact.phoneLink
            this.phone = this.projPage.contact.phoneNumber
            this.locationLink = this.projPage.contact.locationLink
            this.location = this.projPage.contact.location
            this.email = this.projPage.contact.email
            this.logoUrl = this.projPage.contact.logoUrl
            // console.log(this.projPage);
            this.spinner = false



        }).catch((err) => {

            console.log(err);
            this.spinner = false

        })
    }
});
app.mount("#projectsApp");