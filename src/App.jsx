import './App.css'
import HeaderComponent from './components/HeaderComponent'
import HomePage from './components/HomePage'
import ProjectsSection from './components/ProjectsSection'
import Skills from './components/Skills'


function App() {

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <section className='main'>
      <HomePage></HomePage>
      <ProjectsSection></ProjectsSection>
      <Skills></Skills>
    </section>
    </>
  )
}

export default App
