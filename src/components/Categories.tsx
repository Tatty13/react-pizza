import categoryTypes from '../utils/categoryTypes';
import React from 'react';

type CategoriesProps = {
  activeIdx: number;
  setActiveIdx: any;
};

const Categories: React.FC<CategoriesProps> = ({ activeIdx, setActiveIdx }) => {
  const categoryElems = categoryTypes.map((category, i) => (
    <li
      key={i}
      onClick={() => setActiveIdx(i)}
      className={activeIdx === i ? 'active' : ''}>
      {category}
    </li>
  ));

  return (
    <div className='categories'>
      <ul>{categoryElems}</ul>
    </div>
  );
};

export default Categories;