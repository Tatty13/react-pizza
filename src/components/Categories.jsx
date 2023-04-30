function Categories({ activeIdx, setActiveIdx }) {
  const categoryTypes = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

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
}

export default Categories;
