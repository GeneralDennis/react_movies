import React from 'react'

const Radio = (props) => {
  const { name, type, handleFilter, stateType } = props;
  return (
    <label className='radio-label'>
      <input
        className="with-gap"
        name="type"
        type="radio"
        data-type={type}
        onChange={handleFilter}
        checked={stateType === type}
      />
      <span>{ name }</span>
    </label>
  )
}

export default Radio