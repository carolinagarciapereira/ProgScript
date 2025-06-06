import styles from "@/app/pastelaria/css/style.module.css";
import Image from "next/image";

export default function Title({ texto }) {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>{texto}</h1>
            <Image src="@/public/pastel.png" width={60} height={60} />
        </div>
    );
}
