import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function FullPizza() {
  const [pizza, setPizza] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPizza() {
      try {
        const { data } = await axios(
          `https://64428d4c76540ce2258f62b6.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (err) {
        console.log('err', err);
        navigate('/', { replace: true });
      }
    }

    getPizza();
  }, [id, navigate]);

  if (!pizza.title) {
    return (
      <div className='container'>
        <p>Загрузка...</p>
      </div>
    );
  }

  return (
    <div className='container'>
      <h4 className='pizza-block__title'>{pizza.title}</h4>
      <img
        className='pizza-block__image'
        src={pizza.imageUrl}
        alt='Pizza'
      />
      <p>Очень вкусная пицца</p>
      <p>{`Цена: ${pizza.price} ₽`}</p>
    </div>
  );
}

export default FullPizza;
