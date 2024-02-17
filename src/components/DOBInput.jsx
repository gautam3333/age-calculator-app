import { useState } from 'react';

export default function DOBInput({
  day,
  setDay,
  month,
  setMonth,
  year,
  setYear,
  setAgeYear,
  setAgeMonth,
  setAgeDays,
}) {
  const [error, setError] = useState(false);
  const date = new Date();
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth() + 1;
  let currentDay = date.getDate();

  function handleSubmit(e) {
    e.preventDefault();

    if (day.length === 0 || month.length === 0 || year.length === 0) {
      setError(true);
    }

    // computing the age in years, months and days
    let tempYear = currentYear - +year;
    setAgeYear(tempYear);

    if (+month > currentMonth) {
      tempYear = tempYear - 1;
      setAgeYear(tempYear);
    }

    if (+month === currentMonth && +day > currentDay) {
      tempYear = tempYear - 1;
      setAgeYear(tempYear);
    }

    setAgeMonth(Math.abs(+month - currentMonth));
    setAgeDays(Math.abs(currentDay - +day));
  }

  return (
    <form className='dobinput_box' onSubmit={handleSubmit}>
      <div className='dobinput_form'>
        <div>
          <p className='date'>Day</p>
          <input
            type='text'
            placeholder='DD'
            onChange={(e) => setDay(e.target.value)}
          />
          {error && day.length <= 0 && (
            <p className='error_msg'>This field is required</p>
          )}
          {(+day < 0 || +day > 31) && (
            <p className='error_msg'>Must be a valid day</p>
          )}
        </div>
        <div>
          <p className='date'>Month</p>
          <input
            type='text'
            placeholder='MM'
            onChange={(e) => setMonth(e.target.value)}
          />
          {error && month.length <= 0 && (
            <p className='error_msg'>This field is required</p>
          )}
          {(+month < 0 || +month > 12) && (
            <p className='error_msg'>Must be a valid month</p>
          )}
        </div>
        <div>
          <p className='date'>Year</p>
          <input
            type='text'
            placeholder='YYYY'
            onChange={(e) => setYear(e.target.value)}
          />
          {error && year.length <= 0 && (
            <p className='error_msg'>This field is required</p>
          )}
          {+year > new Date().getFullYear() && (
            <p className='error_msg'>Must be in the past</p>
          )}
          {+year < 0 && <p className='error_msg'>Invalid year</p>}
        </div>
      </div>

      <button>
        <img src='/images/icon-arrow.svg' alt='icon arrow' />
      </button>
    </form>
  );
}
