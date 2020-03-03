import React from 'react';
import { InputAddText } from '../assest/styles/components/General/Input';
import Button from '../assest/styles/components/General/Botton';
import FormWrapper from '../assest/styles/components/Form';

const Form = (props) => {
    return (
        <FormWrapper>
            <InputAddText />
            <Button color="#5C5C7F">
                Agregar
            </Button>
        </FormWrapper>
    );
};

export default Form;