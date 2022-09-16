// import styles from './checkbox.module.scss'
import './checkbox.scss'

// Based on https://codepen.io/nikkz/pen/BzVBJo
const Checkbox = ({ labelName }) => {
  return (
    <>
      <div className="form-group">
        <input type="checkbox" id="checkboxLabel" />
        <label htmlFor="html">Label</label>
      </div>
    </>
  )
}

export default Checkbox