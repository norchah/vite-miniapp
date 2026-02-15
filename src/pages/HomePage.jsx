import {useState} from "react";

export default function HomePage() {
  const [ page, setPage ] = useState('home');

  return <h1 className="text-xl">Главная</h1>
}