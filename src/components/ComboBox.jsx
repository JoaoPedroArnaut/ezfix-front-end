import React from 'react'
import Label from './Label'

const ComboBox = ({ escuro, label, opicao }) => {
    if (escuro) {
        return (
            <div className="flex w-52">
                <div className="font-bold flex items-center mr-2">
                    <Label value={label + ":"} />
                </div>
                <select className="w-full text-white rounded-md bg-blue-dark px-1">
                    <option value="" key="">{opicao[0]}</option>
                </select>
            </div>
        )
    } else {
        return (
            <div className="pt-2">
                <Label value={label + ":"} />
                <select className="w-full bg-white px-1">
                    <option value="" key="">{opicao[0]}</option>
                </select>
            </div>
        )
    }

}

export default ComboBox
