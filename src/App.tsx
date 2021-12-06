import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoDetail from './components/TodoDetail';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className="p-8">
        <h1 className="text-3xl mb-14">
          SWR Example
        </h1>
        <div className="flex flex-row" style={{height: "500px"}}>
          <div className="flex flex-col">
            <TodoList />
            <TodoInput />
          </div>
         <TodoDetail />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
