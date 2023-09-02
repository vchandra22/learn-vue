const app = Vue.createApp({
    //menampilkan template berupa html dari vue
    // template: '<h2>This is template from vue!</h2>'

    //menampilkan data dinamis dari vue
    data() {
        return {
            title: 'How to Became Success Programmer',
            author: 'Rendy Yulianto',
            age: 43
        }
    }
})

app.mount('#app')