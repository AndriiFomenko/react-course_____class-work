import styles from './UserCard.module.css'

console.log('styles', styles)

// UserCard тепер використовує CSS-МОДУЛЬ: класи беруться з обʼєкта
// `styles` через крапку (styles.userCard, styles.userCardAvatar, ...).
// Саме тому класи у файлі перейменовано в camelCase — запис
// styles.user-card-avatar синтаксично неможливий.
// На збірці кожен клас стане унікальним хешем і не витече назовні.
const UserCard = () => {
  return (
    <article className={styles.userCard}>
      <div className={styles.userCardAvatar} aria-hidden="true">
        UL
      </div>
      <h2 className={styles.userCardName}>Uliana Lysenko</h2>
      <p className={styles.userCardRole}>Frontend Developer</p>
      <dl className={styles.userCardStats}>
        <div className={styles.userCardStat}>
          <dt className={styles.userCardStatLabel}>posts</dt>
          <dd className={styles.userCardStatValue}>128</dd>
        </div>
        <div className={styles.userCardStat}>
          <dt className={styles.userCardStatLabel}>followers</dt>
          <dd className={styles.userCardStatValue}>4.2k</dd>
        </div>
        <div className={styles.userCardStat}>
          <dt className={styles.userCardStatLabel}>following</dt>
          <dd className={styles.userCardStatValue}>310</dd>
        </div>
      </dl>
      <button className={styles.userCardButton} type="button">
        Follow
      </button>
    </article>
  )
}

export default UserCard
