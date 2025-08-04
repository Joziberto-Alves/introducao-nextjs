import NavBar from "@/componemtes/NavBar";
import Cards from "@/componemtes/CreateCards";

const link = [{href:'/', label:'Inicio'},{href:'/about', label:'Sobre nós'},{href:'/products', label:'Produtos'}]
// const card = [{title:'Renderização Híbrida', content:'SSG, SSR, e ISR para otimizar performace e CEO.', imageURL:'🤡'}]

export default function Home() {
  return(
  <div>
    <NavBar links = {link} />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Cards
            title="Renderização Híbrida"
            content="SSG, SSR e ISR para otimizar performance e SEO."
            icon="🚀" />

          <Cards
            title="CSS Utility-First"
            content="Tailwind CSS para estilização rápida e consistente."
            icon="🎨" />

          <Cards
            title="TypeScript Integrado"
            content="Tipagem estática para um código mais seguro."
            icon="🔒" />
    </div>
    <div className="flex justify-center">
    </div>
  </div>
  );
}

