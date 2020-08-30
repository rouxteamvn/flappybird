'use strict';

class Score {
    constructor(game = new Game()) {
        this.game = game;
        this.point = {
            value: 0,
            best: parseInt(localStorage.getItem("best")) || 0, // get item local storage
        };
        this.imageIndex = 0;
        this.audio = new Audio("audio/score.wav");

    }

    update() {
        const pipes = this.game.pipe.pipes;
        const bird = this.game.bird.birds;

        if (bird.x > pipes[0].x + pipes[0].w &&
            bird.x < pipes[0].x + pipes[0].w + 2) {
            this.audio.play();
            this.point.value++;
            this.point.best = Math.max(this.point.value, this.point.best);

            // save to local storage
            localStorage.setItem("best", this.point.best);
        }
    }

    draw() {
        const width = this.game.width;
        const context = this.game.context;
        const state = this.game.state;
        const currentState = this.game.currentState;
        const medalDone = this.game.announce.medalDone;

        context.fillStyle = "#FFF";
        context.strokeStyle = "#000";
        context.lineWidth = 2;

        if (currentState === state.play) {
            context.font = "50px Teko";
            context.fillText(this.point.value, width / 2 - 15, 50);
            context.strokeText(this.point.value, width / 2 - 15, 50);
        } else if (currentState === state.over && medalDone) {
            context.font = "25px Teko";
            context.fillText(this.point.value, 208, 214);
            context.strokeText(this.point.value, 208, 214);
            context.fillText(this.point.best, 208, 264);
            context.strokeText(this.point.best, 208, 264);
        }
    }
}