
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNode, FaUnity, FaJava } from "react-icons/fa";
import { SiMysql, SiCsharp } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbFileTypeCss } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";

export default function HomePage() {
  return (


<div className="container">
  <div className="row">
 
    <div className="col-12 d-flex justify-content-center">
      <div className='iconsize text-light'><IoLogoJavascript /> <FaReact /> <FaNode /> <SiMysql /> <SiCsharp /> <FaUnity /> <AiOutlineConsoleSql /> <TbFileTypeCss /> <FaJava /> <FaHtml5 /></div>
      
      <img src="/assets/BannerFinal.png" className="img-fluid " alt="Banner Image" />
      <div className="iconsize text-light">
  <FaHtml5 /> <FaJava /> <TbFileTypeCss /> <AiOutlineConsoleSql /> <FaUnity /> <SiCsharp /> <SiMysql /> <FaNode /> <FaReact /> <IoLogoJavascript />
</div> </div>
  </div>
</div>


    
    
  );
}
