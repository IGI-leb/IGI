const app = Vue.createApp({
    data() {
        return {
            api: "https://script.google.com/macros/s/AKfycbyXQ-UZUex2591sRA2ozKFEWo3p7_sE9qv5N0xPXi3HnmYLxSqukZhTZltKrGh1Bhx9/exec",
            prodPage: {},
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

            this.prodPage = res
            this.facebookLink = this.prodPage.contact.facebookLink
            this.instagramLink = this.prodPage.contact.instagramLink
            this.linkedinLink = this.prodPage.contact.linkedinLink
            this.phoneLink = this.prodPage.contact.phoneLink
            this.phone = this.prodPage.contact.phoneNumber
            this.locationLink = this.prodPage.contact.locationLink
            this.location = this.prodPage.contact.location
            this.email = this.prodPage.contact.email
            this.logoUrl = this.prodPage.contact.logoUrl
            // console.log(this.prodPage);
            this.spinner = false



        }).catch((err) => {

            console.log(err);
            this.spinner = false

        })
    }
});
app.mount("#productsApp");