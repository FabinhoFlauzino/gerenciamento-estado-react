import { createContext, useState } from "react";
import ItemCarrinho from "../model/ItemCarrinho";
import Produto from "../model/Produto";

interface CarrinhoContextProps {
  itens: ItemCarrinho[]
  valorTotal: number
  adicionarItem: (produto: Produto) => void
  removerItem: (produto: Produto) => void
  limparCarrinho: () => void
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

  function removerItem(produto: Produto) {
    const novosItems = itens.map(item => {
      return item.produto.id === produto.id ? {
        ...item, quantidade: item.quantidade - 1
      } : item
    }).filter(item => item.quantidade > 0)
    setItens(novosItems)
  }

  function limparCarrinho(){
    setItens([])
  }

  function calcularValorTotal() {
    return itens.reduce((total: number, item: ItemCarrinho) => {
      return total + (item.quantidade * item.produto.preco)
    }, 0)
  }

  function ordernarItem(a: ItemCarrinho, b: ItemCarrinho) {
    return a.produto.nome > b.produto.nome ? 1 : -1
  }

  return (
    <CarrinhoContext.Provider value={{
      itens, 
      adicionarItem, 
      removerItem,
      limparCarrinho, 
      get valorTotal() {
        return calcularValorTotal()
      },
    }}>
      {props.children}
    </CarrinhoContext.Provider>
  )
}