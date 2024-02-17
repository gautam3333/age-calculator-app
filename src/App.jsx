import DOBInput from './components/DOBInput';
import AgeDisplay from './components/AgeDisplay';
import { useState } from 'react';

export default function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  return (
    <main>
      <article className='container'>
        <DOBInput
          day={day}
          setDay={setDay}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
        <AgeDisplay />
      </article>
    </main>
  );
}
