import DOBInput from './components/DOBInput';
import AgeDisplay from './components/AgeDisplay';
import { useState } from 'react';

export default function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [ageYear, setAgeYear] = useState(0);
  const [ageMonth, setAgeMonth] = useState(0);
  const [ageDays, setAgeDays] = useState(0);

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
          setAgeYear={setAgeYear}
          setAgeMonth={setAgeMonth}
          setAgeDays={setAgeDays}
        />
        <AgeDisplay ageYear={ageYear} ageMonth={ageMonth} ageDays={ageDays} />
      </article>
    </main>
  );
}
