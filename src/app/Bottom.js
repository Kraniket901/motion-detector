import React from 'react'

const Bottom = () => {
  return (
    <div className="text-white flex justify-center p-2">
        <div>
        <img src="livestream.png" alt="livestream" width={300} className='pb-5'/>
        <img src="volcontrol.png" alt="volcontrol" width={300} className='py-4'/>
        <img src="emergency.png" alt="emergency" width={100} className='fixed bottom-12 right-12'/>
        </div>
    </div>
  )
}

export default Bottom