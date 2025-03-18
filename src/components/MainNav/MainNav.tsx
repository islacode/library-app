'use client'

import { usePathname } from 'next/navigation';
import Link from "next/link";


export interface NavItem {
  id: number;
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { id: 1, name: "Home", path: '/' },
  { id: 2, name: "Books", path: '/books' },
]

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="list-none flex gap-4">
        {navItems.map((navItem) => {
          const hover = pathname === navItem.path ? '' : 'hover:';
          const className = `p-2 ${hover}bg-gray-500 rounded-lg`;

          return (
            <li key={navItem.id}>
              <Link className={className} href={navItem.path}>{navItem.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
