import React from 'react'

const Maps = ()=> {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Estrada%20Caetano%20Monteiro,%20916%20%E2%80%94%20Pendotiba,%20Niter%C3%B3i%20-%20RJ.&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
        </div>
        </div>
    </div>
  )
}

export default Maps
