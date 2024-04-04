# Auto Sign

# Script permettant l'auto signature

## Objectif

Permettre la signature automatique en paramettrant l'heure de matin et l'heure d'après midi.

## Prérequis

Assurez-vous d'avoir Node.js installé sur votre machine.

## Étapes

### Étape 1: Initialisation du projet React

1. Clonez le repository depuis Github :

   ```bash
   git clone https://github.com/nilpa018/Auto-Sign.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd Auto-Sign
   ```

3. Lancez l'installation des modules et construction du dossier public :

   ```bash
   npm install
   ```

4. Transformez le fichier .env.example en .env en y insérant vos données :
 

5. Lancez l'application pour vous assurer que tout fonctionne correctement :
   ```bash
   npx playwright test
   ```   

### Étape 2: Contenu du projet

Le projet est constitué comme ceci :

- index.js: Le script principale.
- .env: Le fichier permettant de stocker les crédentials et l'URL d'accès à la page de connection.
- auto_sign.spec.js: Le fichier permettant l'auto sign (en cours de développement). 

### Étape 3: Informations  

Vous devez utiliser des secrets d'environnement dans Github Actions afin de pouvoir passer le job.

Voici les 3 secrets à ajouter :  

USER_WEB_URL="https://sitetosign/signin"
USER_EMAIL="email@domain.com"
USER_PIN_CODE="mysecretpassword" 

### Ressources

Documentation Node : https://nodejs.org/docs/latest/api/  
Documentation Playwright : https://playwright.dev/docs/intro   
