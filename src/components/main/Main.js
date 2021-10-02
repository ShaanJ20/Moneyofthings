import React, {useState, useEffect} from 'react'
import './main.css'

import elonmusk from './elonmusk.jpg'
import jeffbezos from './jeff.jpg'
import Bernard from './bernard.jpg'
import billgates from './billgates.jpg'
import mark from './mark.jpg'
import ellison from './ellison.jpg'
import page from './page.jpg'
import sergey  from './sergey.jpg'
import warren from './warren.jpg'

export default function Main() {

  const [counter, setcounter] = useState(0)

  function handlesec(){
    setcounter(counter+1)
  }


  useEffect(() => {
    setTimeout(handlesec, 1000);
  }, [counter])


  //-----------------------------------------------------------------------------------------//

  // Elon musk
  const [elonmuskmoney, setelonmuskmoney] = useState(0)

  function handlelon(){
    setelonmuskmoney(elonmuskmoney+17);
  }

  useEffect(() => {
    setTimeout(handlelon, 250);
  }, [elonmuskmoney])

  //-----------------------------------------------------------------------------------------//

  // jeff bezos
  const [jeffbezosmoney, setjeffbezosmoney] = useState(0)

  function handljeff(){
    setjeffbezosmoney(jeffbezosmoney+17);
  }

  useEffect(() => {
    setTimeout(handljeff, 250);
  }, [jeffbezosmoney])


  //-----------------------------------------------------------------------------------------//
  
  // bernard arnault
  const [Bernardmoney, setBernardmoney] = useState(0)

  function handlBernard(){
    setBernardmoney(Bernardmoney+17);
  }

  useEffect(() => {
    setTimeout(handlBernard, 250);
  }, [Bernardmoney])


  //-----------------------------------------------------------------------------------------//
  
  // bill gates
  const [billgatesmoney, setbillgatesmoney] = useState(0)

  function handlbillgates(){
    setbillgatesmoney(billgatesmoney+17);
  }

  useEffect(() => {
    setTimeout(handlbillgates, 250);
  }, [billgatesmoney])



    return (
        <div>
        <div>
  <div className="container-image"></div>

  <div className="second-counter">
        <p className='header-title'>{counter} seconds has Passed and they made</p>
  </div>

  <div className="boxes-parent">
    <div className="boxes">
      <h2>Elon Musk - $<a style={{color:'#279700'}} >{elonmuskmoney}</a></h2>
      <img src={elonmusk} alt="Elon Musk" />
    </div>

    <div className="boxes">
      <h2>Jeff Bezos -  $<a style={{color:'#279700'}} >{jeffbezosmoney}</a></h2>
      <img src={jeffbezos} alt="Jeff bezos" />
    </div>

    <div className="boxes">
      <h2>Bernard Arnault -  $<a style={{color:'#279700'}} >{Bernardmoney}</a></h2>
      <img src={Bernard} alt="Bernard" />
    </div>

    <div className="boxes">
      <h2>Bill Gates -  $<a style={{color:'#279700'}} >{billgatesmoney}</a></h2>
      <img src={billgates} alt="Bill gates" />
    </div>
    <div className="boxes">
      <h2>Mark Zuckerberg -  $<a style={{color:'#279700'}} >1231232</a></h2>
      <img src={mark} alt="Mark" />
    </div>
    <div className="boxes">
      <h2>Larry Ellison -  $<a style={{color:'#279700'}} >1231232</a></h2>
      <img src={ellison} alt="ellison" />
    </div>
    <div className="boxes">
      <h2>Larry Page -  $<a style={{color:'#279700'}} >1231232</a></h2>
      <img src={page} alt="page" />
    </div>
    <div className="boxes">
      <h2>Sergey Brin -  $<a style={{color:'#279700'}} >1231232</a></h2>
      <img src={sergey} alt="sergey" />
    </div>
    <div className="boxes">
      <h2>Warren Buffett -  $<a style={{color:'#279700'}} >1231232</a></h2>
      <img src={warren} alt="warren" />
    </div>
  </div>
</div>

            
        </div>
    )
}

