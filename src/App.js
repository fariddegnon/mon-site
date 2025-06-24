import './App.css';

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header className="header">
        <h1>INOVA SITE</h1>
        <p>Leader de l'impression digitale en Côte d'Ivoire</p>
      </header>

      {/* À PROPOS */}
      <section className="about">
        <h2>À propos de nous</h2>
        <p>
          Inova Site est une entreprise spécialisée dans l'impression digitale grand format, la signalétique et la
          communication visuelle. Notre expertise fait de nous un acteur incontournable en Côte d’Ivoire.
        </p>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Nos Services</h2>
        <ul>
          <li>📌 Impression numérique HD</li>
          <li>📌 Kakemonos, Bâches, Flyers, Autocollants</li>
          <li>📌 Enseignes lumineuses & Signalétique</li>
          <li>📌 Personnalisation d’objets</li>
        </ul>
      </section>

      {/* GALERIE */}
      <section className="gallery">
        <h2>Nos Réalisations</h2>
        <div className="gallery-grid">
          <img src="https://via.placeholder.com/300x200?text=Bâche+publicitaire" alt="Bâche publicitaire" />
          <img src="https://via.placeholder.com/300x200?text=Stand+expo" alt="Stand expo" />
          <img src="https://via.placeholder.com/300x200?text=Enseigne+lumineuse" alt="Enseigne lumineuse" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact</h2>
        <p>📍 Abidjan, Côte d'Ivoire</p>
        <p>📞 +225 07 00 00 00 00</p>
        <p>✉️ contact@inovasite.ci</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2025 Inova Site. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
