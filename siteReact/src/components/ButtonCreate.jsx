import React from 'react'

function ButtonCreate() {

    const click = () => {
        alert('Você criou um item')
    }

  return (
    <div>
        <button style={{backgroundColor: 'lightgreen', border: '1px solid black', borderRadius: '5px', margin: '10px 0px', cursor: 'pointer'}} onClick={click}>Create</button>
    </div>
  )
}

export default ButtonCreate