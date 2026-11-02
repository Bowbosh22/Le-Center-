# Le Center Lounge Bar — site vitrine

Site statique (HTML / CSS / JS), sans outil de build.

## Pages

| Fichier | Rôle |
|---|---|
| `index.html` | Site vitrine (accueil, univers, carte, cigar lounge, galerie, contact) |
| `menu.html` | Menu digital, pensé pour le téléphone. Accessible depuis le site et via QR code |
| `qr.html` | Outil interne : génère le QR code du menu à imprimer (non lié depuis le site) |

## Mise en ligne (GitHub Pages)

1. Dépôt GitHub → **Settings** → **Pages**
2. *Source* : **Deploy from a branch** → branche `main`, dossier `/ (root)` → **Save**
3. Après une minute, le site est disponible sur `https://<compte>.github.io/<depot>/`

## QR code du menu

1. Ouvrir `https://<compte>.github.io/<depot>/qr.html`
2. Vérifier que l'adresse proposée est bien celle de `menu.html`
3. **Imprimer** (carte de table) ou **Télécharger le QR (PNG)**
4. Scanner avec un téléphone avant impression

## À personnaliser

- Photo du hero : remplacer `img/hero.jpg`
- Prix / plats : modifier directement `menu.html` et la section « La carte » de `index.html`
- Téléphone / WhatsApp : rechercher `242061991616` dans `index.html` et `menu.html`
