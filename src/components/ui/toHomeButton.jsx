import {useState, useEffect} from "react";
import {useTgData} from "../../hooks/useTgData.js";


export default function AddToHomeButton() {
  const tg = useTgData();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!tg || !tg.checkHomeScreenStatus) return;

    tg.checkHomeScreenStatus((result) => {
      setStatus(result);
    });
  }, [tg]);

  if (status !== "added") return null;

  return (
    <button
      onClick={() => tg.addToHomeScreen()}
      className="bg-sky-600 hover:cursor-pointer active:bg-sky-800 p-3"
    >
      Добавить на главный экран
    </button>
  );
}
