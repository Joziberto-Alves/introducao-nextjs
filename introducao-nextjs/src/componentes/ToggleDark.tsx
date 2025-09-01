type props = {
    isDark: boolean,
    onToggle: () => void
}

export default function ToggleDark({onToggle, isDark}: props) {
    return(
        <button 
        onClick={onToggle}
        className={`${isDark? 'bg-blue-600' : 'bg-gray-500'} text-white py-2 px-4 rounded`}
        >
            {isDark? 'Toggle Light' : 'Toggle Dark'}
        </button>
    )
}