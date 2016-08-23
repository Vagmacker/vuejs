var app = new Vue({
    el: '#app',
    data: {
        books: []
    },
    methods: {

    },

    ready:function () {
        var self = this;

        self.$http.get('data/books.json')
            .then(function (response) {
                console.log('deu certo');
                self.books = response.data;
            }).error(function () {
                console.log('Deu errado');
        });
    }
});