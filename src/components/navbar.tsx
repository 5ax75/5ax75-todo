import { Logo } from "@/ressources/svgs/index";
import Button from "./button";

export default function Navbar() {
  return (
    <div className="h-20 w-full border-b-accent border-b-4 flex items-center px-10 justify-between ">
      <Logo />
      <div>
        <Button text="Pricing" background={false} />
        <Button text="About" background={false} />
        <Button text="Log In" />
      </div>
    </div>
  );
}
