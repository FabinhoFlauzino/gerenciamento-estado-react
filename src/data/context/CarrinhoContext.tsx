import { createContext, useState } from "react";
import ItemCarrinho from "../model/ItemCarrinho";
import Produto from "../model/Produto";

interface CarrinhoContextProps {
  itens: ItemCarrinho[]
  adicionarItem: (produto: Produto) => void
}

const CarrinhoContext = createContext<CarrinhoContextProps>({} as any)

export default CarrinhoContext

export function CarrinhoProvider(props: any) {
  const [itens, setItens] = useState<ItemCarrinho[]>([])

  function adicionarItem(produto: Produto) {
    const item = itens.find(item => item.produto.id === produto.id) ?? { produto, quantidade: 0 }
    const novoItem = { ...item, quantidade: item.quantidade + 1 }
    const outrosItens = itens.filter(item => item.produto.id !== produto.id)

    setItens([...outrosItens, novoItem].sort(ordernarItem))
  }

  function ordernarItem(a: ItemCarrinho, b: ItemCarrinho) {
    return a.produto.id - b.produto.id
  }

  return (
    <CarrinhoContext.Provider value={{
      itens, adicionarItem
    }}>
      {props.children}
    </CarrinhoContext.Provider>
  )
}