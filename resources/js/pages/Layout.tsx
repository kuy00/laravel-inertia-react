import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const {
    children,
  } = props;

  return (
    <div>
      <Header />
      <div className="body">{children}</div>
    </div>
  );
};

export default Layout;
