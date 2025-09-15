import Link from "next/link";

const NavLink = ({ href, title, isActive = false }) => {
  return (
    <Link
      href={href}
      className={`block font-medium py-2 pl-3 pr-4 text-sm sm:text-base rounded md:p-0 transition-all duration-300 ${
        isActive 
          ? "text-pink-300 scale-105" 
          : "text-pink-100 hover:text-pink-300 hover:scale-105"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
