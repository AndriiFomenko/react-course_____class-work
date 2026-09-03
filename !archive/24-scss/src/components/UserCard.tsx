// UserCard у №24: ті самі класи, що й у №23, але ЗВИЧАЙНИМИ РЯДКАМИ
// (className="userCard") і БЕЗ імпорту стилів.
// Жодних CSS-модулів тут немає — всі класи лежать у глобальному
// src/index.css, підключеному один раз у main.tsx.
const UserCard = () => {
  return (
    <article className="userCard">
      <div className="userCardAvatar" aria-hidden="true">
        UL
      </div>
      <h2 className="userCardName">Uliana Lysenko</h2>
      <p className="userCardRole">Frontend Developer</p>
      <dl className="userCardStats">
        <div className="userCardStat">
          <dt className="userCardStatLabel">posts</dt>
          <dd className="userCardStatValue">128</dd>
        </div>
        <div className="userCardStat">
          <dt className="userCardStatLabel">followers</dt>
          <dd className="userCardStatValue">4.2k</dd>
        </div>
        <div className="userCardStat">
          <dt className="userCardStatLabel">following</dt>
          <dd className="userCardStatValue">310</dd>
        </div>
      </dl>
      <button className="userCardButton" type="button">
        Follow
      </button>
    </article>
  )
}

export default UserCard
