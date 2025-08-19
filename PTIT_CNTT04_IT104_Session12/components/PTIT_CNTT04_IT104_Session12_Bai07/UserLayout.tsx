import React from 'react'
import Header from './Header';
import Menu from  './Menu';
import Navbar from './Navbar';
import Article from './Article';
import Main from './Main'

export default function UserLayout() {
  return (
    <div>
      {/* <div className="header"><Header></Header></div>
      <div className="navbar"><Navbar></Navbar></div> */}
      <Header></Header>
      <Navbar></Navbar>
      <div style={{
        display:"flex",
        justifyContent:"space-between"
      }}>
        <Menu></Menu>
        <Main></Main>
        <Article></Article>
      </div>
    </div>
  )
}
