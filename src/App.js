import React from 'react';
import Load from './views/components/loader.js'
import Section from './views/index/section/section.js'
import Section2 from './views/index/section-2/section_2.js'
import Section3 from './views/index/section-3/section_3.js'
import Section4 from './views/index/section-4/section_4.js'
import Section5 from './views/index/section-5/section_5.js'
import Section6 from './views/index/section-6/section_6.js'
import Section7 from './views/index/section-7/section_7.js'
import Section8 from './views/index/section-8/section_8.js'
import Section9 from './views/index/section-9/section_9.js'
import Header from './views/header/header.js'
import Footer from './views/footer/footer.js'
import RegisterForm from './views/register-form/register_form.js';

function App() {
  return (
    <div className="App">
      <Load />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <RegisterForm />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
