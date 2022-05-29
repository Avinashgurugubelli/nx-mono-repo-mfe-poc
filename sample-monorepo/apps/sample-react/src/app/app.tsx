// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
     <my-greeting title="NX React APP"></my-greeting>
      <NxWelcome title="sample-react" />
      <div />
    </>
  );
}

export default App;
