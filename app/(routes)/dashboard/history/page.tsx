import React from 'react'
import HistoryList from '../_components/HistoryList'

function History() {
  return (
    <div className='h-[calc(100vh-70px)] sm:h-[calc(100vh-75px)] md:h-[calc(100vh-80px)] lg:h-[calc(100vh-85px)] bg-green-100 px-10 md:px-24 lg:px-48 overflow-hidden'>
      <HistoryList/>
    </div>
  )
}

export default History


// import React from 'react'
// import HistoryList from '../_components/HistoryList'

// function History() {
//   return (
//     <div>
//       <HistoryList/>
//     </div>
//   )
// }

// export default History