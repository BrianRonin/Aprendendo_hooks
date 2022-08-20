import { useCounterContext } from '../../contexts/ContextApiCounter'

export const Heading = ({ style }) => {
  const [state, actions] = useCounterContext()

  return <h1 style={{ fontSize: '60px', ...style }}>{state.counter}</h1>
}
