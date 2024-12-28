# Fonction pour récupérer la liste des appareils connectés
def get_connected_devices():
    try:
        result = subprocess.run(["adb", "devices"], stdout=subprocess.PIPE, text=True)
        lines = result.stdout.strip().split("\n")
        devices = [line.split("\t")[0] for line in lines[1:] if "device" in line]
        return devices
    except Exception as e:
        print(f"Erreur lors de la récupération des appareils connectés : {e}")
        return []

# Fonction pour installer un APK avec gestion des appareils multiples
def installer_apk():
    apk_path = input("Entrez le chemin de l'APK à installer : ")
    devices = get_connected_devices()

    if not devices:
        print("Aucun appareil connecté.")
        return

    device_id = None
    if len(devices) == 1:
        device_id = devices[0]
        print(f"Un seul appareil détecté : {device_id}")
    else:
        print("Plusieurs appareils détectés :")
        for idx, device in enumerate(devices):
            print(f"{idx + 1}. {device}")
        try:
            choice = int(input("Choisissez l'appareil (numéro) : "))
            device_id = devices[choice - 1]
        except (ValueError, IndexError):
            print("Choix invalide. Abandon de l'installation.")
            return

    try:
        print(f"Installation de l'APK sur l'appareil {device_id}...")
        subprocess.run(["adb", "-s", device_id, "install", apk_path], check=True)
        print("Installation réussie.")
    except subprocess.CalledProcessError as e:
        print(f"Erreur lors de l'installation de l'APK : {e}")
