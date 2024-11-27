import classes from "./Button.module.css";
// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick, isActive }) {
  console.log(classes);
  // передаем функцию в качестве параметра
  return (
    //добавляем класс active как параметр
    <button
      className={
        isActive ? `${classes.button} + " " + ${classes.active}` : classes.button
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}