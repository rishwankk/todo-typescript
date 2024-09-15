
type Button={
    Children: React.ReactNode,
    className:string,
    onClick ?:()=>void
}
const Button = ({className,Children,onClick}:Button) => {
  return (
    <button className={className} type="submit" onClick={onClick} >{Children}</button>
  )
}

export default Button