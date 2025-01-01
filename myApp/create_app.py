import os
import subprocess

def run_command(command, error_message):
    """
    Exécute une commande shell et gère les erreurs.
    """
    try:
        print(f"Exécution : {command}")
        result = subprocess.run(command, shell=True, check=True, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Erreur : {error_message}")
        print(e.stderr)
        exit(1)

def is_git_repo():
    """
    Vérifie si le dossier courant est un dépôt Git valide.
    """
    try:
        subprocess.run("git status", shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        return True
    except subprocess.CalledProcessError:
        return False

def is_ionic_project():
    """
    Vérifie si le dossier courant contient un projet Ionic valide.
    """
    return os.path.exists("ionic.config.json")

def create_git_branch(branch_name):
    """
    Crée une nouvelle branche Git ou bascule dessus si elle existe déjà.
    """
    try:
        print(f"Création ou bascule sur la branche : {branch_name}")
        subprocess.run(f"git checkout -b {branch_name}", shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    except subprocess.CalledProcessError:
        print(f"La branche '{branch_name}' existe déjà. Passage sur la branche.")
        subprocess.run(f"git checkout {branch_name}", shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

def create_react_page_with_routing(page_name):
    """
    Crée une page Ionic React avec un header, un contenu, un footer et une redirection automatique.
    """
    print(f"Création manuelle de la page React avec route : {page_name}")
    pages_dir = os.path.join("src", "pages")
    page_dir = os.path.join(pages_dir, page_name)

    # Vérifie ou crée le dossier src/pages
    if not os.path.exists(pages_dir):
        os.makedirs(pages_dir)
        print(f"Dossier créé : {pages_dir}")

    # Vérifie ou crée le dossier de la page
    if not os.path.exists(page_dir):
        os.makedirs(page_dir)
        print(f"Dossier créé : {page_dir}")

    # Crée les fichiers nécessaires pour la page
    page_file = os.path.join(page_dir, f"{page_name}.tsx")
    style_file = os.path.join(page_dir, f"{page_name}.css")

    # Créer le composant React pour la page
    if not os.path.exists(page_file):
        with open(page_file, "w") as f:
            f.write(f"""import React, {{ useEffect }} from 'react';
import './{page_name}.css';
import {{ IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner, IonFooter }} from '@ionic/react';
import {{ useHistory }} from 'react-router-dom';

const {page_name.capitalize()} = () => {{
    const history = useHistory();

    useEffect(() => {{
        const timer = setTimeout(() => {{
            history.push('/home');
        }}, 3000);
        return () => clearTimeout(timer);
    }}, [history]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="medium">
                    <IonTitle>{page_name.capitalize()}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="spinner-container">
                    <IonSpinner name="crescent" />
                </div>
                <div className="custom-content">
                    <p>Welcome to the Loading Page!</p>
                </div>
            </IonContent>
            <IonFooter>
                <IonToolbar color="medium">
                    <IonTitle className="footer-text">Cymath</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
}};

export default {page_name.capitalize()};
""")
        print(f"Fichier créé : {page_file}")

    # Créer les styles CSS pour la page
    if not os.path.exists(style_file):
        with open(style_file, "w") as f:
            f.write(f"""body {{
    margin: 0;
    font-family: Arial, sans-serif;
}}

.spinner-container {{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    background-color: #000;
}}

.custom-content {{
    text-align: center;
    background-color: blue;
    color: gold;
    padding: 10px;
}}

.footer-text {{
    text-align: center;
}}
""")
        print(f"Fichier créé : {style_file}")

def update_routes():
    """
    Met à jour le fichier routes pour inclure la nouvelle page sans ajouter de doublons.
    """
    app_file = os.path.join("src", "App.tsx")
    if not os.path.exists(app_file):
        print("Erreur : Le fichier App.tsx n'a pas été trouvé.")
        exit(1)

    with open(app_file, "r") as f:
        content = f.read()

    # Supprimer les doublons d'importation pour LoadingPage
    content = content.replace("import LoadingPage from './pages/loading-page/loading-page';\n", "")
    
    # Ajouter l'import pour LoadingPage s'il n'est pas présent
    if "import LoadingPage" not in content:
        content = content.replace(
            "import {",
            f"import LoadingPage from './pages/loading-page/loading-page';\nimport {{"
        )
        print("Import ajouté pour 'LoadingPage'.")
    else:
        print("L'import pour 'LoadingPage' existe déjà.")

    # Vérifier si la route existe déjà
    if "path='/loading-page'" in content:
        print("La route 'loading-page' existe déjà dans App.tsx.")
    else:
        # Ajouter la route si elle n'existe pas
        content = content.replace(
            "</IonRouterOutlet>",
            "  <Route path='/loading-page' component={LoadingPage} />\n</IonRouterOutlet>"
        )
        print("Route ajoutée pour 'loading-page'.")

    # Écrire les modifications dans le fichier
    with open(app_file, "w") as f:
        f.write(content)

    print("Mise à jour des routes terminée.")

def main():
    # Vérifie si le dossier est un dépôt Git
    if not is_git_repo():
        print("Erreur : Ce dossier n'est pas un dépôt Git. Initialisation en cours...")
        run_command("git init", "Impossible d'initialiser le dépôt Git.")
        run_command("git add .", "Impossible d'ajouter les fichiers au dépôt Git.")
        run_command("git commit -m 'Initial commit'", "Impossible de faire un premier commit.")
        print("Dépôt Git initialisé avec succès.")

    # Vérifie si le projet Ionic est correctement initialisé
    if not is_ionic_project():
        print("Erreur : Ce dossier ne contient pas un projet Ionic valide.")
        exit(1)

    # Étape 1 : Créer la branche Git
    branch_name = "01-loading-page"
    create_git_branch(branch_name)

    # Étape 2 : Créer la page React avec routing
    page_name = "loading-page"
    create_react_page_with_routing(page_name)

    # Étape 3 : Mettre à jour les routes
    update_routes()

    print("Création de la branche, de la page et configuration des routes terminées avec succès.")

if __name__ == "__main__":
    main()
