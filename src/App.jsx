import logo from './logo.svg';
import styles from './App.module.css';
import Counter from './Counter';
import Schedule from './Schedule';

function App() {
  return (
    <div class={styles.App}>
      <h1> SolidJS App</h1>
      <Counter />
      <Schedule />
    </div>
  );
}

export default App;
