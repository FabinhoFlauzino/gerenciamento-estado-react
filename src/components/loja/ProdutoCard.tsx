import Produto from "@/data/model/Produto"
import Real from "@/utils/Real"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import Image from "next/image"

interface ProdutoCardProps {
  produto: Produto
}

export default function ProdutoCard({ produto }: ProdutoCardProps) {
  return (
    <div className="flex flex-col gap-3 p-2 rounded-md overflow-hidden bg-zinc-950">
      <Image
        src={produto.imagem}
        alt="Imagem do Produto"
        width={300}
        height={150}
        className="rounded-md"
      />
      <div className="flex justify-between items-center px-4">
        <span className="font-black text-xl">{produto.nome}</span>
        <span className="text-green-300">{Real.format(produto.preco)}</span>
      </div>
      <p className="px-4 text-sm text-zinc-400">{produto.descricao}</p>
      <button className="flex justify-center gap-2 btn-info"><IconShoppingCartPlus /> Adicionar</button>
    </div>
  )
}