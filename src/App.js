import Banner from './components/Banner';
import Section_1 from './components/Section_1';
import Section_2 from './components/Section_2';
import Section_3 from './components/Section_3';
import Section_4 from './components/Section_4';
import Section_5 from './components/Section_5';
import Section_6 from './components/Section_6';
import Section_7 from './components/Section_7';
import Section_8 from './components/Section_8';
function App() {
  return (
   <>
      <section style={{position: 'fixed', top: '0%'}}><Banner/></section>
      <section><Section_1/></section>
      <section><Section_2/></section>
      <section><Section_3/></section>
      <section><Section_4/></section>
      <section><Section_5/></section>
      <section><Section_6/></section>
      <section><Section_7/></section>
      <section><Section_8/></section>
   </>
  );
}

export default App;
