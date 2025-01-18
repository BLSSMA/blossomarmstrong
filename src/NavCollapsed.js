
const NavCollapsed = () => {      
    
    return(
<div className="menu-icon" >
<Hamburger className="hamburger" onToggle={toggled => {
  if (toggled) {
     // open a menu
  } else {
     // close a menu
  }
}} />
</div> 
) }