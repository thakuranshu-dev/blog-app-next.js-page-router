'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

type navProp = {
  prop :string
}

export default function Navbar(){
  const pathname = usePathname();
  const routes = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Blogs', href: '/blog'},
  ]
  return (
    <nav className="fixed gap-6 w-full inline-flex items-center">
      {routes.map(route=>(
        <Link 
        key={route.href}
        href={route.href}
        className={`text-lg hover:text-blue-600 ${pathname === route.href?
          'underline font-semibold text-blue-600' :
          'text-blue-500'
        }`}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  )
}

export function HamburgerMenu() {
  const pathname = usePathname();
  const routes = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Blogs', href: '/blog'},
  ]
  return (
  <>
    <div className="p4 text-gray-900 font-bold cursor-pointer"
    autoFocus onClick={()=>{
      let st = document.getElementById('hamburger');
      if(st?.classList.contains('hidden')){
        st?.classList.remove('hidden')
        st?.classList.add('flex')
      } else{
        st?.classList.remove('flex')
        st?.classList.add('hidden')
      }
    }}
    >☰</div>
    <nav id="hamburger" className="fixed top-8 left-1 hidden flex-col justify-center bg-white w-24 p-3">
      {routes.map(route=>(
        <Link 
        key={route.href}
        href={route.href}
        className={`text-left hover:text-blue-600 ${pathname === route.href?
          'underline font-semibold text-blue-600' :
          'text-blue-500'
        }`}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  </>
  )
}
// export function Navbar() {
//   return (
//     <div>
//       <Navigation prop="Navbar" />
//     </div>
//   )
// }

