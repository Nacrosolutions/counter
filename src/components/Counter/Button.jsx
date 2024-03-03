const Button =({children,onClick})=>{
return (
    <button style={{backgroundColor:"purple",color:'white',borderRadius:"10px",marginRight:"30px",marginLeft:"30px",marginTop:"30px"}}
    onClick={onClick} 
    >{children}</button>
)
}


export default Button;