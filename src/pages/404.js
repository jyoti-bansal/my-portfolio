import React from "react"
import { Link } from "gatsby"

const Error = () => {
  return (
    <div>
      <main className="error-page">
        <div className="error-container">
          <h1>oops it's a dead end</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Error
