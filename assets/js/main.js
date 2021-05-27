//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const app = new Vue({
    el: "#app",
    data: {
        emails: []
    },
    methods: {
        
    },
    mounted() {

        for (let i = 0; i < 10; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                console.log(response);
                console.log(response.data.response);
                const mail = response.data.response;
                this.emails.push(mail);
            })
        }
    }
});