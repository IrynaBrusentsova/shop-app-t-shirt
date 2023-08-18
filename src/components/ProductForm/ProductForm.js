
import styles from './ProductForm.module.scss';
import Button from '../Button/Button.js';
import OptionColor from '../OptionColor/OptionColor.js';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types';

const ProductForm = ({ colors, sizes, currentColor, currentSize, setCurrentColor, setCurrentSize, handleSubmit }) => {

	return (
		<form onSubmit={handleSubmit}>
          <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
          <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
	);
};

ProductForm.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default ProductForm;