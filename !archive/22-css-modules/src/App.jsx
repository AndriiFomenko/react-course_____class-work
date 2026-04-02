import React, { useState } from "react";
import MyComponent from "./MyComponent";
import styles from "./App.module.css";

const App = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  // Динамічні інлайнові стилі
  const inlineStyle = {
    color: isHighlighted ? "#ffffff" : "#0000ff",
    backgroundColor: isHighlighted ? "#000000" : "#ffff00",
    fontSize: "20px",
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  };

  const handleToggle = () => {
    setIsHighlighted((prev) => !prev);
  }

  return (
    <div style={inlineStyle} className={isHighlighted ? styles.highlight : ""}>
      <h1 className={styles.textCenter}>App Hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      
      <button 
        onClick={handleToggle}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#ffffff",
          border: "1px solid #cccccc",
          borderRadius: "5px",
          marginTop: "10px"
        }}
      >
        {!isHighlighted ? "Highlight component" : "Back to default"}
      </button>

      <MyComponent />

      <div style={{ 
        backgroundColor: "#ff0000", 
        color: "#ffffff", 
        textAlign: "center", 
        fontSize: "20px", 
        marginTop: "1rem", 
        marginBottom: "1rem",
        padding: "1rem"
      }}>
        Dynamic logic demo
      </div>
    </div>
  );
};

export default App;
