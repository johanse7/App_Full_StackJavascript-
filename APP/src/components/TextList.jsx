import React from 'react';
import TextListWrapper from '../assest/styles/components/TextListWrapper';
import Card from './Card';

const TextList = ({ texts }) => {

  return (
    <TextListWrapper>
      <section className="items">
        {texts.map((item, index) => (
          <Card
            key={`text-${index}`}
            text={item}
          >
          </Card>
        ))
        }
      </section>
    </TextListWrapper>
  );
};

export default TextList;