export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg   bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav mb-2 mb-lg-2 text-light font1">
          Cody Thompson Portfolio
        </ul>
        <ul className="navbar-nav ms-auto mb-1 mb-lg-2 font1 text-center">
          {links.map((link) => link)}
        </ul>
      </div>
    </nav>
  );
}