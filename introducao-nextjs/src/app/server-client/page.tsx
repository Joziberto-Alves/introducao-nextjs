import ThemeToggle from "@/componentes/ThemeToggle";

export default function ServerClient() {
    const now = new Date()
    const formattedDate = now.toLocaleString('pt-BR')

    return (
    <div className="min-h-screen p-6">
        <div className="mb-6 text-center text-lg font-semibold">
            Data e Hora do Servidor: {formattedDate}
        </div>
        <ThemeToggle />
    </div>
    );
}
