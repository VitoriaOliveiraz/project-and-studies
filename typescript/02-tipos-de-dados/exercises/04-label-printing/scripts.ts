const etiquetasTech: { produto: string; lote: number; ano: number; qtd: number } = {
  produto: "CPU Dual Core 3.0GHZ",
  lote: 321,
  ano: 2022,
  qtd: 5
}

const etiquetasToys: { produto: string; lote: number; ano: number; qtd: number } = {
  produto: "Pula-pula",
  lote: 444,
  ano: 2026,
  qtd: 10
}

const formatLabel = (label: { produto: string; lote: number; ano: number; qtd: number }) => {
  const { lote, ano, qtd } = label
  const arrayLabels: string[] = []

  for (let index = 1; index < qtd; index++) {
    arrayLabels.push(`${lote}, ${ano}, ${index.toString().padStart(3,'0')}`)
  }
  return arrayLabels
}

console.log(formatLabel(etiquetasTech))
console.log(formatLabel(etiquetasToys))
