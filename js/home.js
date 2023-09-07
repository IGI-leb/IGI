// const Product = { template: '<div>Product Page</div>' }


// Step 1: Create a new Vue Router instance

// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHistory(), // Use createWebHistory for history mode, or createWebHashHistory for hash mode
//     routes: [
//       { path: '/Product', component: Product }
//     ],
//   });

const app = Vue.createApp({
    data() {
        return {
            api: "https://script.google.com/macros/s/AKfycbyaIQbxsN8t-l-8KrwCcMDLzwPbkmPkxbRAKDShUzyS_gBzQqYeucd3J_vZ8sU61MJo/exec",
            home: {},
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
    // router,
    mounted() {
        this.spinner = true
        fetch(this.api).then((res) => {
            return res.json()
        }).then(res => {

            this.home = res
            this.facebookLink = this.home.contact.facebookLink
            this.instagramLink = this.home.contact.instagramLink
            this.linkedinLink = this.home.contact.linkedinLink
            this.phoneLink = this.home.contact.phoneLink
            this.phone = this.home.contact.phoneNumber
            this.locationLink = this.home.contact.locationLink
            this.location = this.home.contact.location
            this.email = this.home.contact.email
            this.logoUrl = this.home.contact.logoUrl
            this.spinner = false



        }).catch((err) => {

            console.log(err);
            this.spinner = false

        })
    }
});


// Step 3: Attach the Vue Router instance to your Vue app
// app.use(router);

// Step 4: Mount your Vue app to the HTML element
app.mount("#homeSweetHome");



