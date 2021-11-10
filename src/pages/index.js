import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const blocks = [
  {
    number: 1,
    name: "Intro",
    description:
      "Bloque de bienvenida al evento e introducción al mundo crypto.",
    classCSS: "block-one",
  },
  {
    number: 2,
    name: "DeFi",
    description:
      "Bloque relacionado a las finanzas decentralizadas, organizaciones, DAOs y modelos de negocios.",
    classCSS: "block-two",
  },
  {
    number: 3,
    name: "NFTs",
    description:
      "Bloque relacionado a los NFTs (non fungible tokens), crypto games y arte.",
    classCSS: "block-three",
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="hero-gradient pb-15 px-8 pt-44 w-full">
      <div className="max-w-5xl w-full flex mx-auto">
        <div className="md:justify-center md:w-7/12 title md:main-title md:py-15">
          CryptoVT busca potenciar y fomentar el uso de crypto. La modalidad del
          evento incluye tanto a quienes están inmersos en este mundo como a
          quienes quieran conocerlo.
        </div>
      </div>
    </section>
    <section className="pt-8 md:pt-15 md:px-0 px-8 pb-18 w-full">
      <div className="flex flex-col justify-center items-center py-5 border-t border-b border-white space-y-1 md:space-y-6 max-w-xl mx-auto">
        <span className="title md:main-title">Fecha</span>
        <span className="text-orange font-Arturito-Slab text-32px md:text-52px leading-35px uppercase tracking-widest-ultra">
          ??/??/21
        </span>
        <span className="uppercase leading-22px text-xs md:text-xl tracking-widest">
          Será descubierta el 12/21
        </span>
      </div>
    </section>
    <section>
      <div className="grid md:grid-cols-3 max-w-5xl mx-auto w-full">
        {blocks.map(block => {
          return (
            <div
              key={block.number}
              className={`${block.classCSS} flex flex-col justify-center items-center py-10 px-8 md:px-15 md:justify-start md:items-start bg-cover`}
            >
              <span className="text-orange title">Bloque 0{block.number}</span>
              <span className="font-Arturito-Slab leading-50px text-6xl mb-5">
                {block.name}
              </span>
              <span>{block.description}</span>
              <span className="self-end uppercase tracking-widest mt-3">
                ver más {`>`}
              </span>
            </div>
          )
        })}
      </div>
    </section>
    <section className="px-8 py-15 md:py-32 w-full">
      <div className="max-w-5xl mx-auto">
        <span className="text-center block title mb-5">Participar</span>
        <div className="grid gap-5 md:grid-cols-3">
          <button className="border rounded border-white py-3">
            Obtener tickets (Gratis)
          </button>
          <button className="border rounded border-white py-3">
            Quiero ser Sponsor
          </button>
          <button className="border rounded border-white py-3">
            Aplicar para exponer
          </button>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
