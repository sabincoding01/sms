import React from 'react'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Top from './components/Top'
import Smsgateway from './components/SmsGateway'
import SmsService from './components/SmsService'
import BulkSmsService from './components/BulkSmsService'

function App () {
  return (
    <div>
      <div className='bg-cyan-900'>
<Top />
<Navbar />
<Smsgateway />
</div>
<SmsService />
<BulkSmsService />
{/* <Service />
<Projects />
<Contact />
<Footer /> */}
    </div>
  )
}

export default App