import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'



function App() {
  const [resumeData, setResumeData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5006/api/resume')
        setResumeData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  if (!resumeData) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header data={resumeData} />
      
      <main className="container mx-auto px-4 py-8">
        <About data={resumeData} />
        <Skills data={resumeData} />
        <Experience data={resumeData} />
        <Education data={resumeData} />
        <Projects data={resumeData} />
        <Contact />
        
      </main>
    </div>
  )
}

export default App