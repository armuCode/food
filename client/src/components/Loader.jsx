import './CSS/Loader.css';

export default function Loader() {

  return (
    <div className='center'>
      <div class="spinner">
        <svg viewBox="25 25 50 50" class="circular">
            <circle stroke-miterlimit="10" stroke-width="3" fill="none" r="20" cy="50" cx="50" class="path"></circle>
        </svg>
      </div>
    </div>
  )
}