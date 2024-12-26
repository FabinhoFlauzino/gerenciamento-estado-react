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
    setItens([...itens, { produto, quantidade: 1 }])
  }

  return (
    <CarrinhoContext.Provider value={{
      itens, adicionarItem
    }}>
      {props.children}
    </CarrinhoContext.Provider>
  )
}