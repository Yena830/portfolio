import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block font-bold py-2 pl-3 pr-4 text-[#ecebeb] sm:text-xl rounded md:p-0 hover:text-[#7fc3dc]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
