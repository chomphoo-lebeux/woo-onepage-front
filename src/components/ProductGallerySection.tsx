import Image from "next/image";

export default function ProductGallerySection() {
  const productFeatures = [
    {
      title: "Confort Optimal",
      description: "Le tissu en bambou s'adapte parfaitement à votre corps, offrant un confort inégalé pour un sommeil réparateur. Sa douceur exceptionnelle et sa capacité à réguler la température en font le choix idéal pour toutes les saisons.",
      image: "/product-main.jpg",
      benefits: ["Respirant", "Anti-transpiration", "Thermorégulateur"],
      details: [
        "Tissu ultra-doux de 300 g/m²",
        "Élasticité naturelle pour un ajustement parfait",
        "Adaptation à toutes les morphologies"
      ]
    },
    {
      title: "Qualité Premium",
      description: "Notre pyjama en bambou est fabriqué avec des matériaux de la plus haute qualité pour une durabilité exceptionnelle. Chaque détail est soigneusement sélectionné pour garantir un produit qui dure dans le temps.",
      image: "/product-main.jpg",
      benefits: ["Tissu durable", "Finitions soignées", "Coutures renforcées"],
      details: [
        "Bambou certifié FSC",
        "Coutures doubles renforcées",
        "Boutons en nacre naturelle"
      ]
    },
    {
      title: "Bienfaits Naturels",
      description: "Profitez des propriétés naturelles du bambou pour une expérience de sommeil saine et apaisante. Le bambou est reconnu pour ses nombreuses vertus et son impact positif sur la santé.",
      image: "/product-main.jpg",
      benefits: ["Anti-bactérien", "Hypoallergénique", "Écologique"],
      details: [
        "Anti-odeurs naturel",
        "Protection UV intégrée",
        "100% biodégradable"
      ]
    }
  ];

  const specifications = [
    {
      category: "Matériaux",
      items: [
        "95% Bambou viscose",
        "5% Élasthanne",
        "Doublure 100% coton bio"
      ]
    },
    {
      category: "Entretien",
      items: [
        "Lavage machine 30°C",
        "Séchage à l'air libre",
        "Repassage basse température"
      ]
    },
    {
      category: "Dimensions",
      items: [
        "Longueur totale : 110cm",
        "Largeur épaules : 45cm",
        "Longueur manches : 60cm"
      ]
    }
  ];

  const sleepBenefits = [
    {
      title: "Sommeil Réparateur",
      description: "Le tissu en bambou favorise un sommeil profond et réparateur grâce à sa capacité à réguler la température corporelle.",
      icon: "😴",
      details: [
        "Régulation thermique naturelle",
        "Réduction des réveils nocturnes",
        "Meilleure qualité de sommeil"
      ]
    },
    {
      title: "Confort Optimal",
      description: "Une douceur exceptionnelle qui vous accompagne tout au long de la nuit pour un confort inégalé.",
      icon: "✨",
      details: [
        "Tissu ultra-doux",
        "Adaptation à la morphologie",
        "Mouvement fluide"
      ]
    },
    {
      title: "Bien-être",
      description: "Les propriétés naturelles du bambou contribuent à votre bien-être général pendant le sommeil.",
      icon: "🌿",
      details: [
        "Anti-stress naturel",
        "Respiration optimale",
        "Détente musculaire"
      ]
    }
  ];

  const ecoFeatures = [
    {
      title: "Production Durable",
      description: "Notre processus de fabrication respecte les plus hauts standards environnementaux.",
      icon: "🌱",
      points: [
        "Bambou certifié FSC",
        "Énergie renouvelable",
        "Zéro déchet"
      ]
    },
    {
      title: "Matériaux Écologiques",
      description: "Des matériaux 100% naturels et biodégradables pour un impact minimal sur l'environnement.",
      icon: "🌍",
      points: [
        "Bambou renouvelable",
        "Teintures naturelles",
        "Emballages recyclables"
      ]
    },
    {
      title: "Impact Positif",
      description: "Chaque achat contribue à la préservation de l'environnement et au développement durable.",
      icon: "💚",
      points: [
        "Compensation carbone",
        "Soutien aux communautés locales",
        "Économie circulaire"
      ]
    }
  ];

  const careInstructions = [
    {
      step: "1",
      title: "Lavage",
      description: "Lavez votre pyjama à 30°C maximum pour préserver ses propriétés naturelles.",
      tips: [
        "Utilisez une lessive douce",
        "Évitez l'eau de Javel",
        "Lavez à l'envers"
      ]
    },
    {
      step: "2",
      title: "Séchage",
      description: "Privilégiez le séchage à l'air libre pour maintenir la qualité du tissu.",
      tips: [
        "Évitez le sèche-linge",
        "Étendez à l'ombre",
        "Repassez si nécessaire"
      ]
    },
    {
      step: "3",
      title: "Entretien",
      description: "Un entretien régulier prolonge la durée de vie de votre pyjama.",
      tips: [
        "Stockage dans un endroit sec",
        "Évitez l'exposition directe au soleil",
        "Pliez soigneusement"
      ]
    }
  ];

  const customerReviews = [
    {
      name: "Sophie M.",
      rating: 5,
      comment: "Le meilleur pyjama que j'ai jamais porté ! La douceur du bambou est incomparable.",
      date: "15/03/2024",
      verified: true,
      highlights: ["Confort exceptionnel", "Qualité premium", "Durabilité"]
    },
    {
      name: "Thomas L.",
      rating: 5,
      comment: "Parfait pour les nuits d'été comme d'hiver. La régulation thermique est impressionnante.",
      date: "10/03/2024",
      verified: true,
      highlights: ["Thermorégulation", "Adaptabilité", "Confort"]
    },
    {
      name: "Marie K.",
      rating: 5,
      comment: "Je suis très sensible aux allergies et ce pyjama est parfait pour moi. Plus de démangeaisons !",
      date: "05/03/2024",
      verified: true,
      highlights: ["Hypoallergénique", "Douceur", "Qualité"]
    }
  ];

  const faqItems = [
    {
      question: "Comment le pyjama en bambou régule-t-il la température ?",
      answer: "Le bambou possède des propriétés naturelles de thermorégulation. Ses fibres creuses permettent une excellente circulation de l'air et une évacuation efficace de l'humidité, vous gardant au frais en été et au chaud en hiver."
    },
    {
      question: "Le pyjama rétrécit-il au lavage ?",
      answer: "Non, notre pyjama en bambou est pré-traité pour éviter tout rétrécissement. Suivez simplement les instructions d'entretien pour maintenir sa taille et sa forme d'origine."
    },
    {
      question: "Quelle est la durée de vie moyenne du pyjama ?",
      answer: "Avec un entretien approprié, notre pyjama en bambou peut durer plusieurs années. La qualité des matériaux et la solidité des coutures garantissent une excellente durabilité."
    },
    {
      question: "Le pyjama est-il vraiment écologique ?",
      answer: "Absolument ! Le bambou est l'une des plantes à la croissance la plus rapide, nécessite peu d'eau et aucun pesticide. Notre processus de fabrication est certifié écologique et respecte les normes environnementales les plus strictes."
    }
  ];

  const comparisonFeatures = [
    {
      feature: "Matériau",
      ourProduct: "Bambou viscose premium",
      others: "Coton standard",
      advantage: "Plus doux et plus respirant"
    },
    {
      feature: "Thermorégulation",
      ourProduct: "Naturelle et efficace",
      others: "Limitée",
      advantage: "Confort optimal toute l'année"
    },
    {
      feature: "Durabilité",
      ourProduct: "Exceptionnelle",
      others: "Moyenne",
      advantage: "Investissement rentable"
    },
    {
      feature: "Impact écologique",
      ourProduct: "Minimal",
      others: "Significatif",
      advantage: "Choix responsable"
    }
  ];

  const sizeGuide = [
    {
      size: "S",
      chest: "86-91 cm",
      waist: "71-76 cm",
      hips: "86-91 cm",
      height: "165-170 cm"
    },
    {
      size: "M",
      chest: "91-96 cm",
      waist: "76-81 cm",
      hips: "91-96 cm",
      height: "170-175 cm"
    },
    {
      size: "L",
      chest: "96-101 cm",
      waist: "81-86 cm",
      hips: "96-101 cm",
      height: "175-180 cm"
    },
    {
      size: "XL",
      chest: "101-106 cm",
      waist: "86-91 cm",
      hips: "101-106 cm",
      height: "180-185 cm"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <h2 className="text-3xl font-bold text-center mb-4 text-primary-dark">
          Un Pyjama Exceptionnel
        </h2>
        <p className="text-center text-light mb-12 max-w-2xl mx-auto">
          Découvrez pourquoi notre pyjama en bambou est le choix idéal pour un sommeil de qualité et un confort quotidien. Chaque détail a été pensé pour votre bien-être.
        </p>

        {/* Caractéristiques principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-dark">{feature.title}</h3>
                <p className="text-light mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {feature.benefits.map((benefit, idx) => (
                    <span key={idx} className="bg-secondary text-primary-dark px-3 py-1 rounded-full text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-secondary rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary-dark">Détails techniques :</h4>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-light">
                        <span className="text-primary mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bénéfices pour le sommeil */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary-dark text-center">
            Un Sommeil de Qualité
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sleepBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-secondary rounded-lg">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-primary-dark">{benefit.title}</h4>
                <p className="text-light mb-4">{benefit.description}</p>
                <ul className="space-y-2 text-left">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-light">
                      <span className="text-primary mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Spécifications techniques */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-primary-dark text-center">
            Spécifications Techniques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="p-4 bg-secondary rounded-lg">
                <h4 className="font-semibold mb-3 text-primary-dark">{spec.category}</h4>
                <ul className="space-y-2">
                  {spec.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-light">
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement écologique */}
        <div className="bg-secondary rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary-dark text-center">
            Notre Engagement Écologique
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecoFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-primary-dark">{feature.title}</h4>
                <p className="text-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-light">
                      <span className="text-primary mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Guide d'entretien */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary-dark text-center">
            Guide d'Entretien
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careInstructions.map((instruction, index) => (
              <div key={index} className="p-6 bg-secondary rounded-lg">
                <div className="text-3xl font-bold text-primary mb-4">Étape {instruction.step}</div>
                <h4 className="text-xl font-semibold mb-3 text-primary-dark">{instruction.title}</h4>
                <p className="text-light mb-4">{instruction.description}</p>
                <ul className="space-y-2">
                  {instruction.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-center text-light">
                      <span className="text-primary mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Avantages supplémentaires */}
        <div className="bg-secondary rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-primary-dark text-center">
            Pourquoi Choisir Notre Pyjama ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h4 className="font-semibold mb-2 text-primary-dark">Écologique</h4>
              <p className="text-light">Fabrication respectueuse de l'environnement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💫</div>
              <h4 className="font-semibold mb-2 text-primary-dark">Confortable</h4>
              <p className="text-light">Adaptation parfaite à votre morphologie</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✨</div>
              <h4 className="font-semibold mb-2 text-primary-dark">Durable</h4>
              <p className="text-light">Qualité premium pour une longue durée de vie</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="font-semibold mb-2 text-primary-dark">Sain</h4>
              <p className="text-light">Propriétés naturelles bénéfiques</p>
            </div>
          </div>
        </div>

        {/* Avis Clients */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary-dark text-center">
            Ce Que Nos Clients Disent
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerReviews.map((review, index) => (
              <div key={index} className="bg-secondary rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-2">⭐</div>
                  <div className="text-2xl mr-2">⭐</div>
                  <div className="text-2xl mr-2">⭐</div>
                  <div className="text-2xl mr-2">⭐</div>
                  <div className="text-2xl">⭐</div>
                </div>
                <p className="text-light mb-4 italic">"{review.comment}"</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {review.highlights.map((highlight, idx) => (
                    <span key={idx} className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary-dark">{review.name}</span>
                  <span className="text-light text-sm">{review.date}</span>
                </div>
                {review.verified && (
                  <div className="mt-2 text-sm text-primary">
                    ✓ Achat vérifié
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Guide des Tailles */}
        <div className="bg-secondary rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary-dark text-center">
            Guide des Tailles
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Taille</th>
                  <th className="p-4 text-left">Poitrine</th>
                  <th className="p-4 text-left">Taille</th>
                  <th className="p-4 text-left">Hanche</th>
                  <th className="p-4 text-left">Taille</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((size, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-primary-dark">{size.size}</td>
                    <td className="p-4 text-light">{size.chest}</td>
                    <td className="p-4 text-light">{size.waist}</td>
                    <td className="p-4 text-light">{size.hips}</td>
                    <td className="p-4 text-light">{size.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparaison */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary-dark text-center">
            Pourquoi Nous Sommes Différents
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary">
                  <th className="p-4 text-left text-primary-dark">Caractéristique</th>
                  <th className="p-4 text-left text-primary-dark">Notre Pyjama</th>
                  <th className="p-4 text-left text-primary-dark">Autres Pyjamas</th>
                  <th className="p-4 text-left text-primary-dark">Avantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-primary-dark">{feature.feature}</td>
                    <td className="p-4 text-light">{feature.ourProduct}</td>
                    <td className="p-4 text-light">{feature.others}</td>
                    <td className="p-4 text-primary">{feature.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-secondary rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary-dark text-center">
            Questions Fréquentes
          </h3>
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-primary-dark">
                  {faq.question}
                </h4>
                <p className="text-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-primary-dark">
            Prêt à Découvrir le Confort Exceptionnel ?
          </h3>
          <p className="text-light mb-6 max-w-2xl mx-auto">
            Rejoignez des milliers de clients satisfaits qui ont déjà fait le choix du confort et de la qualité. Profitez de notre offre spéciale et découvrez pourquoi notre pyjama en bambou est le choix idéal pour un sommeil de qualité.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold">
              Commander Maintenant
            </button>
            <button className="btn-secondary px-8 py-4 rounded-lg text-lg font-semibold">
              En Savoir Plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 