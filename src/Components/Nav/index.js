import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <Link to="/"><h3>Logo</h3></Link>
        <ul>
            <Link to="/test">
              <li>Test</li>
            </Link>
            <Link to="/test2">
              <li>Test 2</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
