API TypeScript - WIK-DPS-TP01 Erwan MENARD

Le projet est une API développée en TypeScript. Elle propose deux fonctionnalités principales :

Lorsqu'une requête GET est envoyée sur l'endpoint /ping, l'API retourne les headers de la requête au format JSON.
Toute autre requête ou endpoint renvoie une erreur "404 Not Found" au format JSON.
Installation
Pré-requis
Avant de commencer, vous devez avoir Node.js et TypeScript installés sur votre machine.

Étapes
Pour utiliser ce projet, commencez par cloner le dépôt GitHub grâce au lien "git clone https://github.com/erwanmenard/TP-WIK-DPS-TP01.git". Une fois téléchargé, placez-vous dans le dossier du projet.

Ensuite, installez les dépendances nécessaires pour le faire fonctionner grâce à la commande "npm install". Une fois les dépendances installées, compilez le code TypeScript en JavaScript, "npx tsc".

Pour lancer l’API, démarrez le serveur à l'aide de la commande "npm run start" . Celle-ci va compiler le fichier TypeScript et exécuter le fichier JavaScript nouvellement généré.

Par défaut, l’API sera accessible sur le port 8080. Si vous voulez qu’elle fonctionne sur un port différent, vous pouvez définir la variable d’environnement PING_LISTEN_PORT pour choisir un autre port (par exemple, 3000).
exemple : "PING_LISTEN_PORT=3000 npm run start"

