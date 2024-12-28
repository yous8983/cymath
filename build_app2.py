import os
import subprocess
import shutil

# Fonction pour afficher le menu principal
def afficher_menu():
    print("\nListe des fonctions disponibles :")
    print("1. Copier un dossier et son contenu")
    print("2. Renommer une occurrence dans les fichiers et dossiers")
    print("3. Supprimer un fichier ou un dossier")
    print("4. Copier un dossier et renommer toutes les occurrences")
    print("5. Build APK (Android uniquement)")
    print("6. Signer et aligner un APK")
    print("7. Installer un APK")
    print("8. Mise à jour de l'application")
    print("9. Quitter")
    choix = input("Veuillez entrer le numéro de la fonction à exécuter (1-9) : ")
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
            print(f"Le dossier de destination {destination} existe déjà.")
    except Exception as e:
        print(f"Erreur lors de la copie du dossier : {e}")

# Fonction pour renommer une occurrence dans les fichiers et dossiers
def renommer_occurrence():
    dossier = input("Entrez le chemin du dossier dans lequel rechercher : ")
    ancienne_occurence = input("Entrez l'ancienne occurrence à renommer : ")
    nouvelle_occurence = input("Entrez le nouveau nom pour remplacer l'occurrence : ")
    try:
        for root, dirs, files in os.walk(dossier):
            for file_name in files:
                new_file_name = file_name.replace(ancienne_occurence, nouvelle_occurence)
                if new_file_name != file_name:
                    os.rename(os.path.join(root, file_name), os.path.join(root, new_file_name))
            for dir_name in dirs:
                new_dir_name = dir_name.replace(ancienne_occurence, nouvelle_occurence)
                if new_dir_name != dir_name:
                    os.rename(os.path.join(root, dir_name), os.path.join(root, new_dir_name))
        print("Renommage effectué avec succès.")
    except Exception as e:
        print(f"Erreur lors du renommage : {e}")

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
            print("Le chemin spécifié n'existe pas.")
    except Exception as e:
        print(f"Erreur lors de la suppression : {e}")

# Fonction pour copier un dossier et renommer toutes les occurrences
def copier_et_renommer():
    source = input("Entrez le chemin du dossier à copier : ")
    destination = input("Entrez le chemin de destination : ")
    ancienne_occurence = input("Entrez l'ancienne occurrence à renommer : ")
    nouvelle_occurence = input("Entrez le nouveau nom pour remplacer l'occurrence : ")
    try:
        if not os.path.exists(destination):
            shutil.copytree(source, destination)
            print(f"Dossier {source} copié avec succès vers {destination}.")
        renommer_occurrence(destination, ancienne_occurence, nouvelle_occurence)
    except Exception as e:
        print(f"Erreur lors de la copie et du renommage : {e}")

# Fonction pour le build Android
def build_android():
    try:
        print("Lancement du build Android...")
        subprocess.run(["./gradlew", "assembleRelease"], check=True, cwd="./android")
        print("Build Android effectué avec succès.")
    except subprocess.CalledProcessError as e:
        print(f"Erreur lors du build Android : {e}")

# Fonction pour signer un APK
def signer_apk():
    unsigned_apk_path = "./android/app/build/outputs/apk/release/app-release-unsigned.apk"
    signed_apk_path = "./android/app/build/outputs/apk/release/app-release-signed.apk"
    keystore_path = "./cymath.jks"  # Remplacez par votre propre keystore
    key_alias = "cymath"  # Remplacez par votre alias de clé
    try:
        print("Signature de l'APK...")
        subprocess.run([
            "jarsigner", "-verbose", "-sigalg", "SHA256withRSA", "-digestalg", "SHA-256",
            "-keystore", keystore_path, unsigned_apk_path, key_alias
        ], check=True)
        print("Signature effectuée avec succès.")
        print("Alignement de l'APK...")
        subprocess.run(["zipalign", "-v", "4", unsigned_apk_path, signed_apk_path], check=True)
        print(f"APK signé et aligné avec succès : {signed_apk_path}")
    except subprocess.CalledProcessError as e:
        print(f"Erreur lors de la signature ou de l'alignement de l'APK : {e}")

# Fonction pour installer un APK
def installer_apk():
    apk_path = input("Entrez le chemin de l'APK à installer : ")
    try:
        print("Installation de l'APK...")
        subprocess.run(["adb", "install", apk_path], check=True)
        print("Installation réussie.")
    except subprocess.CalledProcessError as e:
        print(f"Erreur lors de l'installation de l'APK : {e}")

# Fonction pour mettre à jour l'application (build, signer, installer)
def mise_a_jour_application():
    build_android()
    signer_apk()
    installer_apk()

# Programme principal
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
            build_android()
        elif choix == "6":
            signer_apk()
        elif choix == "7":
            installer_apk()
        elif choix == "8":
            mise_a_jour_application()
        elif choix == "9":
            print("Au revoir!")
            break
        else:
            print("Choix invalide, veuillez réessayer.")

if __name__ == "__main__":
    main()
