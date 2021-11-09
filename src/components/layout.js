import * as React from "react"
import { useState, useEffect } from "react"

import logo from "../images/brand/logo.svg"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const [scrolling, setScrolling] = useState(true)
  const [scrollTop, setScrollTop] = useState(0)
  // Watch if scroll Down or Up
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset
      if (currentPosition > scrollTop && currentPosition > 180) {
        // downscroll code
        setScrolling(false)
      } else {
        // upscroll code
        setScrolling(true)
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition)
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [scrollTop])

  return (
    <>
      <nav
        className={`${
          !scrolling && "-translate-y-177px md:-translate-y-151px"
        } fixed top-0 z-40 w-full transform transition-transform ease-in-out duration-300 delay-500 bg-orange flex justify-center`}
      >
        <div className="mx-auto flex flex-col justify-center items-center mt-10 md:flex-row md:justify-between md:mx-10 md:my-10 max-w-5xl w-full">
          <Link to="/">
            <img src={logo} alt="Humanvoices" className="py-5 mb-6 md:mb-0" />
          </Link>

          <div className="space-x-4 font-Arturito-Slab font-bold text-17px text-nav-btn mb-5 md:mb-0">
            <Link
              to="/"
              className="hover:text-white border-b-2 border-transparent hover:border-white"
            >
              Inicio
            </Link>
            <Link
              className="hover:text-white border-b-2 border-transparent hover:border-white"
              to="/conferencias"
            >
              Conferencias
            </Link>
            <Link
              className="hover:text-white border-b-2 border-transparent hover:border-white"
              to="/contactos"
            >
              Contactos
            </Link>
          </div>
        </div>
      </nav>
      <main className="max-w-5xl mx-auto mt-177px md:mt-151px w-full">
        {children}
      </main>
      <footer className="mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:py-15">
          <div className="m-8 sm:mb-0 border-t border-white flex flex-col text-white sm:flex-row sm:items-center sm:justify-end sm:pt-4">
            <span className="buttons">
              ©2021 CryptoVT. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
