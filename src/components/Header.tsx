export default function Header(){
    return(
        <header className="p-8 relative h-72 flex items-center justify-center gap-10 flex-col">
            <h2 className="animate-once animate-fade-up text-5xl text-shadow shadow-orange-400 font-bold text-center bg-gradient-to-br from-orange-400 to-orange-500 bg-clip-text inline-block text-transparent">Let's create the web together</h2>
            <button className="animate-once animate-fade-down capitaliza font-medium bg-slate-900 text-md text-gray-50 px-4 py-2 rounded-lg">Get started</button>
        </header>
    )
}