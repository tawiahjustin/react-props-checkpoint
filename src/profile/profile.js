import React from 'react'
export default function Profile(props) {
  const bioStyle = {
    backgroundColor: 'DodgerBlue',
    padding: '20px',
    fontSize: '25px',
    color: 'white',
    borderRadius: '5px',
  }
  const buttonStyle = {
    fontSize: '20px',
    padding: '10px',
    margin: '20px',
    width: '10rem',
    borderRadius: '5px',
    alignSelf: 'center',
  }
  return (
    <>
      <h1>Profile</h1>
      <h3 style={{ marginBottom: '50px' }}>{props.profession}</h3>

      <div className='profile'>{props.children}</div>
      <button onClick={props.displayProfile} style={buttonStyle}>
        Click for more{' '}
      </button>
      <div style={bioStyle}>{props.bio}</div>
      <h2 style={{ margin: '30px' }}>Details</h2>
      <h3>Name :</h3>
      <p> {props.fullName}</p>
      <h3>Age :</h3>
      <p>23 years</p>
      <h3>Location :</h3>
      <p>Abidjan, Ivory Coast</p>
    </>
  )
}

// default props
Profile.defaultProps = {
  fullName: 'Justin Tawiah',
  profession: 'Software Developer',
}
