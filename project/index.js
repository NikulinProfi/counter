const INITIAL_COUNTER = 0

const counter = createCounter(INITIAL_COUNTER)
const view = createView({
  onDecrementButtonClick: handleDecrementButtonClick,
  onIncrementButtonClick: handleIncrementButtonClick,
  onResetButtonClick: handleResetButtonClick,
})

// console.log(counter.get())

// counter.increment()
// console.log(counter.get())
const render = view.render({
  counter: counter.get(),
})

function handleIncrementButtonClick() {
  counter.increment()
  view.render({
    counter: counter.get(),
  })
}

function handleDecrementButtonClick() {
  counter.decrement()
  view.render({
    counter: counter.get(),
  })
}

function handleResetButtonClick() {
  counter.reset()
  view.render({
    counter: counter.get(),
  })
}
