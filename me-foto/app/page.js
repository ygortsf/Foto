import Image from "next/image";
import styles from "./page.module.css";
import { Galery } from "@/seila/Galery";

export default function Home() {
  return (
    <div>
      <h1>
        Importando uma div externa
      </h1>
      <Galery />
    </div>
  );
}
