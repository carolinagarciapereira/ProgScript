import Title from "@/app/components/Title";
import Cardapio from "@/app/components/Cardapio";
import styles from "@/app/style/style.module.css";

export default function Homepage() {
    return (
        <div className={styles.container}>
            <Title texto = " Pastelaria do Seu Zé " />
            <Cardapio/>
        </div>
    );
}