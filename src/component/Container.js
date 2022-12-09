import React from 'react'
import Cont1 from './Cont1'
import Cont2 from './Cont2'
import Cont3 from './Cont3'
import Cont4 from './Cont4'
import Cont5 from './Cont5'

import { useEffect } from 'react'
import "aos/dist/aos.css"
import AOS from 'aos';

const Container = () => {
  // 이렇게 aos를 넣으면 cont1 ~ cont5 어디서든 aos를 쓸 수 있다.
  useEffect(() => {
    AOS.init();
  });
  return (
    <div id='container'>
      <Cont1></Cont1>
      <Cont2></Cont2>
      <Cont3></Cont3>
      <Cont4></Cont4>
      <Cont5></Cont5>
    </div>
  )
}

export default Container
