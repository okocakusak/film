import { slide as Menu } from "react-burger-menu";


export default function Navbar() {
    return(
        <>
        <div className="bg-white/10 font-semibold text-white h-10 flex items-center justify-between shadow-xl text-lg py-8 px-24 sticky top-0 z-50 max-md:hidden">
        <a className="nav-button" href="/">Home</a>{' '}
        <span className="w-1/2 flex justify-between">
          <a className="nav-button" href="/top-rated">Top Rated</a>
          <a className="nav-button" href="/action">Action</a>
          <a className="nav-button" href="/romance">Romance</a>
          <a className="nav-button" href="/comedy">Comedy</a>
          <a className="nav-button" href="/horror">Horror</a>
        </span>
      </div>
      <div className="bg-white/10 font-semibold text-white h-10 flex items-center justify-between p-4 sticky top-0 z-10 md:hidden">
        <a href="/">Home</a>
        <div className="flex justify-between absolute right-2 top-0">
          <Menu
            className="-mt-1 bg-gray-800/90 text-white justify-center py-32 uppercase font-bold text-2xl flex"
            right
            customCrossIcon={
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cross_icon_%28white%29.svg/2048px-Cross_icon_%28white%29.svg.png" />
            }
            customBurgerIcon={
              <img
                className="w-4"
                src="https://icon-library.com/images/white-hamburger-menu-icon/white-hamburger-menu-icon-24.jpg"
              />
            }
            zIndex={50} // Set the z-index for the Menu component
          >
            <a className="menu-item" href="/top-rated">
              Top Rated
            </a>
            <a className="menu-item" href="/action">
              Action
            </a>
            <a className="menu-item" href="/romance">
              Romance
            </a>
            <a className="menu-item" href="/comedy">
              Comedy
            </a>
            <a className="menu-item" href="/horror">
              Horror
            </a>
          </Menu>
        </div>
      </div>
    </>
      
    )
}