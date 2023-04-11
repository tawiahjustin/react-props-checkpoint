import image from '../src/image/my-profile.jpeg'
import Profile from './profile/profile'
import './App.css'
import { PropTypes } from 'prop-types'

function App() {
  const displayProfile = () => {
    alert('Tehua Justin')
  }
  return (
    <div className='App'>
      {/* props data*/}
      <Profile
        fullName='Tehua Justin'
        profession='I am Software Developer'
        bio='I am a creative Software Developer. I am an expert with Html, CSS, Javascript and React. I have two years experience working with these technologies and I have developed for a fair number of clients.'
        displayProfile={displayProfile}
      >
        {/*childreen props*/}
        <img src={image} />
      </Profile>
    </div>
  )
}
{
  /*app component proptypes*/
}
App.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  displayProfile: PropTypes.func,
}
export default App
