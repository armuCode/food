import './CSS/Loader.css';

export default function Loader() {

  return (
    <div className='center'>
      <div className="spinner">
        <svg viewBox="25 25 50 50" className="circular">
            <circle strokeMiterlimit="10" strokeWidth="3" fill="none" r="20" cy="50" cx="50" className="path"></circle>
        </svg>
      </div>
    </div>
  )
}