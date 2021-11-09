const app = new Vue({
    el: '#app',
    listIsFull: false,
    data: {
        emailList: []
    },
    mounted() {
        for (let index = 0; index < 10; index++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    this.emailList[index] = response.data.response;

                    if (index == 10) {
                        this.listIsFull = true;
                    }
                }
                )
        }
        console.log(this.emailList)
    },

})