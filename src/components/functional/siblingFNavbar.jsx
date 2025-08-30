const SiblingFNavbar = ({products}) => {
 return (
   <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
         <a className='navbar-brand' href='#'>
            Navbar {handleSum()}
         </a>
      </div>
   </nav>
 );

 function handleSum(){
    let sum = 0;
    products.forEach(p => {
      sum += p.count; 
    });
    return sum;
 }
}
export default SiblingFNavbar;
