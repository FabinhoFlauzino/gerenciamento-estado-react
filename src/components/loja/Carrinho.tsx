import { useContext } from "react";
import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";
import CarrinhoContext from "@/data/context/CarrinhoContext";
import ItemCarrinhoCard from "./ItemCarrinhoCard";
import Real from "@/utils/Real";
import { IconX } from "@tabler/icons-react";

export default function Carrinho() {
  const { itens, valorTotal, limparCarrinho } = useContext(CarrinhoContext)

  return (
    <Area titulo="Carrinho" cor="green" sumario={Real.format(valorTotal)}>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {itens.length === 0 ? (
          <CarrinhoVazio />

        ) : (
          itens.map(item => (
            <ItemCarrinhoCard key={item.produto.id} item={item} />
          ))
        )}


      </div>
      {
        itens.length > 0 && (
          <button className="btn-danger flex gap-2 justify-center items-center w-28" onClick={limparCarrinho}>
            <IconX /> Limpar
          </button>)
      }
    </Area>
  )
}