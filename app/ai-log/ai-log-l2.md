# Jurnal  de utilizare AI - Laboratorul 2 (Vite & JavaScript)
--Proiect--:City Explorer
--Instrument--:AI Assistant / Gemini

# Conversations

Clarificări setup proiect Vite, optimizare sintaxă pentru funcții imutabile și asistență la depanarea erorilor de import.

# Key requests

--Validare Setup Vite: Am inițializat proiectul, dar i-am cerut asistentului să îmi verifice pașii de clean-up și să-mi confirme dacă am structurat corect folderele (data, utils, api) pentru a respecta cerințele laboratorului.

--Optimizare Imutabilitate: Am scris funcțiile de prelucrare a destinațiilor, însă l-am întrebat cum le pot rescrie mai curat pentru a respecta strict imutabilitatea. AI-ul mi-a arătat cum să înlocuiesc modificările directe cu operatorul spread (...) și cum să folosesc mai eficient .reduce().

--Depanare Erori & API: M-am blocat la o eroare de tipul does not provide an export named și i-am cerut un indiciu. M-a ajutat să identific că problema era de la un fișier nesalvat și o omisiune la cuvântul export. Totodată, i-am cerut un mic exemplu despre cum se prind corect erorile HTTP la Fetch API.

# What I learned / what did not work

--Mi-am clarificat mult mai bine principiul imutabilității.Am înțeles că trebuie să construiesc mereu array-uri noi folosind spread operator ([...]), lucru care mă va ajuta mai târziu în React.

--La partea de depanare, am observat pe pielea mea cât de stricte sunt modulele ES: o mică neatenție la exporturi sau un fișier uitat nesalvat în editor blochează complet actualizarea paginii în Vite.

