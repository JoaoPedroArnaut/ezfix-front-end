import React from 'react'
import Label from './Label'

const Input = ({ label, placeholder, alternativo, size, type, id}) => {

    if (alternativo) {

        let estilo = "pt-4 " + size;
        return (
            <div className={estilo}>
                <Label value={label + ":"} />
                <input id={id} type={type} className="w-full rounded-lg bg-blue-light p-4 h-10 filter drop-shadow-md" placeholder={placeholder} />
            </div>
        )
    } else {
        return (
            <div className="pt-2">
                <Label value={label + ":"} />
                <input type={type} className="w-full rounded-sm bg-white px-1" placeholder={placeholder} />
            </div>
        )
    }
}

export default Input
