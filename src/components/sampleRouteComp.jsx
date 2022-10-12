import { useParams } from "react-router-dom";
// import { useEffect } from "react";

function SampleRouteComp() {
  // try navigating to 'localhost:3000/1' or 'localhost:3000/987'
  const { userId } = useParams();

//   useEffect(() => {
//     console.log("userId param: " + userId);
//   }, [userId]);

  //   function getRequest() {}

  return (
    <div className="component-card">
      <p>Route Comp</p>
      {/* <button onClick={getRequest}>Start GET request!</button> */}
      {userId && <p>UserId param: {userId}</p>}
      {!userId && <p>UserId param: none</p>}
    </div>
  );
}

export default SampleRouteComp;
