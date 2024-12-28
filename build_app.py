import os
import subprocess
import shutil

# Fonction pour afficher le menu et obtenir le choix de l'utilisateur
def afficher_menu():
    print("\nListe des fonctions disponibles :")
    print("1. Copier un dossier et son contenu")
    print("2. Renommer une occurrence dans les fichiers et dossiers")
    print("3. Supprimer un fichier ou un dossier")
    print("4. Copier un dossier et renommer toutes les occurrences")
    print("5. Build App")
    print("6. Quitter")
    choix = input("Veuillez entrer le numéro de la fonction à exécuter (1, 2, 3, 4, 5, 6) : ")
    return choix

# Fonction pour copier un dossier et son contenu
def copier_dossier():
    source = input("Entrez le chemin du dossier à copier : ")
    destination = input("Entrez le chemin de destination : ")
    
    try:
        if not os.path.exists(destination):
            shutil.copytree(source, destination)
            print(f"Dossier {source} copié avec succès vers {destination}.")
        else:
            print(f"Le dossier de destination {destination} existe déjà. Veuillez choisir un autre chemin.")
    except Exception as e:
        print(f"Erreur lors de la copie du dossier : {e}")

# Fonction pour renommer une occurrence dans les fichiers et dossiers
def renommer_occurrence():
    dossier = input("Entrez le chemin du dossier dans lequel rechercher : ")
    ancienne_occurence = input("Entrez l'ancienne occurrence à renommer : ")
    nouvelle_occurence = input("Entrez le nouveau nom pour remplacer l'occurrence : ")

    try:
        # Renommer les fichiers
        for root, dirs, files in os.walk(dossier):
            for file_name in files:
                new_file_name = file_name.replace(ancienne_occurence, nouvelle_occurence)
                if new_file_name != file_name:
                    os.rename(os.path.join(root, file_name), os.path.join(root, new_file_name))
                    print(f"Renommé {file_name} en {new_file_name}")
        
        # Renommer les dossiers
        for root, dirs, files in os.walk(dossier, topdown=False):
            for dir_name in dirs:
                new_dir_name = dir_name.replace(ancienne_occurence, nouvelle_occurence)
                if new_dir_name != dir_name:
                    os.rename(os.path.join(root, dir_name), os.path.join(root, new_dir_name))
                    print(f"Renommé {dir_name} en {new_dir_name}")
        
        print("Renommage effectué avec succès.")
    except Exception as e:
        print(f"Erreur lors du renommage des occurrences : {e}")

# Fonction pour supprimer un fichier ou un dossier
def supprimer_fichier_dossier():
    chemin = input("Entrez le chemin du fichier ou dossier à supprimer : ")
    
    try:
        if os.path.isdir(chemin):
            shutil.rmtree(chemin)
            print(f"Dossier {chemin} supprimé avec succès.")
        elif os.path.isfile(chemin):
            os.remove(chemin)
            print(f"Fichier {chemin} supprimé avec succès.")
        else:
            print(f"Le chemin spécifié {chemin} n'est ni un fichier ni un dossier.")
    except Exception as e:
        print(f"Erreur lors de la suppression : {e}")

# Fonction pour copier un dossier et renommer toutes les occurrences
def copier_et_renommer():
    source = input("Entrez le chemin du dossier à copier : ")
    destination = input("Entrez le chemin de destination : ")
    ancienne_occurence = input("Entrez l'ancienne occurrence à renommer : ")
    nouvelle_occurence = input("Entrez le nouveau nom pour remplacer l'occurrence : ")

    try:
        # Copie du dossier
        if not os.path.exists(destination):
            shutil.copytree(source, destination)
            print(f"Dossier {source} copié avec succès vers {destination}.")
        
        # Renommer les occurrences dans les fichiers
        for root, dirs, files in os.walk(destination):
            for file_name in files:
                new_file_name = file_name.replace(ancienne_occurence, nouvelle_occurence)
                if new_file_name != file_name:
                    os.rename(os.path.join(root, file_name), os.path.join(root, new_file_name))
                    print(f"Renommé {file_name} en {new_file_name}")
        
        # Renommer les occurrences dans les dossiers
        for root, dirs, files in os.walk(destination, topdown=False):
            for dir_name in dirs:
                new_dir_name = dir_name.replace(ancienne_occurence, nouvelle_occurence)
                if new_dir_name != dir_name:
                    os.rename(os.path.join(root, dir_name), os.path.join(root, new_dir_name))
                    print(f"Renommé {dir_name} en {new_dir_name}")
        
        print("Copie et renommage effectués avec succès.")
    except Exception as e:
        print(f"Erreur lors de la copie et du renommage : {e}")

# Fonction pour le build complet (Ionic, Android jusqu'à installation de l'APK)
def build_et_installer_apk():
    try:
        # 1. Build Ionic en mode production
        print("Lancement du build Ionic...")
        subprocess.run(["ionic", "build", "--prod"], check=True)
        print("Build Ionic effectué avec succès.")

        # 2. Build Android (assurez-vous que le build produit un APK)
        print("Lancement du build Android...")
        subprocess.run(["./gradlew", "assembleRelease"], check=True, cwd="./android")
        print("Build Android effectué avec succès.")

        # 3. Vérifier si l'APK non signé existe
        unsigned_apk_path = "./android/app/build/outputs/apk/release/app-release-unsigned.apk"
        if os.path.exists(unsigned_apk_path):
            # Signer l'APK
            signed_apk_path = signer_apk(unsigned_apk_path)
            if signed_apk_path:
                # Installer l'APK signé
                installer_apk(signed_apk_path)
            else:
                print("Erreur lors de la signature de l'APK.")
        else:
            print("Le fichier APK non signé n'a pas été trouvé.")

    except Exception as e:
        print(f"Erreur lors du processus complet : {e}")

# Fonction pour signer l'APK
def signer_apk(unsigned_apk_path):
    signed_apk_path = "./android/app/build/outputs/apk/release/app-release-signed.apk"
    keystore_path = "./cymath.jks"  # Remplacez par votre propre keystore
    key_alias = "cymath"  # Remplacez par votre alias de clé

    if os.path.exists(unsigned_apk_path):
        try:
            # Signer l'APK
            subprocess.run([
                "jarsigner", "-verbose", "-sigalg", "SHA1withRSA", "-digestalg", "SHA-1",
                "-keystore", keystore_path, unsigned_apk_path, key_alias
            ], check=True)

            # Aligner l'APK
            subprocess.run(["zipalign", "-v", "4", unsigned_apk_path, signed_apk_path], check=True)
            print(f"APK signé avec succès. Fichier signé disponible à : {signed_apk_path}")
            return signed_apk_path
        except subprocess.CalledProcessError as e:
            print(f"Erreur lors de la signature de l'APK : {e}")
            return None
    else:
        print("APK non signé introuvable.")
        return None

# Fonction pour installer l'APK
def installer_apk(apk_path):
    try:
        print(f"Installation de l'APK à partir de '{apk_path}'...")
        subprocess.run(["adb", "install", apk_path], check=True)
        print(f"APK installé avec succès depuis '{apk_path}' sur l'appareil connecté.")
    except subprocess.CalledProcessError as e:
        print(f"Erreur lors de l'installation de l'APK : {e}")

# Fonction pour choisir et exécuter une action
def main():
    while True:
        choix = afficher_menu()
        
        if choix == "1":
            copier_dossier()
        elif choix == "2":
            renommer_occurrence()
        elif choix == "3":
            supprimer_fichier_dossier()
        elif choix == "4":
            copier_et_renommer()
        elif choix == "5":
            build_et_installer_apk()
        elif choix == "6":
            print("Au revoir!")
            break
        else:
            print("Choix invalide, veuillez entrer un numéro entre 1 et 6.")

# Exécuter le programme principal
if __name__ == "__main__":
    main()
