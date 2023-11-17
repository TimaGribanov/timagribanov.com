import { LANGUAGES } from '../constants/languages'

const Language = ({ handleLangs }) => {
  return (
    <div className='col d-flex justify-content-end align-items-center'>
      <select className='form-select border-dark' onChange={handleLangs}>
      {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
    </select>
    </div>
  )
}

export default Language