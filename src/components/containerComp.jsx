import "./containerComp.css";
import SampleCompA from "./sampleCompA";
import SampleCompB from "./sampleCompB";
import SampleCompC from "./sampleCompC";
import SampleGetReqComp from "./sampleGetReqComp";
import SampleRouteComp from "./sampleRouteComp";

function Container() {
  return (
    <div className="outer-container">
      <SampleCompA message="Sample Message01"></SampleCompA>
      <SampleCompB></SampleCompB>
      <SampleCompC></SampleCompC>
      <SampleGetReqComp></SampleGetReqComp>
      <SampleRouteComp></SampleRouteComp>
    </div>
  );
}

export default Container;
