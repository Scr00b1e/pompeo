import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={350}
    height={450}
    viewBox="0 0 350 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="5" y="10" rx="0" ry="0" width="334" height="343" /> 
    <rect x="9" y="375" rx="0" ry="0" width="60" height="19" /> 
    <rect x="8" y="412" rx="0" ry="0" width="89" height="25" /> 
    <rect x="234" y="401" rx="0" ry="0" width="101" height="38" />
  </ContentLoader>
)

export default Skeleton
