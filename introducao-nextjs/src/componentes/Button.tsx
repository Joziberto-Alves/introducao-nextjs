
type ButtonProps = {
    label:string;
}

export default function Button({label}:ButtonProps) {
    return(
        <button className="px-4 py-2 mx-1.5 bg-blue-300 text-white rounded hover:bg-blue-400">
            {label}
        </button>
    )

}
