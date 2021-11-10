import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="hero-gradient title pb-10 px-8 pt-44 ">
      CryptoVT busca potenciar y fomentar el uso de crypto. La modalidad del
      evento incluye tanto a quienes están inmersos en este mundo como a quienes
      quieran conocerlo.
    </section>
    <section className="pt-8 px-8 pb-18">
      <div className="flex flex-col justify-center items-center py-5 border-t border-b border-white space-y-1">
        <span className="title">Fecha</span>
        <span className="text-orange font-Arturito-Slab text-32px leading-35px uppercase tracking-widest-ultra">
          ??/??/21
        </span>
        <span className="uppercase leading-22px text-xs tracking-widest">
          Será descubierta el 12/21
        </span>
      </div>
    </section>
    <section>
      <div className="grid">
        <div className="flex flex-col py-10 px-8 block-one bg-block-one bg-cover">
          <span>Bloque 01</span>
          <span>Intro</span>
          <span>
            Bloque de bienvenida al evento e introducción al mundo crypto.{" "}
          </span>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
