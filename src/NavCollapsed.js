
const NavCollapsed = () => {
const [showNavbar, setShowNavbar] = useState(false)
              
             return(
<div className={`nav-elements  ${showNavbar && 'active'}`}>
<div className="menu-icon" >
<Hamburger className="hamburger" toggled={showNavbar} toggle={setShowNavbar}/>
</div> 
 </div>
) }