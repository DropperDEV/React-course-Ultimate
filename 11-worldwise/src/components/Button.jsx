import styles from "./Button.module.css";

// eslint-disable-next-line react/prop-types
export default function Button({ children, action, type }) {
  return (
    <button onClick={action} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
