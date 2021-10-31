import React from 'react'
import BotaoForm from './BotaoForm';
import ComboBox from './ComboBox';
import Input from './Input';

const FormEndereco = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log("aaaa");
    }

    return (
        <form className="w-full flex justify-between flex-wrap" onSubmit={handleSubmit}>
            <Input label="Cep" placeholder="XXXXX-XXX" alternativo={true} size="w-45" />
            <Input label="Complemento" placeholder="casa 1" alternativo={true} size="w-45" />
            <Input label="Logradouro" placeholder="Av. Paulista" alternativo={true} size="w-3/4" />
            <Input label="Número" placeholder="1500" alternativo={true} size="w-1/5" />
            <ComboBox estilo={2} label="Estado" opicao={["São Paulo"]} />
            <Input label="Cidade" placeholder="São Paulo" alternativo={true} size=" w-3/5" />
            <BotaoForm onClick={() => { }} text="enviar" />
        </form>
    )
}

export default FormEndereco
