import React from "react"
import PropTypes from "prop-types"


//import Header from "./header"
import "./bootstrap.min.css"
import "./layout.css"
import Navbar from "./navbar"
import Footer from "./footer"
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
