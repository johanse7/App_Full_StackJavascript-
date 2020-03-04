import React from 'react';
import { useForm } from 'react-hook-form';
import { InputAddText } from '../assest/styles/components/General/Input';
import Button from '../assest/styles/components/General/Botton';
import FormWrapper from '../assest/styles/components/Form';

const Form = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => console.log(data)

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <InputAddText
                name="text"
                ref={register({ required: true })}
            />
            {errors.text && 'Este campo es requerido'}
            <Button color="#5C5C7F" type="submit">
                Agregar
            </Button>
        </FormWrapper>
    );
};

export default Form;