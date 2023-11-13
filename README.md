STEPS PER USARE GIT

Ho creato una repository su git che sarà quella su cui lavoreremo.
La repository creata contiene:

    -   3 Files HTML (uno per pagina. La welcome page, la pagina questionario e risultati, la pagina di feedback)
    -   Una cartella assets contenente una cartella js e una css
    -   Un file style.css nella cartella css
    -   3 Files JS, uno per ogni pagina HTML.
    -   Un file .gitignore che serve ad evitare di importare i files .DS_Store quando facciamo un push.
    
COME USARE GIT

Gli steps qui di seguito sono come li ha spiegati il prof. E' importante che li seguiamo nella giusta sequenza in modo da poter usare bene sto git e non doverci mandare i files via e-mail. E' anche un'occasione per imparare a usarlo correttamente.

1. Clonare la repository. COMANDO git clone https://github.com/matteofalco1986/FSDevBuildWeek1.git

2. Creare un vostro branch su cui lavorerete. COMANDO git branch <nomeBranch>
3. Switchare sul vostro branch. COMANDO git checkout <nomeBranch>
4. Aggiungere i files all'area di staging. COMANDO git add . (I files da aggiungere saranno quelli nella cartella creata dalla repository clonata. Files aggiuntivi, da quel che ho visto, creeranno problemi. Quindi se avete già scritto codice, copiatelo e incollatelo nei files della repository clonata invece di pushare i files che avete creato, altrimenti poi il merge non funzionerà)
5. Committare i files. COMANDO git commit -m "Contenuto del messaggio". Il contenuto del messaggio deve essere significativo dei cambiamenti che avete fatto.
6. Connettetevi alla repository remota. COMANDO git add remote origin https://github.com/matteofalco1986/FSDevBuildWeek1.git
7. Pushate i files committati sul vostro branch. COMANDO git push -u origin <nomeBranch>
8. A inizio giornata, pullare i files e modifiche in modo da avere i files aggiornati su cui lavorare. COMANDO git pull 

NOTA BENE

Da quanto ha detto il prof, il workflow corretto è partire con la repository clonata, fare un push a fine giornata, e un pull a inizio giornata. Il pull servirà a scaricare le modifiche fatte anche da tutti gli altri. E' fondamentale però che partiamo tutti dalla stessa repository clonata. Incrociando le dita, dovrebbe funzionare tutto seguendo questi steps.
