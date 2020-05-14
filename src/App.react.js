// @flow

'use strict';

import React, { Component, useState } from 'react';
import useInterval from './useInterval';
import './App.css';

const TODOS: Array<string> = ['Stylex', 'Flow', 'Hot Reload'];

function ToDoList() {
  const [todos, setTodos] = useState(TODOS);
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <ul>
        {todos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          id="inputBox"
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              const inputBox = ((document.getElementById(
                'inputBox'
              ): any): HTMLInputElement);
              if (!inputBox.value) {
                return;
              }
              setTodos([...todos, inputBox.value]);
              inputBox.value = '';
            }
          }}
        />
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={setCount.bind(null, count - 1)}>-1</button>
      <button onClick={setCount.bind(null, count + 1)}>+1</button>
      <span> Count: {count} </span>
    </div>
  );
}

class App extends Component<{}, { count: number }> {
  state = { count: 0 };

  render() {
    return (
      <>
        <Counter />
        <ToDoList />
      </>
    );
  }
}

export default App;
