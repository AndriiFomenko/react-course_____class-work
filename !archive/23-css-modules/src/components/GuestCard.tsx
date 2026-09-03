import styles from './GuestCard.module.css'

// GuestCard (колишній UserCardNoCss): тепер має ВЛАСНИЙ CSS-модуль
// GuestCard.module.css, тому "NoCss" з назви прибрано.
// Класи — camelCase, доступ через крапку (styles.guestCard, ...).
// І головне: стилі UserCard сюди більше не просочуються —
// обидва модулі живуть у своїх ізольованих областях,
// хоча структури карток схожі.
const GuestCard = () => {
  return (
    <article className={styles.guestCard}>
      <div className={styles.guestCardHeader}>
        <div className={styles.guestCardAvatar} aria-hidden="true">
          BT
        </div>
        <div>
          <h2 className={styles.guestCardName}>Bogdan Tkachenko</h2>
          <p className={styles.guestCardRole}>Backend Developer</p>
        </div>
      </div>
      <dl className={styles.guestCardStats}>
        <div className={styles.guestCardStat}>
          <dt className={styles.guestCardStatLabel}>posts</dt>
          <dd className={styles.guestCardStatValue}>57</dd>
        </div>
        <div className={styles.guestCardStat}>
          <dt className={styles.guestCardStatLabel}>followers</dt>
          <dd className={styles.guestCardStatValue}>1.8k</dd>
        </div>
        <div className={styles.guestCardStat}>
          <dt className={styles.guestCardStatLabel}>following</dt>
          <dd className={styles.guestCardStatValue}>204</dd>
        </div>
      </dl>
      <button className={styles.guestCardButton} type="button">
        Follow
      </button>
    </article>
  )
}

export default GuestCard
