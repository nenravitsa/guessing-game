class GuessingGame {

    constructor() {
        this.low = 0;
        this.high = 0;
        this.mid = 0;
    }

    setRange(min, max) {
        this.low = min;
        this.high = max;
    }
    guess() {
        var result = Math.floor((this.high - this.low+1) / 2);
        return this.mid = result+this.low;
    }

    lower() {
        this.setRange(this.low, this.mid);
    }

    greater() {
        this.setRange(this.mid,this.high);
    }
}

module.exports = GuessingGame;
