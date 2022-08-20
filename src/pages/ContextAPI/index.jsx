import { useEffect } from 'react'
import { useCounterContext } from '../../contexts/ContextApiCounter'
import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'
export default function ContextAPI() {
  const [state, actions] = useCounterContext()

  useEffect(() => {
    actions.increase()
  }, [actions])

  return (
    <>
      <div className='App-header'>
        <Heading />
        <div>
          <Button action={actions.increase}>increase</Button>
          <Button action={actions.decrease}>decrease</Button>
          <Button action={actions.reset}>reset</Button>
          <Button action={() => actions.setCounter({ counter: 10 })}>
            set 10
          </Button>
          <Button action={() => actions.setCounter({ counter: 100 })}>
            set 100
          </Button>
          <Button disabled={state.loading} action={actions.asyncIncrease}>
            async Increase
          </Button>
          <Button disabled={state.loading} action={actions.asyncError}>
            async Error
          </Button>
        </div>
      </div>
    </>
  )
}
