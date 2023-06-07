# Traccia

Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## MILESTONE 1

Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.

## MILESTONE 2

Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

## MILESTONE 3

In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

## MILESTONE 4

Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!

## Steps

1. Recupero gli elementi dal DOM
1. Metto in ascolto il pulsante play (al click)
   - Creo un ciclo da 0 a 100
     - Creo un elemento div
     - Aggiungo la classe cell
     - Appendo al div il numero del contatore
     - Lo appendo nel DOM
     - Metto in ascolto le celle
       - Al click aggiungo la classe per farle colorare e stampare il numero in console
