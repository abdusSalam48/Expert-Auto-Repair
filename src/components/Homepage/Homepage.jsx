import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
// import Page from './app/login/page'

const Homepage = () => {
    return (
        <div className='h-screen'>
            <Banner/>
            <About/>
            <Services/>
            {/* <Page/> */}
        </div>
    );
}
export default Homepage;

// import React from 'react'

// export default function Homepage() {
//   return (
//     <div>
      
//     </div>
//   )
// }
