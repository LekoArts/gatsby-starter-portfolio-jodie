// Displaying data in a Gatsby component
import React from "react"

const MyComponent = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default MyComponent
