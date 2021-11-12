import * as React from "react"
import heroConf from "../images/hero-vectors/hero-conf.svg"
import heroConfDesktop from "../images/hero-vectors/hero-conf-desktop.svg"
import Layout from "../components/layout"
import Seo from "../components/seo"

const blocks = [
  {
    number: 1,
    name: "Intro",
    description:
      "Bloque de bienvenida al evento e introducción al mundo crypto.",
    hostOne: "Angelo Antonelli",
    hostOneRole: "CEO - Human Voices DAO",
    hostOneDescription:
      "Nam magna pulvinar dui diam curabitur scelerisque vulputate viverra. Elementum sed mattis semper arcu pulvinar cras diam etiam.",
    hostTwo: "Angelo Antonelli",
    hostTwoRole: "CEO - Human Voices DAO",
    hostTwoDescription:
      "Nam magna pulvinar dui diam curabitur scelerisque vulputate viverra. Elementum sed mattis semper arcu pulvinar cras diam etiam.",
  },
  {
    number: 2,
    name: "DeFi",
    description:
      "Bloque relacionado a las finanzas decentralizadas, organizaciones, DAOs y modelos de negocios.",
    hostOne: "Angelo Antonelli",
    hostOneRole: "CEO - Human Voices DAO",
    hostOneDescription:
      "Nam magna pulvinar dui diam curabitur scelerisque vulputate viverra. Elementum sed mattis semper arcu pulvinar cras diam etiam.",
    hostTwo: "Angelo Antonelli",
    hostTwoRole: "CEO - Human Voices DAO",
    hostTwoDescription:
      "Nam magna pulvinar dui diam curabitur scelerisque vulputate viverra. Elementum sed mattis semper arcu pulvinar cras diam etiam.",
  },
  {
    number: 3,
    name: "NFTs",
    description:
      "Bloque relacionado a los NFTs (non fungible tokens), crypto games y arte.",
    hostOne: "Angelo Antonelli",
    hostOneRole: "CEO - Human Voices DAO",
    hostOneDescription:
      "Nam magna pulvinar dui diam curabitur scelerisque vulputate viverra. Elementum sed mattis semper arcu pulvinar cras diam etiam.",
    hostTwo: "Angelo Antonelli",
    hostTwoRole: "CEO - Human Voices DAO",
    hostTwoDescription:
      "Nam magna pulvinar dui diam curabitur scelerisque vulputate viverra. Elementum sed mattis semper arcu pulvinar cras diam etiam.",
  },
]

const Conferencias = () => (
  <Layout>
    <Seo title="Home" />

    {blocks.map(block => {
      return (
        <div
          key={block.number}
          className={`${
            block.number === 1 ? "hero-gradient pt-44" : "pt-15"
          } pb-8 px-8  w-full`}
        >
          <div className="max-w-5xl w-full grid lg:grid-flow-col mx-auto relative">
            {block.number === 1 && (
              <>
                <img
                  alt=""
                  src={heroConf}
                  className="absolute -top-148px md:hidden"
                />
                <img
                  alt=""
                  src={heroConfDesktop}
                  className="absolute -top-148px hidden md:block"
                />
              </>
            )}
            <div className="lg:w-405px lg:mr-5">
              <h1 className="text-orange font-Arturito-Slab font-bold text-40px leading-40px lg:text-44px lg:leading-48px">
                Bloque 0{block.number}
              </h1>
              <h2 className="font-Arturito-Slab font-bold text-65px leading-65px lg:text-180px lg:leading-140px">
                {block.name}
              </h2>
              <span className="mt-6 lg:mt-0 block lg:subtitle">
                {block.description}
              </span>
            </div>
            <div className="mt-8 lg:mt-0 w-full lg:self-end lg:px-5 lg:border-l-2 lg:border-white">
              <div className="max-w-5xl w-full space-y-2 mx-auto">
                <h3 className="title lg:main-title">{block.hostOne}</h3>
                <h4 className="uppercase tracking-widest text-sky-blue">
                  {block.hostOneRole}
                </h4>
                <span className="block">{block.hostOneDescription}</span>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 w-full lg:self-end">
              <div className="max-w-5xl w-full space-y-2 mx-auto">
                <h3 className="title lg:main-title">{block.hostTwo}</h3>
                <h4 className="uppercase tracking-widest text-sky-blue">
                  {block.hostTwoRole}
                </h4>
                <span className="block">{block.hostTwoDescription}</span>
              </div>
            </div>
          </div>
        </div>
      )
    })}
  </Layout>
)

export default Conferencias
