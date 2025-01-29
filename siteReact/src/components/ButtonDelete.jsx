import React from 'react'

function ButtonDelete() {

    const click = () => {
        alert('Você deletou um item')
    }

  return (
    <div>
        <button style={{backgroundColor: 'red', border: '1px solid black', borderRadius: '5px', margin: '10px 0px', color: 'white', cursor: 'pointer'}} onClick={click}>Delete</button>
    </div>
  )
}

export default ButtonDelete