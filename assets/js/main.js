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
        /* for (let i = 0; i < 10; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                console.log(response);
                console.log(response.data.response);
                const mail = response.data.response;
                this.emails.push(mail);
            })
        } */

        //BONUS
        let tempEmails = [];
        for (let i = 0; i < 10; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                //console.log(response);
                //console.log(response.data.response);
                const mail = response.data.response;
                tempEmails.push(mail);
                //console.log(tempEmails);
                if(tempEmails.length > 9) {
                    this.emails = tempEmails;
                }
            })
        }
        //oppure (al posto del controllo e di pushare gli elementi nell'array temoraneo e dopo tutti insieme in quello nei data)
        //posso utilizzare su <ol> nell'html questo: v-if="emails.length == 10"
    }
});

//BONUS: Far comparire gli indirizzi email solamente quando sono stati tutti generati.