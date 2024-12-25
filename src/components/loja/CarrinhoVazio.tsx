import { IconShoppingCart } from "@tabler/icons-react";

export default function CarrinhoVazio() {
  return (
    <div className="flex flex-col items-center gap-2 opacity-50">
      <IconShoppingCart size={60} stroke={1} />
      <span>Nenhum item no carrinho</span>
    </div>
  )
}