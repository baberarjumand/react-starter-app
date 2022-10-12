import "./sampleCompA.css";

function SampleCompA(props) {
  return (
    <div className="component-card">
      <p>Hello World from CompA!</p>
      <p>{props.message}</p>
    </div>
  );
}

export default SampleCompA;
