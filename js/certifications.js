const app = Vue.createApp({
    data() {
        return {
            api: "https://script.google.com/macros/s/AKfycbwXj9L_ZVWwAgGfXlaj0BZf3jcmowGj_OdAoBIAASlp_frAYJ5KhCmIL6-YjT78esug/exec",
            certificatesPage: "",
            certificationsArr: [],
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
            this.certificatesPage = res
            this.certificationsArr = this.certificatesPage.certificatesArr
            this.facebookLink = this.certificatesPage.contact.facebookLink
            this.instagramLink = this.certificatesPage.contact.instagramLink
            this.linkedinLink = this.certificatesPage.contact.linkedinLink
            this.phoneLink = this.certificatesPage.contact.phoneLink
            this.phone = this.certificatesPage.contact.phoneNumber
            this.locationLink = this.certificatesPage.contact.locationLink
            this.location = this.certificatesPage.contact.location
            this.email = this.certificatesPage.contact.email
            this.logoUrl = this.certificatesPage.contact.logoUrl

            // console.log(this.certificationsArr)
        
            this.spinner = false
            

        }).catch((err) => {

            this.spinner = false

            console.log(err);
        })
    }
});
app.mount("#certificationsApp");