import clsx from 'clsx';
import styles from "./OptionColor.module.scss";

const OptionColor = ({ colors = [], currentColor, setCurrentColor }) => {
  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <ul className={styles.choices}>
      {Array.isArray(colors) &&
        colors.map(color => (
          <li key={color}>
            <button
              type="button"
              onClick={() => {
                setCurrentColor(color);
              }}
              className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}
            ></button>
          </li>
        ))}
    </ul>
  );
};

OptionColor.defaultProps = {
  colors: [],
};

export default OptionColor;