import { useContext } from "react";
import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";
import CarrinhoContext from "@/data/context/CarrinhoContext";
import ItemCarrinhoCard from "./ItemCarrinhoCard";

export default function Carrinho() {
  const { itens } = useContext(CarrinhoContext)

  return (
    <Area titulo="Carrinho" cor="green">
      <div className="flex flex-wrap justify-center gap-4">
        {itens.length === 0 ? (
          <CarrinhoVazio />

        ) : (
          itens.map(item => (
            <ItemCarrinhoCard key={item.produto.id} item={item} />
          ))
        )}
      </div>
    </Area>
  )
}