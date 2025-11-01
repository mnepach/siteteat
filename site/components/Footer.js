function Footer() {
  try {
    return (
      <footer className="px-4 py-8 bg-[var(--text-dark)] text-white" data-name="footer" data-file="components/Footer.js">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-2xl gradient-bg flex items-center justify-center">
              <div className="icon-leaf text-lg text-white"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">GreenGarden</h3>
              <p className="text-sm opacity-75">Саженцы для дачи</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="icon-phone text-[var(--accent-color)]"></div>
              <span>+375 (29) 123-45-67</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="icon-mail text-[var(--accent-color)]"></div>
              <span>info@greengarden.by</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="icon-clock text-[var(--accent-color)]"></div>
              <span>Пн-Вс: 9:00-20:00</span>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4 pb-4">
            <div className="flex flex-col space-y-2 text-sm mb-4">
              <a href="politics.html" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors">
                Политика конфиденциальности
              </a>
              <a href="oferta.html" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors">
                Публичная оферта
              </a>
              <a href="obmen_vozvrat.html" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors">
                Обмен и возврат товара
              </a>
            </div>
            <p className="text-sm opacity-75">
              © 2025 GreenGarden. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}