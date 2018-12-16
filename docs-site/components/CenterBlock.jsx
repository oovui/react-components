import React from 'react'

const CenterBlcok = (props)=>(
  <div style={{display:"flex",justifyContent:'center',alignItems:'center',padding:'6px',background:props.bgcolor,color:props.color||'#ffffff'}}>
    {props.children}
  </div>
)

export default  CenterBlcok