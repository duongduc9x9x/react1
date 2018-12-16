import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://cellphones.com.vn/sforum/wp-content/uploads/2018/04/566167-best-android-apps.jpg',
    altText: ' Java Programing',
   
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Java_keywords_highlighted.svg/1200px-Java_keywords_highlighted.svg.png',
    altText: 'Android programing',
    
  },
  {
    src: 'https://techtalk.vn/wp-content/uploads/2018/08/react-696x298.png',
    altText: 'JAVASCRIPT programing',
    
  }
];

const Example = (props) => <UncontrolledCarousel items={items} />;

export default Example;