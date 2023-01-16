function createCounter(INITIAL_COUNTER) {
  return {
    counter: INITIAL_COUNTER,
    get: function () {
      return this.counter
    },
    increment: function () {
      this.counter++
    },
    decrement: function () {
      this.counter--
    },
    reset: function () {
      this.counter = INITIAL_COUNTER
    },
  }
}
