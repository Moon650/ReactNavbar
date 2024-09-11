import { Component } from "react"
import "./NavbarStyle.css"
import { Menudata } from "./MenuData"

class Navbar extends Component  {
    state = { clicked: false };
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render (){
    return (
        <nav>
            <h1 className="logo">React <i className="fab fa-react"></i></h1>
            <div className="menu-icons"  onClick={this.handleClick}>
                <i 
                className={this.state.clicked ?
                 "fas fa-times" :
                  "fas fa-bars"}>
                    </i>
            </div>
            <div>
                <ul className={this.state.clicked? "nav-menu active" : "nav-menu"}>
                 {Menudata.map((item, index) => {
                    return(
                        <li key={index}>
                           <a href={item.url} 
                           className={item.cName}>
                            <i className={item.icon}></i>
                            {item.title}
                            </a></li>
                    )
                 })}  
                    
                </ul>
            </div>
        </nav>
    )
}
}
export default Navbar