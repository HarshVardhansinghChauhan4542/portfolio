import React from 'react'
import Intro from './components/JSX/Intro'
import AboutMe from './components/JSX/AboutMe'
import SocialMediaButtons from './components/JSX/SocialMediaButtons'
import SocialMediaDesigns from './components/JSX/SocialMediaDesigns'
import Blender from './components/JSX/Blender'
import Publication from './components/JSX/Publication'
import Frontend from './components/JSX/Frontend'


const App = () => {
  return (
    <>
      <Intro />
      <AboutMe />
      <SocialMediaButtons />
      <Frontend />
      <SocialMediaDesigns />
      <Blender />
      <Publication />
    </>
  )
}

export default App