import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from 'react'
// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';
const ComponentA = lazy(() => import('./ComponentA'));
const ComponentB = lazy(() => import('./ComponentB'));
function App() {
  return (
    <div className="App">
      <Suspense>
        <ComponentA />
        </Suspense>
      <Suspense fallback={<div>Loading.....</div>}>
        <ComponentB />
      </Suspense>
    </div>
  );
}

export default App;
