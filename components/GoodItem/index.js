import { useState } from 'react'
import styles from './GoodItem.module.scss'

export default function GoodItem(props) {
  const [isSelected, setIsSelected] = useState(false);
  
  function selectGood() {
    !props.good.available ? setIsSelected(false) : setIsSelected(!isSelected);
  }

  return (
    <div className={styles.container}>
      <div 
        className={ [styles.border, isSelected ? styles.selected : null].join(' ') }
        aria-disabled={!props.good.available}
        onClick={selectGood}
      >
        <div className={styles.card}>

          <img className={styles.card__image} src={`/images/${props.good.image}`} />

          <div className={styles.card__block}>
            <p className={styles.card__text}>Сказочное заморское яство</p>
            <h3 className={styles.card__name}>{props.good.name}</h3>
            <p className={styles.card__taste}>{props.good.taste}</p>
            <p className={styles.card__portions}>{props.good.portions} порций</p>
            <p className={styles.card__promo}>{props.good.promo}</p>
            {
              parseInt(props.good.promo) > 2 && 
              <p className={styles.card__promo}>
                заказчик доволен
              </p>
            }
            <div className={ [styles.card__weight, isSelected ? styles.selected : null].join(' ') }>
              {props.good.weight}
              <span>кг</span>
            </div>
          </div>

        </div>
      </div>
      
      { props.good.available ? (
        <p className={styles.text}>
          Чего сидишь? Порадуй котэ, {' '}
          <button 
            className={styles.btnBuy}
            onClick={selectGood}
          >купи.</button>
        </p> ) : 
        (
        <p className={styles.soldOut}>
          Печалька {props.good.taste} закончился.
        </p>
        )
      }
    </div>
  )
}