import { useState, useMemo } from "react";
import "./App.css";



const PRODUCTS: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 79.99, category: "Electronics" },
  { id: 2, name: "Running Shoes", price: 59.99, category: "Clothing" },
  { id: 3, name: "Organic Granola", price: 8.49, category: "Food" },
  { id: 4, name: "Bluetooth Speaker", price: 45.0, category: "Electronics" },
  { id: 5, name: "Winter Jacket", price: 129.99, category: "Clothing" },
  { id: 6, name: "Almond Butter", price: 11.99, category: "Food" },
  { id: 7, name: "USB-C Hub", price: 34.99, category: "Electronics" },
  { id: 8, name: "Yoga Pants", price: 42.0, category: "Clothing" },
  { id: 9, name: "Cold Brew Coffee", price: 14.5, category: "Food" },
  { id: 10, name: "Mechanical Keyboard", price: 109.99, category: "Electronics" },
];



export default function App() {
  const [search, setSearch] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");


  return (
    <div className="page">
      <header className="page-header">
        <h1>Product Listing</h1>
        <p className="subtitle">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        </p>
      </header>

      <div className="controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">🔍</span>
          <p>No results found</p>
          <small>Try adjusting your search or category filter.</small>
        </div>
      ) : (
        <ul className="product-grid">
          {filtered.map((product) => (
            <li key={product.id} className="product-card">

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
