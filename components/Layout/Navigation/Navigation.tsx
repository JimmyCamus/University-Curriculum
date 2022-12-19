import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navbar min-h-16 bg-primary text-white">
      <Link className="btn btn-ghost normal-case text-xl" href="/">
        Malla Curricular UCN
      </Link>
    </nav>
  );
};

export default Navigation;
