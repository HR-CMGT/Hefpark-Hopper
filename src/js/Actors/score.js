export class Score {

    score = 0
    getScore() {
        return this.score
    }

    setScore(value) {
        this.score = value
    }
    incrementScore() {
        this.score = this.score + 1
    }

    deleteScore() {
        this.score = 0
    }

}