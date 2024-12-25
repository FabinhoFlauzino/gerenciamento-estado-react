import produtos from "@/data/constants/produtos";
import Area from "../template/Area";
import ProdutoCard from "./ProdutoCard";

export default function Catalogo() {

  function renderizarProdutos() {
    return produtos.map(produto => {
      return (
        <ProdutoCard key={produto.id} produto={produto} />
      )
    })
  }

  return (
    <Area titulo="Catalogo" cor="purple">
      <div className="flex justify-around flex-wrap gap-4">
        {renderizarProdutos()}
      </div>
    </Area>
  )
}