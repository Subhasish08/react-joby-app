import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = props => {
  const onDirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p className="home-paragraph">
          Millions of people are searching for jobs,salary information , company
          reviews.Find the job that fits tour abilities and potential.
        </p>
        <Link className="retry-btn-link" to="/jobs">
          <button
            className="home-job-buttons"
            type="button"
            onClick={onDirectToJobs}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
