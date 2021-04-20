import { useEffect, useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Parallax } from 'react-parallax';
import Banner from './components/Banner/Banner';
import Section_1 from './components/Section_1';
import Section_2 from './components/Section_2';
import Section_3 from './components/Section_3';
import Section_4 from './components/Section_4';
import Section_5 from './components/Section_5';
import Section_6 from './components/Section_6';
import Section_7 from './components/Section_7';
import Section_8 from './components/Section_8';

import logo from './images/logo.png';

import section1Bg from './images/03.png';

function App() {
  const [nextStep, setnextStep] = useState(0);
  const [completeHover, setcompleteHover] = useState(false);
  const [completeScrollSection3, setcompleteScrollSection3] = useState(0);

  const scrollSection = (i) => {
    console.log(nextStep);

    window.scrollTo({
      top: document.getElementById('section_1').offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (nextStep == 1) {

      const root = document.querySelector('#root');
      const pageViews = document.querySelectorAll('.page-view');
     
      pageViews.forEach((item) => {
        item.setAttribute('style', 'position: absolute');
        root.classList.add('root-detached');
      });

      window.scroll(0, 0);
      setTimeout(() => { scrollSection(); }, 100)
    }


  }, [nextStep]);


  useEffect(() => {
    window.scroll(100, 100);

    window.addEventListener('scroll', (info) => {
      const section = document.querySelector('#section_3').offsetTop;
      const winY = parseInt( window.pageYOffset);
      const limit = parseInt(winY + 290) >=  parseInt(section);
            
      setcompleteHover(limit);

    })
  }, []);

  return (
   <div className={`${nextStep ? 'enable-all-sections' : ''}`}>
     <header className="header">
       <img src={logo} width="72px"/>
     </header>
      <Banner 
        style={{ zIndex: 99 }} 
        nextStep={nextStep} 
        scrollSection={scrollSection}
        setnextStep={setnextStep}/>
        
        <Controller>
          <Scene duration={0}>
              {
                (progress) => {
                  return (
                    <section id="section_1">
                      <Parallax blur={0} bgImage={section1Bg} bgImageAlt="People" strength={200}>
                        <Section_1 progress={progress}/>
                      </Parallax>
                    </section>
                  )
                }
              }
          </Scene>
        </Controller>

        <Controller>
          <Scene duration={0}>
            {
              (progress) => {
                return (
                  <section id="section_2" style={{position: 'relative'}}>
                      <Section_2 progress={progress} completeScrollSection3={completeScrollSection3} completeHover={completeHover}/>
                  </section>
                )
              }
            }
          </Scene>
        </Controller>

        <Controller>
          <Scene>
            {
              (progress) => {
                setcompleteScrollSection3(progress)
                return (
                  <section id="section_3">
                    <Section_3/>
                  </section>
                )
              }
            }
          </Scene>
        </Controller>
        <section id="section_4"><Section_4/></section>
        <section id="section_5"><Section_5/></section>
        <section id="section_6"><Section_6/></section>
        <section id="section_7"><Section_7/></section>
        <section>
          <div className="safeBirthArea">
              <div className="pulse-button">
                  safe birth<br/>
                  starts here
              </div>
          </div>
        </section>
        <section id="section_8"><Section_8/></section>
   </div>
  );
}

export default App;
