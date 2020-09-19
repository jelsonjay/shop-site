import React from "react"
import Hero from "gatsby-background-image"

export default function hero({ img, styleClass, title, children }) {
  return (
    <Hero className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </Hero>
  )
}

hero.defaultPros = {
  title: "Hello world",
  styleClass: "bg",
}
