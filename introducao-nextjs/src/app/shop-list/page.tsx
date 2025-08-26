import ListaDeCompras from "@/componentes/ListaDeCompras";
const lista = [
    {
        item: 'shampoo' ,
        comprado: false
    },
    {
        item: 'maçã' ,
        comprado: false
    },
    {
        item: 'queijo' ,
        comprado: false
    },    
    {
        item: 'banana' ,
        comprado: false
    },
    {
        item: 'ketchup' ,
        comprado: false
    },
    {
        item: 'jabuticaba' ,
        comprado: false
    },
    {
        item: 'laranja' ,
        comprado: false
    },
    {
        item: 'presunto' ,
        comprado: false
    },
    
]
export default function ShopListPage() {
    return (
        <div>
            <ListaDeCompras lista={lista} />
        </div>
    );
}
