import styles from './ErrorInfo.module.scss';

export function ErrorInfo() {
  return (
    <div className={styles.error}>
      <h2 className={styles.errorTitle}>
        Произошла ошибка <span>😕</span>
      </h2>
      <p className={styles.errorText}>
        К сожалению, не удалось загрузить пиццы.
      </p>
      <p className={styles.errorText}>Попробуйте повторить попытку познее.</p>
    </div>
  );
}
