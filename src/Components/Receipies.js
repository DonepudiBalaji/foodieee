import React from 'react'

function Receipies(props) {
  let { data } = props;
  return (
    <>

      <div className="grid grid-cols-4 gap-6 ">
        {data.map(data => (
          <div className="w-40vh h-64  m-6 " >
            <img src={data.recipe.image} alt="Card image" className="w-full h-full object-cover bg-center bg-cover" >
            </img>
            <h3 className='bg-blue-500 font-bold text-white'>
              {data.recipe.label}
            </h3>

          </div>
        ))}
      </div>

    </>
  )
}

export default Receipies