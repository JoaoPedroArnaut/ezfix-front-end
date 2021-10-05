import React from 'react'
import Label from './Label'

const TextArea = ({label,placeholder}) => {
    return (
        <div className="pt-2">
            <Label value={label + ":"}/>
            <textarea className="w-full p-1" placeholder={placeholder} cols="30" rows="10"></textarea>
        </div>
    )   
}

export default TextArea
