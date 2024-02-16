import DOBInput from './components/DOBInput';
import AgeDisplay from './components/AgeDisplay';

export default function App() {
  return (
    <main>
      <article className='container'>
        <DOBInput />
        <AgeDisplay />
      </article>
    </main>
  );
}
