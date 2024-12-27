import CarrinhoContext from "@/data/context/CarrinhoContext"
import ItemCarrinho from "@/data/model/ItemCarrinho"
import Real from "@/utils/Real"
import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useContext } from "react"

interface ItemCarrinhoCardProps {
  item: ItemCarrinho
}

export default function ItemCarrinhoCard({ item }: ItemCarrinhoCardProps) {
  const { adicionarItem, removerItem } = useContext(CarrinhoContext)

  return (
    <div className="flex items-center bg-black rounded-md p-2 gap-5">
      <span>{item.produto.nome}</span>
      <div className="flex item-center gap-2">
        <button className="flex justify-center items-center h-5 w-5 bg-red-500 rounded-sm"
          onClick={() => removerItem(item.produto)}
        >
          <IconMinus />
        </button>
        <span>{item.quantidade}</span>
        <button className="flex justify-center items-center h-5 w-5 bg-green-500 rounded-sm"
          onClick={() => adicionarItem(item.produto)}
        >
          <IconPlus />
        </button>
      </div>
      <div className="bg-blue-500 rounded-sm p-1 font-black">
        {Real.format(item.produto.preco * item.quantidade)}
      </div>
    </div>
  )
}