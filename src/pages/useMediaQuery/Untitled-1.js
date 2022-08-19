const mqls = {
  min_Width: '400px',
  min_Height: '400px',
  max_Width: '600px',
  max_Height: '600px',
}

Object.entries(mqls).forEach((entry) => {
  const [key, value] = entry
  const screen = key.replace('_', '-') + ':'
  //const mql = window.matchMedia(`(${screen}${value})`)
  //mql.addEventListener('change', func())
  console.log(screen)
})
