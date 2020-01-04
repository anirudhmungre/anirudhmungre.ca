class Sky {
    constructor(numStars) {
        this.stars = this.initStars(numStars);
        this.comet = new Comet;
    }

    initStars(numStars) {
        let stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }
        return stars;
    }

    refresh() {
        this.update();
        this.draw();
    }

    update() {
        this.stars.forEach(star => {
            star.update();
        });
    }

    draw() {
        this.stars.forEach(star => {
            star.draw();
        });
    }
}