import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="0" y="265" rx="8" ry="8" width="280" height="19" /> 
    <rect x="0" y="305" rx="10" ry="10" width="280" height="88" /> 
    <rect x="-1" y="415" rx="10" ry="10" width="95" height="30" /> 
    <rect x="130" y="408" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;