import SidebarItem from './SidebarItem';
import items from '../../data/sidebar.json';
import './sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
      <div className='sidebar'>
        <Link to='/'>
          <h1>ORIS</h1>
        </Link>
        <hr />
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}

// import './sidebar.scss';
// const Sidebar = () => {
//   return (
//     <div className='sidebar'>
//       <div className='top'>
//         <span className='logo'>ORIS</span>
//       </div>
//       <hr/>

//       <div className='center'>
//         <ul>
//           <li>
//             <span>Dashboard</span>
//           </li>
//           <li>
//             <span>Dashboard</span>
//           </li>
//           <li>
//             <span>Dashboard</span>
//           </li>
//           <li>
//             <span>Dashboard</span>
//           </li>

//         </ul>
//       </div>
//       <div className='bottom'>color options</div>
//     </div>
//   );
// };

// export default Sidebar;
