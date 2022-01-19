import Link from "next/link";

function Header() {
  return (
    <header role="banner" className="mb-4">
    <div className="header-content">
      <Link href="/">
            <a><h1 className="font-extrabold font-mono text-transparent text-6xl bg-clip-text bg-gradient-to-r from-slate-800 to-blue-900 ">Atom</h1></a>
      </Link>

      {true ? (
        <h2 className="mt-3 text-lg font-mono">
          Create and share beautiful images of your tweet!!
        </h2>
      ) : null}
    </div>
    <style jsx>
      {`
        .header-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .header-content a {
          height: 64px;
          max-width: 96vw;
        }
        h2 {
          text-align: center;
        }
        @media (max-width: 768px) {
          header {
            margin-bottom: var(--x3);
          }
          h2 {
            font-size: 13px;
          }
        }
      `}
    </style>
  </header>
  )
}

export default Header;
