import Link from "next/link";

export interface NavItem {
  title: string;
  href: string;
}

interface NavLinksProps {
  onClick?: () => void;
}

const navItems: NavItem[] = [
  { title: "About Us", href: "/about-us" },
  //   { title: "Services", href: "/services" },
  //   { title: "Contact", href: "/contact" },
  //   { title: "Blog", href: "/blog" },
];

export default function NavLinks({ onClick }: NavLinksProps) {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className="hover:text-[#cdad7d] block md:inline-block"
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}
