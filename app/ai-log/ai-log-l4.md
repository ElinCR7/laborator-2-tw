## AI Log - Laboratorul 4 (React: Date de la server și formulare cu validare)

**Tools**

- AI Assistant / Gemini

**Conversations**

- Structurarea cererilor HTTP cu fetch (GET, POST, PATCH), gestionarea ciclului de viață și a efectelor secundare folosind useEffect, depanarea problemelor de rețea, măsurarea performanței și optimizarea prin paginare.

**Key requests**

1. **Conectarea cu serverul și cererile HTTP (Exercițiile 1 & 2)**

- Asked: Am cerut asistentului să mă ajute să implementez preluarea datelor de la un json-server local folosind useEffect și funcții asincrone, precum și trimiterea de date prin POST și actualizări parțiale prin PATCH.

- Got: AI-ul mi-a oferit funcțiile de API (getDestinatii, postDestinatie, patchVizitat) și mi-a explicat importanța conversiei corecte a datelor (de ex. folosirea Number() pentru numărul de zile) și a gestionării stărilor de încărcare (loading) și eroare (error). De asemenea, am analizat comportamentul cererilor multiple cauzate de <StrictMode> din React.

2. **Corectarea bug-urilor din panoul de statistici (Exercițiul 3)**

- Asked: Am solicitat identificarea și corectarea a șapte probleme/greșeli ascunse în panoul de statistici și în stilizarea CSS a aplicației.

- Got: Am remediat erorile legate de calculul statisticilor (care foloseau toate datele în loc de cele filtrate), randarea simultană a mesajelor de listă goală, operatorii de comparare rigizi, bug-ul de blocare a input-ului, tratarea erorilor de server în blocul finally, precum și corectarea unor unități de măsură lipsă și a regulilor CSS duplicate.

3. **Optimizarea performanței și Paginarea (Exercițiul 5)**

-Asked: Am cerut ghidaj pentru generarea unei baze de date mari (2000 de înregistrări cu un script Node.js), măsurarea performanței aplicației nepaginate (timp de răspuns, dimensiune, comportament la tastare) și implementarea paginării.

-Got: Am generat fișierul db-mare.json, am realizat măsurătorile care au evidențiat blocarea interfeței (~1200ms la tastare din cauza randării DOM) și am implementat paginarea de 20 de elemente pe pagină folosind parametrii _page și _per_page oferiți de json-server, reducând drastic timpul de răspuns și fluidizând interfața.

**What I learned / what did not work**

- Comportamentul useEffect și dependențele: Am înțeles în mod practic ce înseamnă lipsa array-ului de dependențe ([]), care declanșează o buclă infinită de cereri către server și poate bloca browserul.

- Impactul randării DOM asupra performanței: Am învățat că adevărata problemă a seturilor mari de date nu este neapărat mărimea traficului de rețea, ci efortul depus de motorul browserului pentru a randa mii de elemente DOM simultan, problemă rezolvată cu succes prin paginare.

- Codurile de status HTTP: Am consolidat cunoștințele despre diferența dintre codul 200 OK (pentru GET și PATCH), codul 201 Created (pentru POST) și importanța tratării codurilor de eroare de rețea.

- Starea finală: Aplicația a fost readusă la starea curată de 6 destinații pe portul 3001, iar măsurătorile complete au fost centralizate în fișa de laborator.