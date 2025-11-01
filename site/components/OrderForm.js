function OrderForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    quantity: '1'
  });
  
  const [showError, setShowError] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('quantity', formData.quantity);
      
      const response = await fetch('sendCPA.php', {
        method: 'POST',
        body: formDataToSend
      });
      
      const result = await response.json();
      
      if (result.success) {
        window.location.href = 'good.html';
      } else {
        setShowError(true);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Order form error:', error);
      setShowError(true);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    try {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    } catch (error) {
      console.error('Form change error:', error);
    }
  };

  try {
    return (
      <section id="order" className="px-4 py-12 bg-[var(--secondary-color)] relative" data-name="order-form" data-file="components/OrderForm.js">
        {/* Модальное окно ошибки */}
        {showError && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl transform animate-scaleIn">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2">
                  Ошибка оформления
                </h3>
                <p className="text-[var(--text-light)] mb-6">
                  Не удалось оформить заказ. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.
                </p>
                <button
                  onClick={() => setShowError(false)}
                  className="w-full bg-[var(--primary-color)] text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg active:scale-95"
                >
                  Попробовать снова
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-3">
            Оформить заказ
          </h2>
          <p className="text-[var(--text-light)]">
            Заполните форму и мы свяжемся с вами
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
              Ваше имя
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
              placeholder="Введите ваше имя"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
              Телефон
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
              placeholder="+375 (XX) XXX-XX-XX"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
              Количество саженцев
            </label>
            <select
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
              disabled={isSubmitting}
            >
              <option value="1">1 саженец</option>
              <option value="2">2 саженца</option>
              <option value="3">3 саженца</option>
              <option value="4">4 саженца (3+1 в подарок)</option>
              <option value="5+">Более 4 саженцев</option>
            </select>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[var(--border-color)]">
            <div className="flex items-center space-x-3 mb-2">
              <div className="icon-info text-[var(--accent-color)]"></div>
              <h4 className="font-medium text-[var(--text-dark)]">Условия доставки</h4>
            </div>
            <ul className="text-sm text-[var(--text-light)] space-y-1">
              <li>• Доставка по всей Беларуси</li>
              <li>• Оплата при получении</li>
              <li>• Сроки доставки: 2-5 дней</li>
            </ul>
          </div>

          <button 
            type="submit" 
            className="btn-primary relative"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Оформление...
              </span>
            ) : (
              'Оформить заказ'
            )}
          </button>

          <p className="text-xs text-[var(--text-light)] text-center leading-relaxed">
            Нажимая кнопку, вы соглашаетесь с{' '}
            <a href="politics.html" className="text-blue-500 hover:text-blue-600 underline">
              политикой конфиденциальности
            </a>
            {' '}и{' '}
            <a href="oferta.html" className="text-blue-500 hover:text-blue-600 underline">
              пользовательским соглашением
            </a>
          </p>
        </form>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes scaleIn {
            from { 
              opacity: 0;
              transform: scale(0.9);
            }
            to { 
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out;
          }
          
          .animate-scaleIn {
            animation: scaleIn 0.3s ease-out;
          }
        `}</style>
      </section>
    );
  } catch (error) {
    console.error('OrderForm component error:', error);
    return null;
  }
}