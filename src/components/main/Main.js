import React, {useState, useEffect} from 'react'
import './main.css'
import {iphones,burgers,books,cars,university,games,yt,Netflix,Google,pens,rubix,ps} from './index'

export default function Main() {

  const [counter, setcounter] = useState(0)

  function handlesec(){
    setcounter(counter+1)
  }


  useEffect(() => {
    setTimeout(handlesec, 1000);
  }, [counter])


  //-----------------------------------------------------------------------------------------//

  // Iphone
  const [iphonesmoney, setiphonesmoney] = useState(0)

  function handleiphone(){
    setiphonesmoney(iphonesmoney+(43960));
  }

  useEffect(() => {
    setTimeout(handleiphone, 250);
  }, [iphonesmoney])

  //-----------------------------------------------------------------------------------------//

  // Burgers
  const [burgermoney, setburgermoney] = useState(0)

  function handleburger(){
    setburgermoney(burgermoney+(243));
  }

  useEffect(() => {
    setTimeout(handleburger, 250);
  }, [burgermoney])  

  //-----------------------------------------------------------------------------------------//

  // books
  const [booksmoney, setbooksmoney] = useState(0)

  function handlebooks(){
    setbooksmoney(booksmoney+(21));
  }

  useEffect(() => {
    setTimeout(handlebooks, 250);
  }, [booksmoney])

  //-----------------------------------------------------------------------------------------//

  // cars
  const [carsmoney, setcarsmoney] = useState(0)

  function handlecars(){
    setcarsmoney(carsmoney+(6587));
  }

  useEffect(() => {
    setTimeout(handlecars, 250);
  }, [carsmoney])

  //-----------------------------------------------------------------------------------------//

  // university
  const [universitymoney, setuniversitymoney] = useState(0)

  function handleuniversity(){
    setuniversitymoney(universitymoney+(12683));
  }

  useEffect(() => {
    setTimeout(handleuniversity, 250);
  }, [universitymoney])

  //-----------------------------------------------------------------------------------------//

  // Games
  const [gamesmoney, setgamesmoney] = useState(0)

  function handlegames(){
    setgamesmoney(gamesmoney+(16996));
  }

  useEffect(() => {
    setTimeout(handlegames, 250);
  }, [gamesmoney])

  //-----------------------------------------------------------------------------------------//

  // Youtube
  const [youtubemoney, setyoutubemoney] = useState(0)

  function handleyoutube(){
    setyoutubemoney(youtubemoney+(2498));
  }

  useEffect(() => {
    setTimeout(handleyoutube, 250);
  }, [youtubemoney])

  //-----------------------------------------------------------------------------------------//

  // Netflix
  const [Netflixmoney, setNetflixmoney] = useState(0)

  function handleNetflix(){
    setNetflixmoney(Netflixmoney+(3170));
  }

  useEffect(() => {
    setTimeout(handleNetflix, 250);
  }, [Netflixmoney])

  //-----------------------------------------------------------------------------------------//

  // Google
  const [Googlemoney, setGooglemoney] = useState(0)

  function handleGoogle(){
    setGooglemoney(Googlemoney+(3170));
  }

  useEffect(() => {
    setTimeout(handleGoogle, 250);
  }, [Googlemoney])

  //-----------------------------------------------------------------------------------------//

  // Pens
  const [pensmoney, setpensmoney] = useState(0)

  function handlepens(){
    setpensmoney(pensmoney+(253));
  }

  useEffect(() => {
    setTimeout(handlepens, 250);
  }, [pensmoney])

  //-----------------------------------------------------------------------------------------//

  // rubix
  const [rubixmoney, setrubixmoney] = useState(0)

  function handlerubix(){
    setrubixmoney(rubixmoney+(2));
  }

  useEffect(() => {
    setTimeout(handlerubix, 250);
  }, [rubixmoney])

  //-----------------------------------------------------------------------------------------//

  // ps
  const [psmoney, setpsmoney] = useState(0)

  function handleps(){
    setpsmoney(psmoney+(4414));
  }

  useEffect(() => {
    setTimeout(handleps, 250);
  }, [psmoney])

  //-----------------------------------------------------------------------------------------//

    return (
        <div>
        <div>
  <div className="container-image"></div>

  <div className="second-counter">
        <p className='header-title'>{counter} seconds has Passed and they made</p>
  </div>
  <p className='madewithlove'>Made with ❤️ by <a href='https://twitter.com/shaanforlife' target='_blank'>Shaan</a></p>
  <p className='contribution'>Hey If you would love to add on some more amazing things on this website <a href='https://github.com/ShaanJ20/Moneyofthings' target='_blank'>Start contributing</a> </p>

  <div className="boxes-parent">

    <div className="boxes">
      <h2>iPhones - $<a style={{color:'#279700'}} >{iphonesmoney}</a></h2>
      <img src={iphones} alt="iphones" />
    </div>

    <div className="boxes">
      <h2>Burgers - $<a style={{color:'#279700'}} >{burgermoney}</a></h2>
      <img src={burgers} alt="burgers" />
    </div>

    <div className="boxes">
      <h2>Books - $<a style={{color:'#279700'}} >{booksmoney}</a></h2>
      <img src={books} alt="books" />
    </div>

    <div className="boxes">
      <h2>Cars - $<a style={{color:'#279700'}} >{carsmoney}</a></h2>
      <img src={cars} alt="cars" />
    </div>

    <div className="boxes">
      <h2>University - $<a style={{color:'#279700'}} >{universitymoney}</a></h2>
      <img src={university} alt="university" />
    </div>

    <div className="boxes">
      <h2>Games - $<a style={{color:'#279700'}} >{gamesmoney}</a></h2> 
      <img src={games} alt="games" />
    </div>

    <div className="boxes">
      <h2>Youtube - $<a style={{color:'#279700'}} >{youtubemoney}</a></h2>
      <img src={yt} alt="yt" />
    </div>

    <div className="boxes">
      <h2>Netflix - $<a style={{color:'#279700'}} >{Netflixmoney}</a></h2>
      <img src={Netflix} alt="Netflix" />
    </div>

    <div className="boxes">
      <h2>Google - $<a style={{color:'#279700'}} >{Googlemoney}</a></h2>
      <img src={Google} alt="Google" />
    </div>

    <div className="boxes">
      <h2>Pens - $<a style={{color:'#279700'}} >{pensmoney}</a></h2>
      <img src={pens} alt="pens" />
    </div>

    <div className="boxes">
      <h2>Rubix - $<a style={{color:'#279700'}} >{rubixmoney}</a></h2>
      <img src={rubix} alt="rubix" />
    </div>

    <div className="boxes">
      <h2>Playstations - $<a style={{color:'#279700'}} >{psmoney}</a></h2>
      <img src={ps} alt="ps" />
    </div>

  </div>
</div>
        </div>
    )
}

