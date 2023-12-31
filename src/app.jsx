import { Hero } from './components/hero'
import { Demo } from './components/demo'
import './app.css'

const App = () => (
  <main>
    <div className="main">
      <div className="gradient" />
    </div>

    <div className="app">
      <Hero />
      <Demo />
    </div>
  </main>
)

export { App }