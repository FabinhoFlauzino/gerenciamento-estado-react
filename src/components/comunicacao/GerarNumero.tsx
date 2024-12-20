import Area from "../template/Area";
interface GerarNumeroProps {
  n1: number
  n2: number
  gerarNumero: (resultado: number) => void
}

export default function GerarNumero(props: GerarNumeroProps) {
  const min = Math.min(props.n1, props.n2)
  const max = Math.max(props.n1, props.n2)

  function gerar() {
    const aleatorio = Math.round(Math.random() * (max - min) + min)
    props.gerarNumero?.(aleatorio)
  }

  return (
    <Area titulo="Gerar Número" cor="blue">
      <div className="flex flex-col gap-5 items-center">

        <div className="flex gap-5 text-2xl">
          <span>Min: {min}</span>
          <span>Max: {max}</span>
        </div>

        <button onClick={gerar} className="btn">Gerar</button>
      </div>
    </Area>
  )
}