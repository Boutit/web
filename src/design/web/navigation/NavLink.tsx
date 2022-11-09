import { Link } from 'react-router-dom';

type NavLinkBaseProps = {
  to: string;
};

type NavLinkProps = NavLinkBaseProps & React.DOMAttributes<Element>;

export default function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </Link>
  );
}
