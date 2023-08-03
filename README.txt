Agli utilizzatori di questo progetto locale: 

--nel progetto è possibile effettuare Log-In e Log-Out, gestita tramite un token statico.

--Viene gestito in maniera statica: il carosello nella home e la pagina profilo.
--Viene gestita in maniera dinamica;
----Nella navbar: Categoria, Storico, Carrello.
----Nei componenti: products, order-history, carrello.

nel progetto è possibile;
--Cliccando per le varie categorie:
----la visualizzazione dei vari prodotti,
----la visualizzazione della specifica dei prodotti,
----l'aggiunta al carrello dei prodotti.

Nel carrello è possibile:
-- La visualizzazione dei prodotti inseriti,
-- Gestire la quantità dei prodotti,
-- Il cancellamento del singolo prodotto,
-- Il cancellamento di tutti i prodotti,
-- Il proseguimento nella voce "checkout"

Nel checkout è possibile:
-- La visualizzazione dei prodotti e della quantità variata,
-- Il cambiamento di prezzo totale in base alle quantità e al prezzo dei prodotti,
-- L'invio del pagamento tramite la voce "paga"

Nello storico è possibile:
--visualizzare i prodotti "acquistati" dal checkout, stampando anche la data e l'ora,
però, i prodotti salvati nello storico non vengono archiviati nel localStorage.