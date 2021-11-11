import * as React from "react"
import addMultiplyOrange from "../images/hero-vectors/add-multiply-orange.svg"
import addMultiply from "../images/hero-vectors/add-multiply.svg"
import arrows from "../images/hero-vectors/arrows.svg"
import circle from "../images/hero-vectors/circle.svg"
import grid from "../images/hero-vectors/grid.svg"
import linesOrange from "../images/hero-vectors/lines-orange.svg"
import linesWhite from "../images/hero-vectors/lines-white.svg"
import triangleDotsBlue from "../images/hero-vectors/triangle-dots-blue.svg"
import triangleDots from "../images/hero-vectors/triangle-dots.svg"
import web from "../images/hero-vectors/web.svg"
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
      <div className="max-w-5xl w-full flex mx-auto relative">
        {/* Vectors on mobile */}
        <img
          src={linesOrange}
          alt="lines"
          className="absolute -top-148px md:hidden"
        />
        <img
          src={arrows}
          alt="arrows"
          className="absolute right-16 rotate-90 transform -top-20 w-4 md:hidden"
        />
        <img
          src={addMultiplyOrange}
          alt="add"
          className="absolute -bottom-12  right-10 w-16 transform rotate-90 z-10 md:hidden"
        />
        <img
          src={triangleDotsBlue}
          alt="triangle"
          className="absolute -bottom-12 right-0 w-12 md:hidden"
        />
        <img
          src={web}
          alt="web"
          className="absolute right-4 -top-28 w-16 md:w-64 md:right-8 md:top-16 z-20"
        />
        {/* Vectors on desktop */}
        <img
          src={triangleDots}
          alt="triangle white"
          className="absolute -top-12 right-0 hidden md:block"
        />
        <img
          src={circle}
          alt="circle"
          className="absolute right-0 bottom-0 w-44 z-10 hidden md:block"
        />
        <img
          src={grid}
          alt="grid"
          className="absolute right-44 bottom-0 w-36 mb-4 mr-10 z-10 hidden md:block"
        />
        <img
          src={addMultiply}
          alt="multiply"
          className="absolute right-44 bottom-0 w-36 mb-4 mr-16 z-10 hidden md:block"
        />
        <img
          src={linesWhite}
          alt="multiply"
          className="absolute right-44 top-0 w-36 mb-4 mr-16 z-10 hidden lg:block"
        />

        <div className="md:justify-center md:w-7/12 title md:main-title md:py-15 z-20">
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
  </Layout>
)

export default IndexPage
