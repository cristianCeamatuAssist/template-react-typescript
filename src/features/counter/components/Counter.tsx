import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
// features
import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, selectCount } from 'features/counter'

export const Counter = () => {
  // global state
  const count = useSelector(selectCount)

  // utils
  const dispatch = useDispatch()

  // local state
  const [incrementAmount, setIncrementAmount] = useState('2')

  // api

  // effects

  // handlers

  // variables
  const incrementValue = Number(incrementAmount) || 0

  return (
    <StyledDiv>
      <div className="row">
        <button className="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className="value">{count}</span>
        <button className="button" aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className="row">
        <input
          className="textbox"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className="button" onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button className="button asyncButton" onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button className="button" onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    > button {
      margin-left: 4px;
      margin-right: 8px;
    }
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  .value {
    font-size: 78px;
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 2px;
    font-family: 'Courier New', Courier, monospace;
  }

  .button {
    appearance: none;
    background: none;
    font-size: 32px;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    border: 2px solid transparent;
    color: rgb(112, 76, 182);
    padding-bottom: 4px;
    cursor: pointer;
    background-color: rgba(112, 76, 182, 0.1);
    border-radius: 2px;
    transition: all 0.15s;
    &:hover {
      border: 2px solid rgba(112, 76, 182, 0.4);
    }
    &:focus {
      border: 2px solid rgba(112, 76, 182, 0.4);
    }
    &:active {
      background-color: rgba(112, 76, 182, 0.2);
    }

    &.asyncButton {
      position: relative;

      &:after {
        content: '';
        background-color: rgba(112, 76, 182, 0.15);
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
        transition: width 1s linear, opacity 0.5s ease 1s;
      }
      &:active {
        &:after {
          width: 0%;
          opacity: 1;
          transition: 0s;
        }
      }
    }
  }

  .textbox {
    font-size: 32px;
    padding: 2px;
    width: 64px;
    text-align: center;
    margin-right: 4px;
  }
`
