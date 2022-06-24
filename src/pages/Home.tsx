import React from "react";
import { Footer } from "../components/Footer";
import CodeImg from "../assets/home_img.png";
import { Logo } from "../components/Logo";

export function Home() {
  return (
    <div className="bg-blur bg-cover bg-no-repeat">
      <div className="flex items-center justify-center gap-48 pt-20">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="text-4xl mt-4 leading-tight">
            Construa uma
            <span className="text-blue-500"> aplicação completa</span> <br /> do
            zero com
            <span className="text-blue-500"> React JS</span>
          </h1>
          <p className="mt-5 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-600 border-gray-500 rounded">
          <strong className="text-2xl block mb-6 ">Inscreva-se gratuitamente</strong>
          <form className="flex flex-col gap-3 w-full">
            <input placeholder="Seu nome completo" type="text" className="bg-gray-900 rounded px-5 h-14"/>
            <input placeholder="Seu e-mail" type="email" className="bg-gray-900 rounded px-5 h-14"/>

            <button className="block bg-green-500 mt-4 uppercase py-4 font-bold text-sm hover:bg-green-300 transition-colors"> Garantir minha vaga</button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center py-2">
        <img src={CodeImg} alt="" />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
