// the aim is to tell if the driver has violates the speed limits
let speed = Number(prompt('Enter the speed of the car'))
let penaltyPoints = 0

 if (speed < 70){
     console.log('Ok')
  }

  else {
    penaltyPoints = Math.floor((speed-70)/5)
    console.log(`Points on speed violation: ${penaltyPoints}`)
  }


  if (penaltyPoints>12){
   console.log('Sorry mate, license suspended')
  }