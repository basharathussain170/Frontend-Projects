import styles from "./Display.module.css";

const Display = ({ displayValue }) => {

//  let allNumber=[...displayCalVal].map((number)=>{
//   value=num
//  })

  return (
    <>
      <input
        type="text"
        className={styles.display}
        readOnly
        value={displayValue}
      />
    </>
  );
};
export default Display;
