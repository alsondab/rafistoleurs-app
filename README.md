<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

# Rafistoleurs App

**Rafistoleurs App** est une application conçue pour aider les rafistoleurs ivoiriens (appelés localement "toclo toclo") à trouver plus de clients sans avoir à marcher sous le soleil toute la journée. Cette application aide également les clients à trouver des rafistoleurs disponibles dans leur voisinage, à prendre leurs contacts et à les appeler.

## Table des matières

- [Rafistoleurs App](#rafistoleurs-app)
  - [Table des matières](#table-des-matières)
  - [Aperçu du Projet](#aperçu-du-projet)
  - [Fonctionnalités](#fonctionnalités)
  - [Technologies Utilisées](#technologies-utilisées)
  - [Installation](#installation)
    - [Prérequis](#prérequis)
    - [Cloner le dépôt](#cloner-le-dépôt)
    - [Backend Laravel](#backend-laravel)
    - [Application Web Angular](#application-web-angular)
    - [Application Mobile Flutter](#application-mobile-flutter)
  - [Configuration](#configuration)
- [Configuration de la Base de Données](#configuration-de-la-base-de-données)
- [Instructions pour Importer le Script SQL](#instructions-pour-importer-le-script-sql)
    - [Configuration de l'API](#configuration-de-lapi)
  - [Utilisation](#utilisation)
    - [Application Web](#application-web)
    - [Application Mobile](#application-mobile)
  - [Contribuer](#contribuer)
  - [Contact](#contact)

## Aperçu du Projet

Le projet est composé de trois parties principales :

1. **Backend API** : Développé avec Laravel, gère les requêtes API et la base de données.
2. **Application Desktop** : Développée avec Angular, permet aux utilisateurs d'accéder aux fonctionnalités via un navigateur web.
3. **Application Mobile** : Développée avec Flutter, permet aux utilisateurs d'accéder aux fonctionnalités via leurs smartphones.

## Fonctionnalités

- Inscription et connexion des utilisateurs.
- Recherche de rafistoleurs disponibles.

## Technologies Utilisées

- **Backend** : Laravel
- **Base de Données** : MySQL
- **Application Web** : Angular
- **Application Mobile** : Flutter
- **Concepion**: UML (StarUml)
- **Presentation du Projet**: Canva
- **Refferenciel**:Git

## Installation

### Prérequis

Assurez-vous d'avoir les outils suivants installés sur votre machine :

- XAMPP (pour Apache et MySQL)
- Node.js et Angular CLI
- Flutter SDK
- Composer
- PHP
- Git

### Cloner le dépôt

```bash
git clone https://github.com/alsondab/rafistoleurs-app.git
cd rafistoleurs-app
```

### Backend Laravel

1. **Installer les dépendances :**
   ```bash
   cd rafistoleurs-backend
   composer install
   ```

2. **Configurer l'environnement :**
   Copiez le fichier `.env.example` et renommez-le en `.env`. Modifiez les configurations de la base de données.

3. **Générer la clé de l'application :**
   ```bash
   php artisan key:generate
   ```

4. **Migrer la base de données :**
   ```bash
   php artisan migrate --seed
   ```

5. **Démarrer le serveur de développement :**
   ```bash
   php artisan serve
   ```

### Application Web Angular

1. **Installer les dépendances :**
   ```bash
   cd rafistoleurs-desktop
   npm install
   ```

2. **Démarrer le serveur de développement :**
   ```bash
   ng serve
   ```

### Application Mobile Flutter

1. **Installer les dépendances :**
   ```bash
   cd rafistoleurs-mobile
   flutter pub get
   ```

2. **Lancer l'application :**
   ```bash
   flutter run
   ```

## Configuration

# Configuration de la Base de Données

 1. Préparer XAMPP
1. Assurez-vous que XAMPP est installé et en cours d'exécution.
2. Démarrez Apache et MySQL depuis le panneau de contrôle XAMPP.
3. Ouvrez phpMyAdmin en allant sur `http://localhost/phpmyadmin`.

 2. Créer la Base de Données
1. Ouvrez phpMyAdmin.
2. Cliquez sur l'onglet "Bases de données".
3. Créez une nouvelle base de données nommée `rafistoleurs_app`.

# Instructions pour Importer le Script SQL

1. Ouvrez phpMyAdmin dans votre navigateur via `http://localhost/phpmyadmin`.
2. Sélectionnez la base de données `rafistoleurs_app`.
3. Cliquez sur l'onglet "Importer".
4. Choisissez le fichier contenant le script SQL ci-dessus (vous pouvez copier le script dans un fichier `.sql`).
5. Cliquez sur "Exécuter".

### Configuration de l'API

Modifiez le fichier `.env` dans le dossier `rafistoleurs-backend` pour inclure les détails de votre base de données :

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=rafistoleurs_app
DB_USERNAME=root
DB_PASSWORD=
```

## Utilisation

### Application Web

1. Ouvrez votre navigateur et accédez à `http://localhost:4200`.
2. Inscrivez-vous ou connectez-vous pour accéder aux fonctionnalités.

### Application Mobile

1. Installez Flutter sur votre machine.
2. Connectez un appareil Android ou lancez un émulateur.
3. Exécutez `flutter run` dans le répertoire de l'application mobile.

## Contribuer

Nous accueillons les contributions de la communauté ! Pour contribuer :

1. Forkez le projet.
2. Créez votre branche de fonctionnalité (`git checkout -b feature/ma-fonctionnalité`).
3. Committez vos changements (`git commit -am 'Ajout de ma fonctionnalité'`).
4. Poussez votre branche (`git push origin feature/ma-fonctionnalité`).
5. Créez une Pull Request.

## Contact

Pour toute question ou suggestion, veuillez nous contacter à alsondab9@gmail.com.