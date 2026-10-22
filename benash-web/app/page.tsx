
export default function Accueil() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-4xl font-bold text-blue-700">BENASH+</h1>
      <p className="text-gray-600 text-center">
        Gestion des ventes et du stock
      </p>
      <button className="w-full max-w-xs rounded-xl bg-blue-600 py-4 text-xl font-semibold text-white">
        Nouvelle vente
      </button>
    </main>
  );
}