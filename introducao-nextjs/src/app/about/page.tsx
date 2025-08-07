import Button from "@/componentes/Button";
import Cards from "@/componentes/Cards";
import Counter from "@/componentes/Counter";
import LikeButton from "@/componentes/LikeButton";


const content =
    [
        {
            title: "the seven husbands of evelyn hugo",
            description: "Hugo comes from a poor background, but marries the first of her many husbands in order to move to Hollywood and pursue her career.",
            imageUrl: "https://m.media-amazon.com/images/I/81J0E3eq4PL._UF1000,1000_QL80_.jpg",
            category: "Book",
        },
        {
            title: "Spirited Away",
            description: "'Spirited Away' is a critically acclaimed animated fantasy film by Hayao Miyazaki, where a young girl named Chihiro enters a magical world after her parents are transformed into pigs.",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg",
            category: "Movie"
        },
        {
            title: "the invisible life of addie larue",
            description: "The story follows a young French woman in 1714 who makes a bargain with the Dark that makes her immortal, but curses her to be forgotten by everyone she meets.",
            imageUrl: "https://m.media-amazon.com/images/I/91Ql48Y0mqL._UF1000,1000_QL80_.jpg",
            category: "Book",
        },
        {
            title: "the seven husbands of evelyn hugo",
            description: "Hugo comes from a poor background, but marries the first of her many husbands in order to move to Hollywood and pursue her career.",
            imageUrl: "https://m.media-amazon.com/images/I/81J0E3eq4PL._UF1000,1000_QL80_.jpg",
            category: "Book",
        },
        {
            title: "Spirited Away",
            description: "'Spirited Away' is a critically acclaimed animated fantasy film by Hayao Miyazaki, where a young girl named Chihiro enters a magical world after her parents are transformed into pigs.",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg",
            category: "Movie"

        },
        {
            title: "the invisible life of addie larue",
            description: "The story follows a young French woman in 1714 who makes a bargain with the Dark that makes her immortal, but curses her to be forgotten by everyone she meets.",
            imageUrl: "https://m.media-amazon.com/images/I/91Ql48Y0mqL._UF1000,1000_QL80_.jpg",
            category: "Book",
        }

    ];


export default function About() {
    return (
        <div className="w-full flex flex-col items-center">
            <h1>Sobre nós</h1>
            <p>Informações sobre a empresa</p>
            <Button label="qwert" />
            <div className="flex flex-row flex-wrap gap-9 px-2.5 my-2 w-full justify-start max-w-7xl">
                {content.map((card, index) => (
                    <Cards key={index} {...card} />
                ))}
            </div>
            <Counter/>
            <LikeButton/>
        </div>
    );
}