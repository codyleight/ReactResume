export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <ul className="navbar-nav mb-2 mb-lg-2 text-light">
          Cody Thompson Portfolio
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-2">
          {links.map((link) => link)}
        </ul>
      </div>
    </nav>
  );
}