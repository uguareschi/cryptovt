import * as React from "react"
import { useState, useEffect } from "react"
import sponsorVMX from "../images/sponsor-vmx.svg"
import sponsorHV from "../images/sponsor-hv.svg"
import logo from "../images/brand/logo.svg"
import logoCVT from "../images/brand/logo-cvt.svg"
import discord from "../images/social/discord-footer.svg"
import instagram from "../images/social/instagram-footer.svg"
import arrows from "../images/arrows-orange.svg"
import personVoice from "../images/icons/person-voice.svg"
import ticket from "../images/icons/ticket.svg"
import flash from "../images/icons/flash.svg"
import discordIll from "../images/illustrations/discord.svg"
import discordDesktop from "../images/illustrations/discord-desktop.svg"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children, data }) => {
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
    <div className="min-h-screen flex flex-col justify-between">
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
            {/* <Link
              className="hover:text-white border-b-2 border-transparent hover:border-white"
              to="/conferencias"
              activeClassName="text-white border-white"
            >
              Conferencias
            </Link> */}
            <Link
              className="hover:text-white border-b-2 border-transparent hover:border-white"
              to="/participar"
              activeClassName="text-white border-white"
            >
              Participar
            </Link>
          </div>
        </div>
      </nav>
      <main className="mt-177px md:mt-151px w-full bg-deep-blue md:flex md:flex-col md:justify-center md:items-center">
        {children}
        <section className="px-8 py-20 md:py-32 w-full">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse md:justify-between md:mb-5">
              <img
                src={arrows}
                alt="vector arrows"
                className="self-end  mb-5 md:mb-0 md:self-center"
              />
              <span className="main-title mb-5 md:mb-0">Participar</span>
            </div>
            <div className="grid gap-5 md:grid-cols-3 font-Arturito-Slab font-bold text-22px leading-35px">
              <div className="relative">
                <div className="absolute w-full h-full flex justify-center items-center  bg-white bg-opacity-70 z-10 rounded-xl text-dark-orange  cursor-not-allowed">
                  Aún no disponibles
                </div>
                <a
                  className="flex flex-col justify-between items-center rounded-xl py-4 bg-orange w-full filter blur-1.5px"
                  href="mailto:hola.cvt@gmail.com?subject=Quiero exponer"
                >
                  <img src={ticket} alt="ticket" className="mx-auto mb-2" />
                  Obtener tickets (Gratis)
                </a>
              </div>
              <a
                href="mailto:hola.cvt@gmail.com?subject=Quiero ser Sponsor"
                className="flex flex-col justify-between items-center cursor-pointer rounded-xl bg-orange  py-4"
              >
                <img src={flash} alt="flash" className="mx-auto mb-2" />
                Quiero ser Sponsor
              </a>
              <a
                href="mailto:hola.cvt@gmail.com?subject=Quiero exponer"
                className="flex flex-col justify-between items-center cursor-pointer rounded-xl   bg-orange py-4"
              >
                <img
                  src={personVoice}
                  alt="person voice"
                  className="mx-auto mb-2"
                />
                Aplicar para exponer
              </a>
            </div>
          </div>
        </section>
        <section className="px-8 py-20 md:py-32 w-full">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse md:justify-between">
              <StaticImage
                src="../images/illustrations/iphone.png"
                alt="iphone"
                placeholder="tracedSVG"
                layout="fullWidth"
                className="w-full md:w-1/2"
                imgClassName="h-auto my-auto"
              />
              <div className="flex flex-col mt-5 md:mt-0 max-w-lg md:w-1/2">
                <span className="title md:main-title text-orange mb-3">
                  ¡Seguinos!
                </span>
                <span className="main-title md:text-65px md:leading-65px mb-3">
                  Seguinos en Instagram
                </span>
                <span className="md:subtitle">
                  Compartimos información de CryptoVT y datos del mundo crypto
                  en general.
                  <br /> ¡Nos vemos ahí!
                </span>
                <a
                  href="https://www.instagram.com/crypto_vt"
                  className="mt-6 rounded border border-white py-3 text-center md:w-min md:px-6"
                >
                  Seguir
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="px-8 py-20 md:py-32 w-full">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse md:justify-between">
              <img
                src={discordIll}
                alt="discord illustration"
                className="w-full block md:hidden"
              />
              <img
                src={discordDesktop}
                alt="discord desktop"
                className="hidden md:block w-1/2"
              />
              <div className="flex flex-col mt-5 md:mt-0 max-w-lg md:w-1/2">
                <span className="title md:main-title text-orange mb-3">
                  ¿Sabías?
                </span>
                <span className="main-title md:text-65px md:leading-65px mb-3">
                  Ahora podés unirte a la comunidad en Discord
                </span>
                <span className="md:subtitle">
                  Donde podes compartir tus sugerencias, conocer gente y conocer
                  todas las novedades antes que nadie.
                </span>
                <a
                  href="https://discord.gg/TMun5FtX7y"
                  className="mt-6 rounded border border-white py-3 text-center md:w-min md:px-6"
                >
                  Unirse
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="px-8 py-20 md:py-32 w-full">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col justify-center items-center">
              <h3 className="title text-sky-blue mb-8">Sponsors Oro</h3>
              <div className="flex flex-col md:flex-row md:gap-15">
                <a
                  href="https://humanvoices.xyz/"
                  className="flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={sponsorHV}
                    alt="sponsor HumanVoices"
                    className="mb-8 md:mb-0"
                  />
                </a>
                <a
                  href="https://voicemix.io/"
                  target="_blank"
                  className="flex"
                  rel="noreferrer"
                >
                  <img src={sponsorVMX} alt="sponsor Voicemix" />
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="bg-deep-blue py-10 px-8 flex flex-col justify-end flex-grow md:items-center w-full">
        <div className="flex justify-between mb-8 max-w-5xl w-full">
          <img src={logoCVT} alt="CVT" />
          <div className="flex space-x-5">
            <a href="https://discord.gg/TMun5FtX7y">
              <img src={discord} alt="discord" />
            </a>
            <a href="https://www.instagram.com/crypto_vt/">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>

        <span className="buttons block text-center md:text-right border-t border-white pt-2 max-w-5xl w-full">
          ©2021 CryptoVT. All rights reserved.
        </span>
      </footer>
    </div>
  )
}

export default Layout
