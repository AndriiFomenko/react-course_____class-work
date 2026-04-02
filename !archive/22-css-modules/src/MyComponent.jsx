import React from 'react';
import styles from "./MyComponent.module.css";

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className="text-center">MyComponent Hello world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      </div>
    </div>
  );
};

export default MyComponent;
