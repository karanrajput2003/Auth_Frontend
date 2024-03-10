import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import homeimg from '../assets/559.jpg'

function Allcourse() {
  return (
    <>
      <Navbar />
      <h1 className='mt-10 mb-4 mx-14 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-6xl dark'>All Courses:</h1>
      <div className='flex flex-wrap'>
      <Card src={homeimg} title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." button="Read more" path="/student/details"/>
        <Card src={homeimg} title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." button="Read more" path="/student/details"/>
        <Card src={homeimg} title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." button="Read more" path="/student/details"/>
        <Card src={homeimg} title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." button="Read more" path="/student/details"/>
        <Card src={homeimg} title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." button="Read more" path="/student/details"/>
        <Card src={homeimg} title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." button="Read more" path="/student/details"/>
        <Card src={homeimg} title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." button="Read more" path="/student/details"/>
        <Card src={homeimg} title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." button="Read more" path="/student/details"/>
        <Card src={homeimg} title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." button="Read more" path="/student/details"/>
      </div>
      {/* <Card src={homeimg} /> */}

    </>
  )
}

export default Allcourse