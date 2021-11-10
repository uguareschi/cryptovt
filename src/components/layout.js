import * as React from "react"
import { useState, useEffect } from "react"

import logo from "../images/brand/logo.svg"
import logoCVT from "../images/brand/logo-cvt.svg"
import discord from "../images/social/discord-footer.svg"
import instagram from "../images/social/instagram-footer.svg"
import { Link } from "gatsby"

const Layout = ({ children, data }) => {
  console.log(data)
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
              activeClassName="text-white border-white"
            >
              Inicio
            </Link>
            <Link
              className="hover:text-white border-b-2 border-transparent hover:border-white"
              to="/conferencias"
              activeClassName="text-white border-white"
            >
              Conferencias
            </Link>
            <Link
              className="hover:text-white border-b-2 border-transparent hover:border-white"
              to="/contactos"
              activeClassName="text-white border-white"
            >
              Contactos
            </Link>
          </div>
        </div>
      </nav>
      <main className="mt-177px md:mt-151px w-full bg-deep-blue md:flex md:flex-col md:justify-center md:items-center">
        {children}
      </main>
      <footer className="bg-deep-blue py-10 px-8 md:flex md:flex-col md:justify-center md:items-center w-full">
        <div className="flex justify-between mb-8 max-w-5xl w-full">
          <img src={logoCVT} alt="CVT" />
          <div className="flex space-x-5">
            <Link to="https://discord.gg/TMun5FtX7y">
              <img src={discord} alt="discord" />
            </Link>
            <Link to="https://www.instagram.com/crypto_vt/">
              <img src={instagram} alt="instagram" />
            </Link>
          </div>
        </div>

        <span className="buttons block text-center md:text-right border-t border-white pt-2 max-w-5xl w-full">
          ©2021 CryptoVT. All rights reserved.
        </span>
      </footer>
    </>
  )
}

export default Layout
