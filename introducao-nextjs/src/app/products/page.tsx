export default function Products(){
    const produtos = [
        {id:1,nome:"shampoo", preco:20},
        {id:2,nome:'sabonete', preco:5},
        {id:3, nome:'sabão', preco:6}
    ]
    return(
        <div>
            <h2>Lista de produtos:</h2>
            {produtos.map((produto)=>{
                return(<li key={produto.id}>{produto.nome}
                : R$ {produto.preco},0</li>)
            })}
        </div>
    )
}