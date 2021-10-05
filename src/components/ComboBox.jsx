import React from 'react'
import Label from './Label'

const ComboBox = ({label,opicao}) => {
    return (
        <div className="pt-2">
            <Label value={label + ":"}/>
            <select className="w-full bg-white px-1">
                <option  value="" key="">{opicao[0]}</option>
            </select>
        </div>
    )
}

export default ComboBox
