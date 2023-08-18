

import styles from './Product.module.scss';
import Button from '../Button/Button';
import { useState, useMemo } from 'react';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';



const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);




const getPrice = () => {
  const foundSize = props.sizes.find (element => element.name === currentSize );
  return (props.basePrice + foundSize.additionalPrice);
};


useMemo(() => {
  getPrice();
}, [ currentColor, currentSize]);


const addToCart = (event) => {
  event.preventDefault();
  return (
    console.log ('Summary'),
    console.log('=========='),
    console.log ("Name:", props.title),
    console.log ("Price:",getPrice ()),
    console.log ("Size:", currentSize),
    console.log ("Color:", currentColor)

  )
}

  const imageSrc = `${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`;




  return (
    <article className={styles.product}>
    
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={imageSrc} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span> 
        </header>
        <form>
        <div className={styles.colors}>
           <OptionSize sizes={props.sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
          <h3 className={styles.optionLabel}>Colors</h3>
            <OptionColor colors={props.colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
            
        </div>
          <Button onClick = {(event) => addToCart(event)} className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
 
  )
};

Product.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(PropTypes.object),
  basePrice: PropTypes.number,
  currentColor: PropTypes.string,
}

export default Product;

// ===
// 