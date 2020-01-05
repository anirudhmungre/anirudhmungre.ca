class Sky {
    constructor(numStars) {
        this.stars = this.initStars(numStars);
        this.comet;

        var t = this;
        setInterval(function() { t.initComet(); }, 10000);
    }

    initStars(numStars) {
        let stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }
        return stars;
    }

    initComet() {
        delete this.comet;
        this.comet = new Comet(random(100, 120));
    }

    refresh() {
        this.update();
        this.draw();
    }

    update() {
        this.stars.forEach(star => {
            star.update();
        });
        if (this.comet) { this.comet.update(); }
    }

    draw() {
        this.stars.forEach(star => {
            star.draw();
        });
        if(this.comet) { this.comet.draw(); }
    }
}