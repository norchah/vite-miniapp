import {siteConfig} from "../configs/siteConfig.js";
import Card from "./card.jsx";


export default function Cards() {
  return (
    <ul className="flex flex-col w-full mt-6">
      {siteConfig.navMenu.map((card) => (
        <Card card={card} key={card.id}/>
      ))}
    </ul>
  );
}