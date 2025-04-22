import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Nav from './components/navigation'
import Home from './pages/Home'

const App = () => {

    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    return (
        <ReactLenis root>
            <Nav></Nav>
            <Home></Home>
        </ReactLenis>
    )

}

export default App


