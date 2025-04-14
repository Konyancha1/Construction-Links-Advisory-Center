export default function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100 text-center hover:shadow-xl transition">
        <div className="text-4xl mb-4">{icon}</div>
        <h4 className="text-xl font-semibold text-blue-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    )
  }
  