import ClientCounter from "@/componentes/ClientCounter"

export default function ServerExemple() {
    const data = 'Dados do banco de dados'
    return(
        <div>
            <h1>Dados do servidor</h1>
            <p>{data}</p>
            <ClientCounter/>
        </div>
    )
}