import React from "react"
import './navibar.css'
export default function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <ul class="nav-links">

          <div class="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Contact</a></li>
            <li class="signup">
              <a href="/">signup/inicon</a>
              <ul class="dropdown">
                <li><a href="/">sign up </a></li>
                <li><a href="/">sign in</a></li>

              </ul>
            </li>
          </div>
        </ul>
      </nav>

    </div>

  );
}