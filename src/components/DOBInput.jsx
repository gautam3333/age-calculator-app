export default function DOBInput() {
  return (
    <form className='dobinput_box'>
      <div className='dobinput_form'>
        <div>
          <p className='date'>Day</p>
          <input type='text' placeholder='DD' />
          <p className='error_msg'>This field is required</p>
          <p className='error_msg'>Must be a valid day</p>
        </div>
        <div>
          <p className='date'>Month</p>
          <input type='text' placeholder='MM' />
          <p className='error_msg'>This field is required</p>
          <p className='error_msg'>Must be a valid month</p>
        </div>
        <div>
          <p className='date'>Year</p>
          <input type='text' placeholder='YYYY' />
          <p className='error_msg'>This field is required</p>
          <p className='error_msg'>Must be in the past</p>
        </div>
      </div>

      <button>
        <img src='/images/icon-arrow.svg' alt='icon arrow' />
      </button>
    </form>
  );
}
