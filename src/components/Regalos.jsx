import React from "react";
import { connect } from "react-redux";
import { createGift, removeAll, removeGift } from "../actions";
import store from "../store";
import styles from "./styles.module.css";
import Item from "./li";
import Error from "./Error";

//Funcion principal
///

function Regalos({ gifts }) {
  const [input, setInput] = React.useState({ value: "", error: false });

  const giftDespatcher = function () {
    if (input.value) {
      console.log("input.value SI TIENE ", input.value);
      store.dispatch(createGift(input.value));
      setInput({ value: "", error: false });
    } else setInput({ ...input.value, error: true });
  };
  const onChangeHandler = (e) => setInput({ ...input, value: e.target.value });
  return (
    <div className={styles.regalos}>
      <header>
        <h1>Regalos</h1>

        <hr />
        {/* -----------Input principal-------------- */}
        <div className={styles.divInput}>
          <input
            autoFocus
            className={styles.input}
            type="text"
            placeholder="Agrega tu deseo.."
            value={input.value}
            onChange={onChangeHandler}
            onKeyDown={(e) => e.key === "Enter" && giftDespatcher()}
          />
          {console.log("estado local", input)}

          <input
            className={styles.input2}
            type="submit"
            value="Agregar"
            onClick={giftDespatcher}
          />
        </div>
        {!input.error ? null : <Error />}
      </header>
      {/* Mapeo ----------------*/}
      <ul className={styles.ul}>
        {gifts.map((g) => {
          return (
            <React.Fragment>
              <Item
                key={g.id}
                id={g.id}
                className={styles.li}
                content={g.gift}
                removeGift={removeGift}
              />
              <button
                key={g.gift}
                className={styles.equis}
                onClick={() => store.dispatch(removeGift(g.id))}
              >
                X
              </button>
            </React.Fragment>
          );
        })}
      </ul>
      <button
        className={styles.limpiar}
        onClick={() => store.dispatch(removeAll())}
      >
        Remove All
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    gifts: state.gifts,
  };
};
export default connect(mapStateToProps)(Regalos);
