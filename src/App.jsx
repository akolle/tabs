import { useEffect, useState } from 'react'
import JobInfo from './JobInfo'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    const res = await fetch(url)
    const newJobs = await res.json()
    setJobs(newJobs)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <section className="jobs-center">
      <JobInfo jobs={jobs} />
    </section>
  )
}
export default App
