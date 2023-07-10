import Header from '../Header'
import './index.css'

const notFoundImageUrl =
  'https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png'

const NotFound = () => (
  <>
    <Header />
    <div className="not-fond-container">
      <div className="not-found-image-container">
        <img src={notFoundImageUrl} alt="not found" />
      </div>
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
