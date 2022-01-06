import counterReducer, { increment, decrement, incrementByAmount } from './counterSlice'

describe('counter reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  }
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).eql({
      value: 0,
      status: 'idle',
    })
  })

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment())
    expect(actual.value).eql(4)
  })

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement())
    expect(actual.value).eql(2)
  })

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2))
    expect(actual.value).eql(5)
  })
})