import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextListWrapper from '../assest/styles/components/TextListWrapper';

const TextList = (props) => {
  const processText = useSelector(({ processText }) => 
    processText,
  );
  return (
    <TextListWrapper>
      <section className="items">
        {processText.texts.map((item, index) => (
          <article
            className='card'
            key={`text-${index}`}
          >
            <p>{item}</p>
          </article>
        ))
        }
      </section>
    </TextListWrapper>
  );
};

export default TextList;