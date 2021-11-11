import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Conferencias = () => (
  <Layout>
    <Seo title="Home" />

    <div className="hero-gradient pb-8 px-8 pt-44 w-full">
      <div className="max-w-5xl w-full flex mx-auto relative">
        <div className="md:justify-center md:w-7/12 md:py-15 z-20">
          <h1 className="text-orange font-Arturito-Slab font-bold text-38px leading-50px">
            Bloque 01
          </h1>
          <h2 className="font-Arturito-Slab font-bold text-65px leading-50px">
            Intro
          </h2>
          <span className="mt-6 block">
            Bloque de bienvenida al evento e introducción al mundo crypto.{" "}
          </span>
        </div>
      </div>
    </div>
    <div className="px-8 w-full">
      <div className="max-w-5xl w-full space-y-2 mx-auto">
        <h3 className="title">Angelo Antonelli</h3>
        <h4 className="uppercase tracking-widest text-sky-blue">
          CEO - Human Voices DAO
        </h4>
        <span className="block">
          Nam magna pulvinar dui diam curabitur scelerisque vulputate viverra.
          Elementum sed mattis semper arcu pulvinar cras diam etiam.
        </span>
      </div>
    </div>

    <div className="pb-8 px-8 pt-20 w-full">
      <div className="max-w-5xl w-full flex mx-auto">
        <div className="">
          <h1 className="text-orange font-Arturito-Slab font-bold text-38px leading-50px">
            Bloque 02
          </h1>
          <h2 className="font-Arturito-Slab font-bold text-65px leading-50px">
            DeFi
          </h2>
          <span className="mt-6 block">
            Bloque relacionado a las finanzas decentralizadas, organizaciones,
            DAOs y modelos de negocios.
          </span>
        </div>
      </div>
    </div>
    <div className="px-8 w-full">
      <div className="max-w-5xl w-full space-y-2 mx-auto">
        <h3 className="title">Angelo Antonelli</h3>
        <h4 className="uppercase tracking-widest text-sky-blue">
          CEO - Human Voices DAO
        </h4>
        <span className="block">
          Nam magna pulvinar dui diam curabitur scelerisque vulputate viverra.
          Elementum sed mattis semper arcu pulvinar cras diam etiam.
        </span>
      </div>
    </div>

    <div className="pb-8 px-8 pt-20 w-full">
      <div className="max-w-5xl w-full flex mx-auto">
        <div className="">
          <h1 className="text-orange font-Arturito-Slab font-bold text-38px leading-50px">
            Bloque 03
          </h1>
          <h2 className="font-Arturito-Slab font-bold text-65px leading-50px">
            NFTs
          </h2>
          <span className="mt-6 block">
            Bloque relacionado a los NFTs (non fungible tokens), crypto games y
            arte.
          </span>
        </div>
      </div>
    </div>
    <div className="px-8 w-full">
      <div className="max-w-5xl w-full space-y-2 mx-auto">
        <h3 className="title">Angelo Antonelli</h3>
        <h4 className="uppercase tracking-widest text-sky-blue">
          CEO - Human Voices DAO
        </h4>
        <span className="block">
          Nam magna pulvinar dui diam curabitur scelerisque vulputate viverra.
          Elementum sed mattis semper arcu pulvinar cras diam etiam.
        </span>
      </div>
    </div>

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

export default Conferencias
