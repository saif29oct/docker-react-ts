/**
 * Link and NavLink component is not changed in react-router v6.
 * What change in NavLink is it's propety "activeClass".
 * Instead of this now we can use dynamic styling
 *      Examp: 
 *             V6:
 *              <NavLink className={(param)=>{navdata.class}} to="/welcome"> Welcome </NavLink>
 *             V5: 
 *               <NavLink activeClassname={class.active} to="/welcome"> Welcome </NavLink>
 *  
 */