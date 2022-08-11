import './style.css'
import { PostsProvider } from '../../contexts/PostsProvider/index'
import { Posts } from '../../components/Posts'
function Refatorando() {
  return (
    <>
      <div>
        <PostsProvider>
          <header className='App-header'>
            <Posts />
          </header>
        </PostsProvider>
      </div>
    </>
  )
}

export default Refatorando
