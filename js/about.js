const app = Vue.createApp({
    data() {
        return {
            api: "https://script.google.com/macros/s/AKfycbwdoRaTb8BHzKwMkr6vtaCANkStprx42gtSnKK3mmC5naW7M3LPyn1Oizumn1IickK6/exec",
            aboutImagesUrls: "",
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

            this.aboutImagesUrls = res
            this.facebookLink = this.aboutImagesUrls.contact.facebookLink
            this.instagramLink = this.aboutImagesUrls.contact.instagramLink
            this.linkedinLink = this.aboutImagesUrls.contact.linkedinLink
            this.phoneLink = this.aboutImagesUrls.contact.phoneLink
            this.phone = this.aboutImagesUrls.contact.phoneNumber
            this.locationLink = this.aboutImagesUrls.contact.locationLink
            this.location = this.aboutImagesUrls.contact.location
            this.email = this.aboutImagesUrls.contact.email
            this.logoUrl = this.aboutImagesUrls.contact.logoUrl
            // console.log(aboutImagesUrls);
            this.spinner = false



        }).catch((err) => {

            console.log(err);
            this.spinner = false

        })
    }
});
app.mount("#aboutApp");