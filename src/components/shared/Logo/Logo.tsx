import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <h2 className="text-3xl font-semibold text-white">
          <span className="text-[#00ff99] hover:text-[#00e187]">Antor</span>
          Karmaker
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
