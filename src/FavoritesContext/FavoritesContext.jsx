import { createContext, useContext, useState, useEffect } from "react";

// Створюємо контекст для списку обраних кемперів
const FavoritesContext = createContext();

// Створюємо хук для доступу до контексту
export const useFavorites = () => {
  return useContext(FavoritesContext);
};

// Компонент-провайдер для глобального стану
export const FavoritesProvider = ({ children }) => {
  // Отримуємо список обраних кемперів з localStorage при ініціалізації
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Зберігаємо оновлений список обраних у localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Функція для додавання/видалення кемпера з обраних
  const toggleFavorite = (camperId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(camperId)) {
        return prevFavorites.filter((id) => id !== camperId);
      } else {
        return [...prevFavorites, camperId];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
