function Header(props){
  console.log(props.title, props.subTitle)
  return <>
    <h2>
      {props.title}{props.subTitle}
    </h2>
  </> 
}

export default Header;