import { useEffect, useState } from 'react';
import Banner from './components/Banner/Banner';
import Section_1 from './components/Section_1';
import Section_2 from './components/Section_2';
import Section_3 from './components/Section_3';
import Section_4 from './components/Section_4';
import Section_5 from './components/Section_5';
import Section_6 from './components/Section_6';
import Section_7 from './components/Section_7';
import Section_8 from './components/Section_8';
function App() {
  const [nextStep, setnextStep] = useState(false);

  useEffect(() => {
    if (nextStep) {
      const root = document.querySelector('#root');
      const pageViews = document.querySelectorAll('.page-view');
      pageViews.forEach((item) => {
        item.setAttribute('style', 'position: absolute');
        root.classList.add('root-detached');
      });

      window.scroll(0, 0);

      window.scrollTo({
        top: document.getElementById('section_1').offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [nextStep]);

  return (
   <>
      <Banner style={{ zIndex: 99 }} nextStep={nextStep} setnextStep={setnextStep}/>
      <div style={{ zIndex: -1, position: 'relative', height: '100vh' }}>
        <section id="section_1"><Section_1/></section>
        <section id="section_2"><Section_2/></section>
        <section id="section_3"><Section_3/></section>
        <section id="section_4"><Section_4/></section>
        <section id="section_5"><Section_5/></section>
        <section id="section_6"><Section_6/></section>
        <section id="section_7"><Section_7/></section>
        <section id="section_8"><Section_8/></section>
      </div>
   </>
  );
}

export default App;
