import React from 'react'
import Label from './Label'

const ComboBox = ({ estilo, label, opicao, }) => {

    switch(estilo){
        case 1:
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

        case 2:
            return (
                <div className="pt-4 w-2/6">
                    <Label value={label + ":"} />
                    <select className="w-full rounded-lg bg-blue-light h-10 filter drop-shadow-md">
                        <option value="" key="">{opicao[0]}</option>
                    </select>
                </div>
            )
        default:
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
