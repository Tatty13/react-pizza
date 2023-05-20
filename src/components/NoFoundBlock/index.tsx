import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <p className={styles.smile}>🥺</p>
      <h1>Ничего не найдено</h1>
      <p className={styles.desc}>
        К сожалению, данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
}

export default NotFoundBlock;
