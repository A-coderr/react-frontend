import { useContext } from "react"
import Context from "./Context"
export default function Header(){
    const userData = useContext(Context)
    return(
      <nav className='nav-bar'>
      <p>Logo</p>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact-us">Contact</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>Hello, {userData.name}</li>
      </ul>
    </nav> 
    )
  }