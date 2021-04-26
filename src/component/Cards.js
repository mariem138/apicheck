import React from 'react'

const cards = ({listOfUser}) => {
    return (
        <div>
           <div class="card">
  <h5 class="card-header">{listOfUser.name}</h5>
  <div class="card-body">
    <h5 class="card-title">{listOfUser.email}</h5>
    <p class="card-text">{listOfUser.adress.city}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> 
        </div>
    )
}

export default cards
