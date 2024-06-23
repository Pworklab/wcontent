import React from "react";
import { Header_btn , Back_btn } from "./btn_controller";

const Header = () =>{
    return(
      <header className="bg-gray-200 h-30">
      <div className="flex gap-4 place-content-center">
      <Header_btn title={"Home"} link={"/"}></Header_btn>
      <Header_btn title={"Monster"} link={"/monster"}></Header_btn>
      <Header_btn title={"Hat"} link={"/hat"}></Header_btn>
      </div>
      </header>
    );
}
export default Header;