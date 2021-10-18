import './styles.scss';

export default function Welcome() {
  
  return (
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">
            Hello
          </p>
          
          <ul className="content__container__list">
            <li className="content__container__list__item">world !</li>
            <li className="content__container__list__item">everybody !</li>
          </ul>
        </div>
      </div>
  );
}
