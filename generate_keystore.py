import subprocess

def create_keystore(keystore_path, alias, key_password, store_password, cn, ou, o, l, st, c, validity_days=10000, key_alg="RSA", key_size=2048):
    """
    Génère un keystore avec les paramètres spécifiés.

    Args:
        keystore_path (str): Chemin où le keystore sera enregistré.
        alias (str): Alias de la clé à utiliser.
        key_password (str): Mot de passe pour la clé.
        store_password (str): Mot de passe pour le keystore.
        cn (str): Common Name (CN).
        ou (str): Organizational Unit (OU).
        o (str): Organization Name (O).
        l (str): Locality (L).
        st (str): State/Province (ST).
        c (str): Country Code (C).
        validity_days (int): Validité de la clé en jours.
        key_alg (str): Algorithme de clé à utiliser (par défaut "RSA").
        key_size (int): Taille de la clé en bits (par défaut 2048).
    """
    try:
        # Commande pour générer le keystore
        command = [
            "keytool",
            "-genkey",
            "-v",
            "-keystore", keystore_path,
            "-keyalg", key_alg,
            "-keysize", str(key_size),
            "-validity", str(validity_days),
            "-alias", alias,
            "-dname", f"CN={cn}, OU={ou}, O={o}, L={l}, ST={st}, C={c}",
            "-storepass", store_password,
            "-keypass", key_password
        ]
        
        # Exécuter la commande
        process = subprocess.run(command, text=True, capture_output=True)
        
        # Vérifier le retour de la commande
        if process.returncode == 0:
            print(f"Keystore généré avec succès à l'emplacement : {keystore_path}")
        else:
            print(f"Erreur lors de la génération du keystore :\n{process.stderr}")
    except Exception as e:
        print(f"Erreur : {e}")

# Exemple d'utilisation
if __name__ == "__main__":
    keystore_path = "./cymath.jks"
    alias = "cymath"
    key_password = "buildcymath"
    store_password = "buildcymath"
    cn = "Yous"
    ou = "DEV"
    o = "DEV"
    l = "DEV"
    st = "92"
    c = "FR"  # Exemple pour la France

    create_keystore(keystore_path, alias, key_password, store_password, cn, ou, o, l, st, c)
