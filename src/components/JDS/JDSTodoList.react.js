// @flow strict

'use strict';

import * as React from 'react';
import { useState } from 'react';
import JDSTextInput from '~/components/JDS/JDSTextInput.react';

const TODOS: Array<string> = ['Stylex', 'Hot Reload'];

function TodoList(): React.MixedElement {
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
