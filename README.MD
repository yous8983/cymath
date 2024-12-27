# Configurer l’environnement de développement
## Installez Node.js (recommandé : version LTS).

## Installez Ionic et Cordova si ce n’est pas encore fait 
 '''
 npm install -g @ionic/cli 
 '''

## verification :
 '''
 ionic info
 ''' 

#  Configurer le réseau

## Obtenir l'adresse IP locale
 ifconfig (linux/macOs)
 ipconfig (Windows)

## Lancer l’application avec ionic serve

'''
ionic serve --host=0.0.0.0
'''

## Notez l’URL générée par le serveur, par exemple : http:192.168.1.5:8100

# Accéder à l'application depuis le smartphone

