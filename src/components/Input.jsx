import React from 'react'
import Label from './Label'

const Input = ({label,placeholder}) => {
    return (
        <div className="pt-2">
            <Label value={label + ":"}/>
            <input className="w-full rounded-sm bg-white px-1" placeholder={placeholder} type="text" />
        </div>
    )
}

export default Input
