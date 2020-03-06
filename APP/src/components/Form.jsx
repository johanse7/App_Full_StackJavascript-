import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { InputAddText } from '../assest/styles/components/General/Input';
import Button from '../assest/styles/components/General/Botton';
import FormWrapper from '../assest/styles/components/Form';
import { fetchProcessTokens } from '../redux/actions/processTextActions'

const Form = (props) => {
    const { register, handleSubmit, errors, reset } = useForm();
    const dispatch = useDispatch()
    const onSubmit = ({ text }) => {
        dispatch(fetchProcessTokens(text))
        reset()
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <InputAddText
                    name="text"
                    ref={register({ required: true })}
                    error={errors.text}
                />
                {errors.text &&
                    <p>Este campo es requerido</p>}

            </div>

            <Button 
               color="#5C5C7F"
               type="submit"
             
            >
                Agregar
            </Button>
        </FormWrapper>
    );
};

export default Form;