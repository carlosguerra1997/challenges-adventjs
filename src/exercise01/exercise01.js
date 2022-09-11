const sheeps = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

const countSheeps = sheeps => {
  const sheepsFiltered = sheeps.filter(
    sheep => sheep.color === 'rojo' && 
    sheep.name.toLowerCase().includes('a') && 
    sheep.name.toLowerCase().includes('n')
  )
  return sheepsFiltered
}

countSheeps(sheeps)