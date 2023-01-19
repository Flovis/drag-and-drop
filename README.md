# drag-and-drop
# Ce code implémente la fonctionnalité de "glisser-déposer" pour une zone de dépôt (dropArea) spécifiée. Il utilise les événements "dragover", "dragleave" et "drop" pour détecter les interactions de l'utilisateur avec la zone de dépôt. Il gère également les actions liées aux fichiers déposés, en utilisant la classe "FileReader" pour lire les données d'un fichier de manière asynchrone.

- Lorsque l'utilisateur glisse un fichier sur la zone de dépôt, l'événement "dragover" est déclenché et la classe "container-drap-event" est ajoutée à la zone de dépôt pour indiquer qu'un fichier est en train d'être déplacé.

- Lorsque l'utilisateur quitte la zone de dépôt avec le fichier, l'événement "dragleave" est déclenché et la classe "container-drap-event" est supprimée de la zone de dépôt.

- Lorsque l'utilisateur dépose un fichier sur la zone de dépôt, l'événement "drop" est déclenché et la fonction "displayFile" est appelée pour gérer le fichier déposé.

- Dans la fonction "displayFile", il vérifie d'abord le type de fichier déposé (extension) pour s'assurer qu'il s'agit d'une image (jpeg, png ou jpg) et si c'est le cas il vérifie sa taille pour s'assurer qu'elle n'excède pas 5 Mo. Si ces deux conditions sont remplies, il utilise l'objet "FileReader" pour lire les données du fichier déposé et stocke le résultat dans une variable "fileUrl". Sinon il affiche un message d'erreur

# En somme, ce code permet à l'utilisateur de glisser et déposer un fichier image dans une zone spécifiée, de vérifier si le fichier est valide (extension et taille) et de lire les données du fichier pour en extraire l'url.
