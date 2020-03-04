import React from 'react';

import TextListWrapper from '../assest/styles/components/TextListWrapper';

const TextList = ({ texts }) => {

  return (
    <TextListWrapper>
      <section className="items">
        {texts.map((item, index) => (
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