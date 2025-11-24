import Button from "../../../components/Button";

const DesktopActions = () => {
  return (
    <>
      <a
        aria-label="Create new account"
        href="#signup"
        className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
      >
        New account
      </a>
      <Button className="hidden lg:flex" href="#login" ariaLabel="Sign in">
        Sign in
      </Button>
    </>
  );
};

export default DesktopActions;
