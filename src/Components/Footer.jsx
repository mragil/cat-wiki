import { ReactComponent as CatLogo } from '../logo.svg';

function Footer() {
  return (
    <div className="rounded-t-3xl bg-black text-white p-5 mt-5">
      <div className="flex flex-col justify-center items-center gap-2">
        <CatLogo fill="white" />
        <h1>created by mragil &hearts; dui - dev.Challenge.io</h1>
      </div>
    </div>
  );
}

export default Footer;
