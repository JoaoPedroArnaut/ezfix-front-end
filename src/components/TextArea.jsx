import React from 'react'
import Label from './Label'

const TextArea = ({ label, placeholder, type, id, onChange, value, onBlur, maxLength }) => {
    return (
        <div className="pt-2">
            <Label value={label + ":"} />
            <textarea maxLength={maxLength} id={id} value={value} onBlur={onBlur} type={type} onChange={onChange} className="w-full p-1" placeholder={placeholder} cols="30" rows="10"></textarea>
        </div>
    )
}

export default TextArea
