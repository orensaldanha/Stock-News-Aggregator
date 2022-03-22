import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logoimg from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown}from 'react-bootstrap'
import {LoginContext} from './Context'
import { useNavigate } from 'react-router-dom'


const Nav = () => {
    const {loggedIn,setloggedIn}=useContext(LoginContext)

    const first_name=sessionStorage.getItem('first_name')
    let navigate=useNavigate();


    const logout=()=>{
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('first_name')
        sessionStorage.removeItem('storedLoggedIn')
        setloggedIn(false)
        navigate('/login')
    }

    const [search, setSearch] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/search-results?query=' + search)
    }

    const searchStyle = {
 
      };


    return (
        <div>
            <nav className='nav-bar'>
                <div>
                    <Link to='/'>
                        <img className='logo-image' src={logoimg} alt=' '></img>
                    </Link>
                    {loggedIn ? (
                            <Dropdown className='profile-btn'>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Hi,{first_name}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <form className={searchStyle} onSubmit={handleSubmit}>
                                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"
                                            id="search"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </form>
                                    <Dropdown.Item href="/Archive">Archive</Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={logout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                ):(<></>)
                }

                    </div>
                </nav>
        </div>
    )
}

export default Nav
