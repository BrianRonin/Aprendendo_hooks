import './style.css'
import { PostsProvider } from '../../contexts/PostsProvider/index'
import { CountProvider } from '../../contexts/CounterProvider/index'
import { Posts } from '../../components/Posts'
function Refatorando() {
  return (
    <>
      <div>
        <CountProvider>
          <PostsProvider>
            <header className='App-header'>
              <img
                width={'1000px'}
                src={require('./refatorando _coponents.png')}
                alt=''
              />
              <Posts />
            </header>
          </PostsProvider>
        </CountProvider>
      </div>
    </>
  )
}

export default Refatorando
