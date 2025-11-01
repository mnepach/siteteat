function Header() {
  try {
    return (
      <header className="relative z-10 px-4 py-4 pt-16 max-w-7xl mx-auto" data-name="header" data-file="components/Header.js">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg gradient-bg flex items-center justify-center">
              <div className="icon-leaf text-lg md:text-2xl text-white"></div>
            </div>
            <div>
              <h1 className="text-base md:text-xl font-semibold text-[var(--text-dark)]">GreenGarden</h1>
              <p className="text-xs md:text-sm text-[var(--text-light)]">Саженцы смородины</p>
            </div>
          </div>
          
          <button className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center border border-[var(--border-color)]">
            <div className="icon-phone text-base md:text-xl text-[var(--primary-color)]"></div>
          </button>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}