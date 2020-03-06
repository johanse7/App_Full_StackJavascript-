import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import TextList from '../components/TextList';
import { WrapperApp } from '../assest/styles/components/App';
import { spinnerCss } from '../assest/styles/components/General/Spinner';
import { FadeLoader } from 'react-spinners';

const PostTextContainer = () => {

    const processText = useSelector(({ processText }) =>
        processText,

    );
    return (
        <WrapperApp>

            <Header>
                <h1>App test JavaScript full Stack</h1>
            </Header>
            <Form />
            <TextList texts={processText.texts} />
            <FadeLoader
                css={spinnerCss}
                size={150}
                color={"#123abc"}
                loading={processText.isFetching}
            />

        </WrapperApp>
    );
}

export default PostTextContainer;