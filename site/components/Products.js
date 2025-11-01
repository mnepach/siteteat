function Products() {
  try {
    const products = [
      {
        name: "Смородина черная",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&w=800&q=85",
        features: ["Морозостойкость до -35°C", "Урожайность 3-5 кг", "Крупные ягоды"],
        isPopular: true
      },
      {
        name: "Крыжовник зеленый",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&w=800&q=85",
        features: ["Устойчив к болезням", "Сладкие плоды", "Декоративный вид"]
      },
      {
        name: "Малина ремонтантная",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&w=800&q=85",
        features: ["Плодоносит 2 раза в год", "Крупные ягоды", "Неприхотлива в уходе"]
      }
    ];

    return (
      <section className="px-4 py-12 bg-[var(--secondary-color)]" data-name="products" data-file="components/Products.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-3">
              Наши саженцы
            </h2>
            <p className="text-[var(--text-light)] text-sm md:text-base">
              Качественные кустарники для вашего сада
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 text-sm md:text-base text-[var(--text-light)] bg-white px-4 md:px-6 py-3 md:py-4 rounded-2xl border border-[var(--border-color)]">
              <div className="icon-clock text-[var(--accent-color)]"></div>
              <span>Акция действует до конца месяца</span>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Products component error:', error);
    return null;
  }
}