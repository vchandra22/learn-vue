const app = Vue.createApp({
    //menampilkan template berupa html dari vue
    // template: '<h2>This is template from vue!</h2>'

    //menampilkan data dinamis dari vue
    data() {
        return {
            google: "https://www.google.co.id",
            showBooks: true,
            title: 'How to Became Good Programmer',
            author: 'Rendy Yulianto',
            age: 43,
            x: 0,
            y: 0,

            // data buku dalam array
            books: [
                { judul: "Bad Habbits", author: "David J Alexander", img: "assets/images-1.jpeg", isFav: true },
                { judul: "Little teacher", author: "Roman Wepkins", img: "assets/images-2.jpeg", isFav: false },
                { judul: "Atomic Habbits", author: "Kyle Walker", img: "assets/images-3.jpeg", isFav: true }
            ]
        }
    },
    methods: {
        //membuat method untuk mengganti data->title
        gantiJudul() {
            this.title = 'How to Write Clean Code'
        },
        gantiTitle(title) {
            this.title = title
        },

        //Conditional rendering methods
        toogleShowBooks() {
            this.showBooks = !this.showBooks
        },

        // Mouse Events
        eventHandler(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },

        // Mouse Move Event
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },

        changeFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }

})

app.mount('#app')