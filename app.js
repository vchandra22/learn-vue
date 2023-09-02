const app = Vue.createApp({
    //menampilkan template berupa html dari vue
    // template: '<h2>This is template from vue!</h2>'

    //menampilkan data dinamis dari vue
    data() {
        return {
            title: 'How to Became Good Programmer',
            author: 'Rendy Yulianto',
            age: 43
        }
    },
    //membuat method untuk mengganti data->title
    methods: {
        gantiJudul() {
            this.title = 'How to Write Clean Code'
        },
        gantiTitle(title) {
            this.title = title
        }
    }
})

app.mount('#app')