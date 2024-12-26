import Area from "../template/Area";
import ProdutoCard from "./ProdutoCard";
import { useContext } from "react";
import CatalogoContext from "@/data/context/CatalogoContext";
import Produto from "@/data/model/Produto";

export default function Catalogo() {

  const { produtos } = useContext(CatalogoContext)

  function renderizarProdutos() {
    return produtos.map((produto: Produto) => {
      return (
        <ProdutoCard key={produto.id} produto={produto} />
      )
    })
  }

  return (
    <Area titulo="Catalogo" cor="purple">
      <div className="container grid grid-cols-3 gap-5">
        {renderizarProdutos()}
      </div>
    </Area>
  )
}