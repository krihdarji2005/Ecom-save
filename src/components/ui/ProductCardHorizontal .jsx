import React, { useId, useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineDelete,
  AiFillTag,
} from "react-icons/ai";
import { useCart } from "../../context/FunctionalitiesContext";

export default function ProductCardHorizontal({item}) {
  const inputId = useId();
  const min = 1;
  const max = 10;
  const [value, setValue] = useState(min);
  const {cartDispatch}=useCart();
  const handleChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) val = min;
    setValue(Math.max(min, Math.min(max, val)));
  };
  const handleRemoveButton = (item) =>{
    cartDispatch(
      {
        type:"REMOVE_FROM_CART",
        payload:{item}
      }
    )
  }
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <a href="#">
          <img
            src={item.images?.[0] || item.images?.[1]}
            alt={item.title}
            style={styles.image}
          />
        </a>
      
      </div>

      <div style={styles.content}>
        <a href="#" style={styles.title}>
              {item.title}
        </a>

        <ul style={styles.detailsList}>
          <li>
            <span style={styles.detailLabel}>Category:</span> <strong>{item.category.name}</strong>
          </li>
          <li>
            <span style={styles.detailLabel}>Color:</span> <strong>Red</strong>
          </li>
        </ul>

        <div style={styles.bottomRow}>
          <span style={styles.price}>₹ {value*item.price}</span>

          <div style={styles.controlsWrapper}>
            <div style={styles.counter}>
              <button
                onClick={() => setValue((prev) => Math.max(min, prev - 1))}
                disabled={value <= min}
                style={{
                  ...styles.counterButton,
                  borderRight: "1px solid #ccc",
                }}
                aria-controls={inputId}
              >
                <AiOutlineMinus />
              </button>
              <input
                id={inputId}
                type="number"
                value={value}
                onChange={handleChange}
                style={styles.input}
                min={min}
                max={max}
              />
              <button
                onClick={() => setValue((prev) => Math.min(max, prev + 1))}
                disabled={value >= max}
                style={{
                  ...styles.counterButton,
                  borderLeft: "1px solid #ccc",
                }}
                aria-controls={inputId}
              >
                <AiOutlinePlus />
              </button>
            </div>

            <button style={styles.removeBtn} aria-label="Remove" onClick={() => handleRemoveButton(item)}>
              <AiOutlineDelete />
              <span style={{ marginLeft: 6 }} className="cartRemove">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    padding: "16px",
    borderBottom: "1px solid #ddd",
    maxWidth: "640px",
    minWidth: "320px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    borderRadius: "8px",
    gap: "16px",
    margin:"0 auto",
    marginTop: "1rem",
  },
  imageContainer: {
    position: "relative",
    width: "100px",
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  saleBadge: {
    position: "absolute",
    top: "6px",
    left: "6px",
    backgroundColor: "#E53935",
    color: "#fff",
    fontSize: "10px",
    padding: "2px 6px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    textDecoration: "none",
  },
  detailsList: {
    listStyle: "none",
    padding: 0,
    margin: "8px 0",
    fontSize: "13px",
    color: "#555",
  },
  detailLabel: {
    marginRight: "4px",
  },
  bottomRow: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
    gap: "12px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#111",
  },
  controlsWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginLeft: "auto",
  },
  counter: {
    display: "flex",
    border: "1px solid #ccc",
    borderRadius: "6px",
    overflow: "hidden",
  },
  counterButton: {
    padding: "6px 8px",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    border: "none",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "40px",
    textAlign: "center",
    border: "none",
    outline: "none",
    fontWeight: "500",
    fontSize: "14px",
  },
  removeBtn: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    color: "#666",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px 8px",
  },
};
