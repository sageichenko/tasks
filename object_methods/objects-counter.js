function Article() {
    this.created = new Date();
    Article.qty++;
    Article.last = this.created;
}

Article.qty = 0;
Article.last = new Date();
Article.showStats = function () {
    console.log(`Total: ${this.qty}, Last: ${this.last}`)
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)