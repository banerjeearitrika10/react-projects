

function Child({onClick,name}:any) {
  return (
   <>
   <div>
    {name} From Parent
   </div>
   <input type="text" onChange={(e)=>{onClick(e.target.value)}}/>
   {/* <button onClick={onClick}></button> */}
   </>
  )
}

export default Child