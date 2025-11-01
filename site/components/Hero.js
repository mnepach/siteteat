function Hero() {
  try {
    return (
      <section className="px-4 py-3 relative z-10 max-w-7xl mx-auto" data-name="hero" data-file="components/Hero.js">
        <div className="text-center mb-3">
          <div className="inline-block bg-[var(--accent-color)] text-white text-xs px-2 py-1 rounded mb-2">
            🎉 Акция
          </div>
          
          <h1 className="text-lg md:text-3xl font-bold text-[var(--text-dark)] mb-2">
            Саженцы смородины{' '}
            <span className="text-[var(--accent-color)]">3-х летка</span>
          </h1>
          
          <p className="text-[var(--text-light)] text-xs md:text-base mb-2">
            Урожайность до 5 кг с куста • Морозостойкость -35°С
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden mb-3 shadow-md max-w-2xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop&crop=center&auto=format&q=85" 
            alt="Саженцы кустарников" 
            className="w-full h-32 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-2 md:bottom-6 left-2 md:left-6 text-white">
            <div className="text-[10px] md:text-sm opacity-90">Цена за 2 шт:</div>
            <div className="text-base md:text-3xl font-bold">49,99 BYN</div>
          </div>
          <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-red-500 text-white text-[10px] md:text-sm px-1.5 md:px-3 py-0.5 md:py-1 rounded">
            +1 в подарок
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 md:gap-6 mb-3 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-8 h-8 md:w-16 md:h-16 rounded bg-[var(--secondary-color)] mx-auto mb-1 md:mb-3 flex items-center justify-center">
              <div className="icon-shield-check text-sm md:text-2xl text-[var(--primary-color)]"></div>
            </div>
            <p className="text-[10px] md:text-sm text-[var(--text-light)]">Гарантия</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 md:w-16 md:h-16 rounded bg-[var(--secondary-color)] mx-auto mb-1 md:mb-3 flex items-center justify-center">
              <div className="icon-truck text-sm md:text-2xl text-[var(--primary-color)]"></div>
            </div>
            <p className="text-[10px] md:text-sm text-[var(--text-light)]">Доставка</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 md:w-16 md:h-16 rounded bg-[var(--secondary-color)] mx-auto mb-1 md:mb-3 flex items-center justify-center">
              <div className="icon-heart text-sm md:text-2xl text-[var(--primary-color)]"></div>
            </div>
            <p className="text-[10px] md:text-sm text-[var(--text-light)]">Поддержка</p>
          </div>
        </div>

        <div className="mb-3 space-y-2 max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-2 md:p-4">
            <div className="text-[10px] md:text-sm text-gray-500 line-through">Обычно 80 BYN</div>
            <div className="text-sm md:text-xl font-bold text-[var(--primary-color)]">2 шт = 49,99 BYN</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-2 md:p-4 border border-orange-200">
            <div className="text-[10px] md:text-sm text-gray-500 line-through">Обычно 120 BYN</div>
            <div className="text-sm md:text-xl font-bold text-[var(--accent-color)]">3+1 = 74,99 BYN</div>
          </div>
        </div>

        <a href="#order" className="btn-primary block text-center py-2.5 md:py-4 text-sm md:text-lg font-medium rounded-lg max-w-2xl mx-auto">
          Заказать саженцы
        </a>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}ы