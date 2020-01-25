import React from "react"

const Layout = ({ children }) => {
  return (
    <div id="layout-container">
      <header>
          <div id="header-left">
            <span>PD.</span>
          </div>
          <nav>
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Resume</li>
                  <li>Blog</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
      {children}
      <footer></footer>
    </div>
  )
}

export default Layout;
