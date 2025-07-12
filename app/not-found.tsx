import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-white mb-4">404</h1>
                <h2 className="text-5xl text-white mb-4">Stranica nije pronađena</h2>
                <p className="text-white text-2xl mb-8">Stranica koju tražite ne postoji ili je uklonjena.</p>
                <Link
                    href="/"
                    className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-200 transition-colors text-xl"
                >
                    Nazad na početnu stranicu
                </Link>
            </div>
        </div>
    )
}