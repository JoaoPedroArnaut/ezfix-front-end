import React from 'react'
import Label from './Label'

const Input = ({ label, disabled, alternativoDois, placeholder, alternativo, size, type, id, onChange, value, onBlur, maxLength }) => {

    if (alternativo) {

        let estilo = "pt-4 " + size;
        return (
            <div className={estilo}>
                <Label value={label + ":"} />
                <input disabled={disabled} maxLength={maxLength} id={id} value={value} onBlur={onBlur} type={type} onChange={onChange} className="w-full rounded-lg bg-blue-light p-4 h-10 filter drop-shadow-md" placeholder={placeholder} />
            </div>
        )
    } else if (alternativoDois) {
        let estilo = "pt-4 " + size;
        return (
            <div className={estilo}>
                <Label value={label + ":"} />
                <input disabled={disabled} contentEditable={false} maxLength={maxLength} id={id} value={value} onBlur={onBlur} type={type} onChange={onChange} className={disabled ? "bg-gray" : "bg-white"} className="w-full rounded-lg p-4 h-10 filter drop-shadow-md" placeholder={placeholder} />
            </div>
        )

    }
    else {
        return (
            <div className="pt-2">
                <Label value={label + ":"} />
                <input maxLength={maxLength} id={id} value={value} onBlur={onBlur} type={type} onChange={onChange} className="w-full rounded-sm bg-white px-1" placeholder={placeholder} />
            </div>
        )
    }
}

export default Input
