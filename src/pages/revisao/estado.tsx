import Area from "@/components/template/Area";
import { useState } from "react";

export default function Estado() {
  const [texto, setTexto] = useState("")

  return (
    <div className="p-20">
      <Area titulo="Revisão Estado" cor="sky">
        <input
          type="text"
          className="input"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <span className="ml-5">{texto}</span>
      </Area>
    </div>
  )
}