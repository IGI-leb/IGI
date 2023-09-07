const app = Vue.createApp({
    data() {
        return {
            api: "https://script.google.com/macros/s/AKfycbyYciy8qJev6KVb2YhRbdK-Q3DtDh9lOgDBdyGZDGgGUUA6d6LaKnrNBNOh20s29Hy3/exec",
            contactInfo: "",
            userName: "",
            userSubject: "",
            userMessage: "",
            currYear: new Date().getFullYear(),
            spinner: false
        }
    },
    mounted() {
        this.spinner = true
        fetch(this.api).then((res) => {
            return res.json()
        }).then(res => {
            this.contactInfo = res

            this.spinner = false

        }).catch((err) => {

            this.spinner = false

            console.log(err);
        })
    },
    methods: {
        submit() {
            return `mailto:${this.contactInfo.email}?name=${this.userName}!&subject=${this.userSubject}!&body=${this.userMessage}`
        }
    }
});
app.mount("#contactApp");