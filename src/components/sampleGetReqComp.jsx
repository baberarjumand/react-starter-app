import { useEffect, useState } from "react";

function SampleGetReqComp() {
  //   let num1 = 0;
  //   const [num1, updateNum1] = useState(0);
  const [fact, setFact] = useState("");

  async function getRequest() {
    setFact("");
    // console.log("URL:", process.env.REACT_APP_RANDOM_CAT_FACT_URL);
    const response = await fetch(process.env.REACT_APP_RANDOM_CAT_FACT_URL);
    const jsonRes = await response.json();
    // console.log(jsonRes);
    setFact(jsonRes.fact);
  }

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div className="component-card">
      <p>GetReq Comp</p>
      {fact.length === 0 && <p>Loading...</p>}
      {fact.length > 0 && (
        <div>
          <p>
            Random Cat Fact:
            <br />
            {fact}
          </p>
        </div>
      )}
      <button
        onClick={getRequest}
        style={{ margin: "0 auto", display: "block" }}
      >
        Get New Fact
      </button>
    </div>
  );
}

export default SampleGetReqComp;
