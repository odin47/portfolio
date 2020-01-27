import React from "react"

const Portlet = ({ title, subTitle, details }) => {
  return (
    <div className="portlet-container">
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{details}</p>
    </div>
  )
}

export default Portlet
