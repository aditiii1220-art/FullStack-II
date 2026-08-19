import React from 'react'
import {Link} from 'react-router'
function NotFound() {
  return (
    <div>
      <h4>404 Not Found</h4>
      <Link to ="/">Go to Home</Link>
    </div>
  )
}

export default NotFound