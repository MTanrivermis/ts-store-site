import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="flex justify-between h-[50px] text-white bg-gray-500 items-center px-5 ">
        <Link to='/'><h3 className="font-bold italic">Clarus Store</h3></Link>
        <div>
            <Link to='/' className='mr-2'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
        </div>
    </div>
  )
}

export default NavBar