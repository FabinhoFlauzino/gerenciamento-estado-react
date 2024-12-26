import Carrinho from "@/components/loja/Carrinho";
import Catalogo from "@/components/loja/Catalogo";
import { CatalogoProvider } from "@/data/context/CatalogoContext";

export default function Loja() {
  return (
    <CatalogoProvider>
      <div className="flex flex-col p-7 gap-4">
        <Carrinho />
        <Catalogo />
      </div>
    </CatalogoProvider>
  )
}