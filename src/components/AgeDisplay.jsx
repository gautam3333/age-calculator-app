export default function AgeDisplay({ ageYear, ageMonth, ageDays }) {
  return (
    <article className='age_box'>
      <p>
        <span>{ageYear === 0 ? '_ _' : ageYear}</span>&nbsp;years
      </p>
      <p>
        <span>{ageMonth === 0 ? '_ _' : ageMonth}</span>&nbsp;months
      </p>
      <p>
        <span>{ageDays === 0 ? '_ _' : ageDays}</span>&nbsp;days
      </p>
    </article>
  );
}
