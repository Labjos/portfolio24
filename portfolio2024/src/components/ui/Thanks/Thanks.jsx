import './Thanks.css'

function Thanks() {
  return (
    
       <div className='main-thanks'>
        <p className='title-thanks'>Thanks</p>
        <div className='container d-flex thanks'>
          <p>4 years ago I started a new path, since then many things have happened, pandemic, change of country, different jobs and on that journey I have met and shared with many classmates and teachers and I did not want to stop thanking all those who have helped me. encouraged and supported.
          Especially to my family on this side of the Atlantic and the other.
          The person who has always encouraged and helped me, Vero.</p>
          <img src='../../../../los3.jpeg' alt='vero y facu' style={{ height: '100px'}}/>
        </div>
        <div className='container d-flex thanks'>
          <img src='../../../../IronHack.png' alt='logo ironhack' style={{ height: '90px'}}/>
          <p>These last 6 months have been a real boost and change for me at IRONHACK, that's why I especially want to thank my teachers, Carlos, Julio and Cristian (the order doesn't matter), they have always been there to help and my classmates ( I hope I don't leave anyone behind): Raquel, Ana, Alex, Marcos, Ivan, Jesus, Jose, Lluis, Raúl, Lucas and especially Oksana and Marta with whom I shared the project.</p>
        </div>
        <div className='container d-flex thanks' >
        <p>I do not want to forget that person who taught me not to give up, work honestly and persevere in the effort and who gave me all the tools to be who I am. Thanks Dad</p>
        <img src='../../../../Papa.JPG' alt='foto jose Lorente' style={{ height: '90px'}}/>
        </div>
      </div>
  )
}

export default Thanks