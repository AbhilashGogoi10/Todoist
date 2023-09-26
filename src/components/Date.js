import React from 'react'

const todaysDate = () => {
    var showdate = new Date();
    var displaytodaysdate = showdate.getDate() + '/' + showdate.getMonth() + '/' + showdate.getFullYear();



  return (
    <div className='date'>
       {displaytodaysdate} 
    </div>
  )
}

export default todaysDate