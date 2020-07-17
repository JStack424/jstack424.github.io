// @flow strict

import React, { useState } from 'react';

import JDSTextInput from './JDSTextInput.react';

('use strict');

const TODOS: Array<string> = ['Stylex', 'Flow', 'Hot Reload'];

function TodoList() {
  const [todos, setTodos] = useState(TODOS);
  return (
    <div>
      <ul>
        {todos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <JDSTextInput onSubmit={(val) => setTodos([...todos, val])} />
    </div>
  );
}

export default TodoList;
