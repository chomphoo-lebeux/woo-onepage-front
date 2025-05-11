import Image from "next/image";

export default function CareGuideSection() {
  const careTips = [
    {
      title: "Lavage",
      description: "Lavez à 30°C pour préserver la douceur et la qualité du tissu en bambou.",
      icon: "🧺"
    },
    {
      title: "Séchage",
      description: "Séchez à l'air libre pour maintenir la forme et l'élasticité de vos pyjamas.",
      icon: "☀️"
    },
    {
      title: "Repassage",
      description: "Repassez à basse température si nécessaire, le bambou se défroisse naturellement.",
      icon: "👕"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/product-main.jpg"
              alt="Guide d'entretien"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary-dark">
              Guide d'Entretien
            </h2>
            <p className="text-light mb-8">
              Pour préserver la qualité et la douceur de vos pyjamas en bambou, suivez ces conseils simples d'entretien.
            </p>
            <div className="space-y-6">
              {careTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-4xl">{tip.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary-dark">
                      {tip.title}
                    </h3>
                    <p className="text-light">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary-dark">
                Pourquoi le Bambou ?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-light">
                  <span className="text-primary mr-2">✓</span>
                  Matériau écologique et renouvelable
                </li>
                <li className="flex items-center text-light">
                  <span className="text-primary mr-2">✓</span>
                  Anti-bactérien naturel
                </li>
                <li className="flex items-center text-light">
                  <span className="text-primary mr-2">✓</span>
                  Hypoallergénique
                </li>
                <li className="flex items-center text-light">
                  <span className="text-primary mr-2">✓</span>
                  Ultra-doux et confortable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 