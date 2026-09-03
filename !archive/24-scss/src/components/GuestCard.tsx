// GuestCard у №24: ті самі класи, що й у №23, але ЗВИЧАЙНИМИ РЯДКАМИ
// (className="guestCard") і БЕЗ імпорту стилів.
// Жодних CSS-модулів тут немає — всі класи лежать у глобальному
// src/index.css, підключеному один раз у main.tsx.
const GuestCard = () => {
  return (
    <article className="guestCard">
      <div className="guestCardHeader">
        <div className="guestCardAvatar" aria-hidden="true">
          BT
        </div>
        <div>
          <h2 className="guestCardName">Bogdan Tkachenko</h2>
          <p className="guestCardRole">Backend Developer</p>
        </div>
      </div>
      <dl className="guestCardStats">
        <div className="guestCardStat">
          <dt className="guestCardStatLabel">posts</dt>
          <dd className="guestCardStatValue">57</dd>
        </div>
        <div className="guestCardStat">
          <dt className="guestCardStatLabel">followers</dt>
          <dd className="guestCardStatValue">1.8k</dd>
        </div>
        <div className="guestCardStat">
          <dt className="guestCardStatLabel">following</dt>
          <dd className="guestCardStatValue">204</dd>
        </div>
      </dl>
      <button className="guestCardButton" type="button">
        Follow
      </button>
    </article>
  )
}

export default GuestCard
