import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";

export default function Carrinho() {
  return (
    <Area titulo="Carrinho" cor="green">
      <CarrinhoVazio />
    </Area>
  )
}