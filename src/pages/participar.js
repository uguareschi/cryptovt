import * as React from "react"
import heroPart from "../images/hero-vectors/hero-participar.svg"
import heroPartDesktop from "../images/hero-vectors/hero-participar-desktop.svg"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Participar = () => (
  <Layout>
    <Seo title="Participar" />
    <section className="hero-gradient px-8 pt-44 -mb-10 w-full">
      <div className="max-w-5xl w-full flex mx-auto relative">
        <img src={heroPart} alt="" className="absolute -top-148px md:hidden" />
        <img
          src={heroPartDesktop}
          alt=""
          className="absolute -top-148px md:block hidden"
        />
        <div className="md:justify-center md:w-7/12 title md:main-title z-20">
          <h2 className="text-orange font-Arturito-Slab text-40px leading-48px">
            ¡Ey!
          </h2>
          <h2 className="main-title">¿Querés ser parte de CryptoVT?</h2>
        </div>
      </div>
    </section>
  </Layout>
)

export default Participar
