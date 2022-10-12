import { useState } from "react";
// import styles from "./sampleCompC.module.css";

function SampleCompC() {
  //   let num1 = 0;
  const [num1, updateNum1] = useState(0);

  const customStyles = { textAlign: "center" };

  function sampleFunc01() {
    updateNum1(num1 + 1);
    console.log(`I was pressed ${num1} times!`);
  }

  // useEffect(() => {
  //   console.log("CompC useEffect!");
  // }, []);

  return (
    <div className="component-card" style={customStyles}>
      <p>Here's CompC!</p>

      {num1 > 0 && <p>I was pressed {num1} times!</p>}

      <button onClick={sampleFunc01}>Press Me</button>
    </div>
  );
}

export default SampleCompC;
