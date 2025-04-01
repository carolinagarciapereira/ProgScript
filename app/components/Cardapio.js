import PastelCardapio from "@/app/components/PastelCardapio";
import styles from "@/app/style/style.module.css";

export default function Cardapio() {
    const itens = [
        { nome: "Queijo", preco: "R$ 10,00" },
        { nome: "Frango", preco: "R$ 10,00" },
        { nome: "Carne", preco: "R$ 10,00" },
        { nome: "Pizza", preco: "R$ 10,00" },
        { nome: "Palmito", preco: "R$ 10,00" },
        { nome: "Brocolis", preco: "R$ 10,00" },
        { nome: "Carne e Queijo", preco: "R$ 11,00" },
        { nome: "Chocolate", preco: "R$ 12,00" }
    ];

    return (
        <div className={styles.menuContainer}>
            {itens.map((item, index) => (
                <PastelCardapio key={index} nome={item.nome} preco={item.preco} />
            ))}
        </div>
    );
}