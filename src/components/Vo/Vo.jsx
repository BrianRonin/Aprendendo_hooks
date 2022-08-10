import { Pai } from '../Pai/Pai'
import { Filho } from '../Filho/Filho'
import { FilhoDoFilho } from '../FilhoDoFilho/FilhoDoFilho'
export const Vo = () => {
  return (
    <Pai name={'edu'}>
      <Filho name={'Rafael'}>
        <FilhoDoFilho name={'Jose'}></FilhoDoFilho>
      </Filho>
    </Pai>
  )
}
