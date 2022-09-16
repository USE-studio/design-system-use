// import React from 'react';
// import './button.scss';
import './inputfield.scss';

interface InputFieldProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

// Primary UI component for user interaction
export const InputField = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: InputFieldProps) => {
  const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';
  return (
    <div
      className={['inputfield-wrapper', `inputfield-wrapper--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
    >
      {/* <label for="inputText">{label}</label> */}
      <label className="inputfield__label">{label}</label>
      <input type="text" id="inputText" placeholder="Write something"/>
      <label className="feedback-message">{label}</label>
    </div>
  );
};


// // import styles from './checkbox.module.scss'
// import './inputfield.scss'

// // Based on https://codepen.io/nikkz/pen/BzVBJo
// const Checkbox = ({ labelName }) => {
//   return (
//     <>
//       <div
//         className={['inputfield-wrapper', `inputfield-wrapper--${size}`, mode].join(' ')}
//       >
//         <input type="text" id="inputText" placeholder="Write something"/>
//         <label for="html">Label</label>
//       </div>
//     </>
//   )
// }

// export default Checkbox