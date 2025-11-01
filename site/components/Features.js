function Features() {
  try {
    const features = [
      {
        icon: "leaf",
        title: "100% приживаемость", 
        description: "Гарантируем, что саженцы приживутся или заменим бесплатно"
      },
      {
        icon: "snowflake",
        title: "Морозостойкие сорта",
        description: "Все растения адаптированы к климату Беларуси"
      },
      {
        icon: "package",
        title: "Бережная упаковка",
        description: "Специальная упаковка сохраняет корневую систему"
      },
      {
        icon: "headphones",
        title: "Консультации садовода",
        description: "Поможем с выбором и дадим советы по уходу"
      }
    ];

    return (
      <section className="px-4 py-12" data-name="features" data-file="components/Features.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-3">
              Почему выбирают нас?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <div className={`icon-${feature.icon} text-lg md:text-2xl text-white`}></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--text-dark)] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--text-light)] text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}