import NavBar from "@/componemtes/NavBar";

const link = [{href:'/', label:'Inicio'},{href:'/about', label:'Sobre nós'},{href:'/products', label:'Produtos'}]

export default function Home() {
  return(
  <div>
    <NavBar links = {link} />
  </div>
  );
}

