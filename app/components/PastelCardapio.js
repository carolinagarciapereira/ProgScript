import styles from "@/app/pastelaria/css/style.module.css";
import Image from "next/image";
import If from "@/app/components/If";

export default function PastelCardapio({ nome, preco }) {
    const semEstoque = nome.includes("Pizza");
    const imagemSrc = "@/public/pastel.png";

    return (
        <div className={styles.itemMenu}>
            <If teste={semEstoque}>
                <p className={styles.semEstoque}>{nome}</p>
                <Image className={styles.grayscale} src={imagemSrc} alt={nome} width={80} height={80} />
            </If>
            <If teste={!semEstoque}>
                <p>{nome}</p>
                <Image src={imagemSrc} alt={nome} width={80} height={80} />
            </If>
            <p>{preco}</p>
        </div>
    );
}
