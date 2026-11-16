import { useState, useEffect } from 'react';
import { getNevizitate, totalZile } from './utils/destinatii.js';
import { getDestinatii, postDestinatie, patchVizitat } from './api/destinatii.js';
import ListaDestinatii from './components/ListaDestinatii.jsx';
import FormularDestinatie from './components/FormularDestinatie.jsx';
import Rezumat from './components/Rezumat.jsx';
import Cautare from './components/Cautare.jsx';
import './App.css';

export default function App() {
  const [destinatii, setDestinatii] = useState([]);
  const [incarcare, setIncarcare] = useState(true);
  const [eroare, setEroare] = useState(null);
  const [seTrimite, setSeTrimite] = useState(false);
  const [cautare, setCautare] = useState('');

  useEffect(() => {
    async function incarca() {
      try {
        const date = await getDestinatii();
        setDestinatii(date);
      } catch (err) {
        setEroare(err.message);
      } finally {
        setIncarcare(false);
      }
    }
    incarca();
  }, []);

  async function handleToggle(id) {
    const destinatie = destinatii.find(d => d.id === id);
    try {
      const salvata = await patchVizitat(id, !destinatie.vizitat);
      setDestinatii(curent => curent.map(d => d.id === id ? salvata : d));
    } catch (err) {
      console.error(err);
    }
  }

  async function handleAdd(nouaDestinatie) {
    setSeTrimite(true);
    try {
      const salvata = await postDestinatie(nouaDestinatie);
      setDestinatii(curent => [...curent, salvata]);
    } catch (err) {
      console.error(err);
    } finally {
      setSeTrimite(false);
    }
  }

  if (incarcare) return <p className="stare">Se încarcă destinațiile...</p>;
  if (eroare) return <p className="stare eroare">Nu am putut încărca datele: {eroare}</p>;

  const text = cautare.trim().toLowerCase();
  const afisate = destinatii.filter(
    (d) => d.oras.toLowerCase().includes(text) || d.tara.toLowerCase().includes(text)
  );
  
  const nevizitate = getNevizitate(destinatii);

  return (
    <main>
      <h1>City Explorer</h1>
      <Rezumat total={destinatii.length} nevizitate={nevizitate.length} zile={totalZile(nevizitate)} />
      <FormularDestinatie onAdd={handleAdd} seTrimite={seTrimite} />
      <Cautare valoare={cautare} onChange={setCautare} />
      
      {destinatii.length === 0 && (
        <p className="gol">Nu există nicio destinație. Adaugă prima din formular.</p>
      )}
      {destinatii.length > 0 && afisate.length === 0 && (
        <p className="gol">Niciun rezultat pentru „{cautare}”.</p>
      )}
      {afisate.length > 0 && (
        <ListaDestinatii destinatii={afisate} onToggle={handleToggle} />
      )}
    </main>
  );
}