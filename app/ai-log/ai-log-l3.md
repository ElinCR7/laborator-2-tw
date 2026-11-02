# AI Log - Laboratorul 3 (React: Componente, Props și State)

**Tools**
- AI Assistant / Gemini

**Conversations**
- Structurarea interfeței în componente React independente, transmiterea datelor prin props, gestionarea stării aplicației cu `useState` și depanarea erorilor de import generate de Vite.

**Key requests**
1. **Crearea componentelor și stilizarea (Exercițiile 1 & 2)**
- *Asked:* Am cerut asistentului să mă ajute cu implementarea componentelor `Rezumat`, `ListaDestinatii` și `DestinatieCard`, și să îmi genereze CSS-ul necesar pentru aspectul de tip grilă, conform cerințelor din PDF.
- *Got:* AI-ul mi-a oferit codul pentru componente, explicându-mi cum să folosesc funcția `.map()` în JSX pentru a randa lista și mi-a furnizat CSS-ul corect pentru a așeza elementele (inclusiv evidențierea destinațiilor vizitate). Am implementat și un buton extra pentru ștergerea cardurilor.

2. **Formularul și adăugarea în state (Exercițiul 3)**
- *Asked:* Am solicitat scrierea componentei `FormularDestinatie` care să permită adăugarea unui oraș nou în listă.
- *Got:* Asistentul mi-a arătat cum se leagă un formular în React folosind `useState` pentru fiecare input (oraș, țară, zile) și cum se previne reîncărcarea paginii cu `event.preventDefault()`. Datele noi au fost trimise părintelui (`App.jsx`) printr-o funcție primită ca prop (`onAdd`).

3. **Depanarea erorilor de sintaxă și importuri**
- *Asked:* M-am blocat la niște erori în terminal: `does not provide an export named 'formatDestinatie'` și erori de tipul `Already included file name... differs from already included`. I-am cerut asistentului să mă ajute să le repar.
- *Got:* Am aflat că Vite este foarte strict la case-sensitivity (litere mari/mici). Problema era că denumirea fișierelor de pe disc nu coincidea perfect cu importurile. De asemenea, AI-ul m-a ghidat să curăț fișierul `main.jsx` de testele vechi din laboratorul 2, care blocau rularea noului cod.

**What I learned / what did not work**
- **Props vs State:** Am înțeles că datele coboară de la părinte la copil prin *props* (care sunt read-only), iar pentru ca un copil (ex: un card) să modifice datele, trebuie să apeleze o funcție (ex: `onToggle` sau `onDelete`) primită tot prin props de la părintele care deține *state-ul*.
- **Strictness-ul importurilor în Vite:** Am învățat pe pielea mea că React și Vite nu iartă greșelile de scriere la importuri. Un simplu import cu literă mică pentru o componentă scrisă cu literă mare blochează complet aplicația.
- **Formulare în React:** Dacă nu pui `event.preventDefault()` pe submit-ul unui formular, browserul va da refresh și vei pierde instantaneu toate datele din state-ul aplicației.