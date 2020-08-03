<p align="center">
  <a href="https://github.com/AbdallahHemdan/Qurany" rel="noopener">
    
  ![Instanew](https://user-images.githubusercontent.com/40190772/89137940-1f68c200-d53a-11ea-8d71-64e44c486357.png)
  
  </a>
</p>

<h3 align="center">Instanews</h3>
<div align="center">

[![GitHub contributors](https://img.shields.io/github/contributors/AbdallahHemdan/Instagram)](https://github.com/AbdallahHemdan/Instagram/contributors)
[![GitHub issues](https://img.shields.io/github/issues/AbdallahHemdan/Instagram)](https://github.com/AbdallahHemdan/Instagram/issues)
[![GitHub forks](https://img.shields.io/github/forks/AbdallahHemdan/Instagram)](https://github.com/AbdallahHemdan/Instagram/network)
[![GitHub stars](https://img.shields.io/github/stars/AbdallahHemdan/Instagram)](https://github.com/AbdallahHemdan/Instagram/stargazers)
[![GitHub license](https://img.shields.io/github/license/AbdallahHemdan/Instagram)](https://github.com/AbdallahHemdan/Instagram/blob/master/LICENSE)
<img src="https://img.shields.io/github/languages/count/abdallahHemdan/Instagram" />
<img src="https://img.shields.io/github/languages/top/AbdallahHemdan/Instagram" />
<img src="https://img.shields.io/github/languages/code-size/AbdallahHemdan/Instagram" />
<img src="https://img.shields.io/github/issues-pr-raw/AbdallahHemdan/Instagram" />
</div>

## Table of Contents

- [About the Project](#about)
  - [Build with](#build-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running](#running)
- [Screenshots](#screenshots)
- [Responsive Sreenshots](#responsive-screenshots)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)

## About
> Instanews is a fully responsive social media app that is a mimic for [Instagram](https://www.instagram.com/) built using [Vuejs](https://vuejs.org/).

### Build with
- [Vye JS](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Jest](https://jestjs.io/)
- [Axios](https://github.com/axios/axios)

## Getting Started
> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructuins.

### Installation

1. **_Clone the repository_**

```sh
$ git clone https://github.com/AbdallahHemdan/Instagram.git
```
2. **_Navigate to repository directory_**
```sh
$ cd Instanews
```

3. **_Install dependencies_**

```sh
$ npm install
```

### Running

1. **_Compiles and hot-reloads for development_**
```sh
$ npm run serve
```

2. **_Compiles and minifies for production_**
```sh
$ npm run build
```

3. **_Run your unit tests_**
```sh
npm run test:unit
```

### Screenshots

<div align="center">

<h3 align="center">Home Page</h3>

![image](https://user-images.githubusercontent.com/40190772/89168291-f1f13800-d57c-11ea-899b-d79f57f4df14.png)

<hr />

![image](https://user-images.githubusercontent.com/40190772/89168357-0a615280-d57d-11ea-9fe6-55cbd8ce8376.png)

<hr />

![image](https://user-images.githubusercontent.com/40190772/89168493-3d0b4b00-d57d-11ea-9dda-45d8299c751d.png)

<hr />

![image](https://user-images.githubusercontent.com/40190772/89172160-798d7580-d582-11ea-9a17-36fa05c963bb.png)

<br />

<h3 align="center">Profile Page</h3>

![image](https://user-images.githubusercontent.com/40190772/89168605-64621800-d57d-11ea-92b6-8705aba1fcf1.png)

<hr />

![image](https://user-images.githubusercontent.com/40190772/89168850-bc008380-d57d-11ea-9316-1f67ca33dd79.png)

<hr />

![image](https://user-images.githubusercontent.com/40190772/89168652-76dc5180-d57d-11ea-9f32-31267331d900.png)

<br />

<h3 align="center">Explore Page</h3>

![image](https://user-images.githubusercontent.com/40190772/89168690-8065b980-d57d-11ea-84a7-f9bc2676257e.png)

<hr />

![image](https://user-images.githubusercontent.com/40190772/89169091-0f72d180-d57e-11ea-95d5-66a0b13be06e.png)

<hr />

![image](https://user-images.githubusercontent.com/40190772/89169140-20234780-d57e-11ea-95ce-dc2a6ff16009.png)

<br />

<h3 align="center">Inbox Page</h3>

![image](https://user-images.githubusercontent.com/40190772/89169157-26b1bf00-d57e-11ea-9740-499bad226e06.png)

<br />

<h3 align="center">Notifications Dropdown</h3>

![image](https://user-images.githubusercontent.com/40190772/89169193-329d8100-d57e-11ea-88ca-005dee2748ad.png)

<hr />

![image](https://user-images.githubusercontent.com/40190772/89169236-41843380-d57e-11ea-8163-1795d527bb28.png)

<br />

<h3 align="center">Login Page</h3>

![image](https://user-images.githubusercontent.com/40190772/89169569-af305f80-d57e-11ea-9171-d11658e3475a.png)

<br />

<h3 align="center">Signup Page</h3>

![image](https://user-images.githubusercontent.com/40190772/89169658-ccfdc480-d57e-11ea-8924-5293cca4e423.png)

<br />


## File Structure
                                    
    Instanews
    ├── README.md
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── jest.config.js
    ├── backlog.md
    ├── babel.config.js
    ├── .gitignore
    ├── .browserslistrc
    ├── tests
    │   └── unit
    ├── src
    │   ├── assets
    │   ├── components
    |   |   ├── Comments
    |   |   ├── InboxContainer	
    |   |   ├── LeftAuth	
    |   |   ├── MessageItem	
    |   |   ├── MessagesContainer	
    |   |   ├── Navbar	
    |   |   ├── Newsfeed	
    |   |   ├── NotificationItem	
    |   |   ├── NotificationsDropdown	
    |   |   ├── OrDivider	
    |   |   ├── Post	
    |   |   ├── PostAction	
    |   |   ├── PostDescription	
    |   |   ├── ProfileDescription	
    |   |   ├── ProfileDropdown	
    |   |   ├── ProfileGallery	
    |   |   ├── ProfileGalleryItem	
    |   |   ├── ProfileHeader
    |   |   ├── ProfileStories
    |   |   ├── ProfileUpperHeader
    |   |   ├── SingleComment
    |   |   ├── SingleSuggestion
    |   |   ├── SuggestionHeader
    |   |   ├── UserInfo
    |   |   ├── UserSuggestions
    |   |   └── ProfileHeaderTitle
    │   ├── mock
    │   ├── router
    │   ├── store
    │   ├── style
    │   ├── views
    │   ├── main.js
    │   └── App.vue
    ├── public
    │   ├── favicon.ico	
    │   └── index.html	
    ├── node_modules
    └── CONTRIBUTING.md	
    

<h3 align="center">Forget Password Page</h3>

![image](https://user-images.githubusercontent.com/40190772/89169706-dab34a00-d57e-11ea-99f7-66eaf0cbd7a3.png)
</div>

### Responsive Screenshots

![image](https://user-images.githubusercontent.com/40190772/89171844-fe2bc400-d581-11ea-8e91-094470386114.png)

<hr />

![image](https://user-images.githubusercontent.com/40190772/89171894-16034800-d582-11ea-9449-0780f98a79d7.png)

<hr />

![image](https://user-images.githubusercontent.com/40190772/89171913-20254680-d582-11ea-961a-bea2cfe6908a.png)

<hr />

![image](https://user-images.githubusercontent.com/40190772/89171956-2e736280-d582-11ea-83af-c8967c8bebde.png)

<hr />

![image](https://user-images.githubusercontent.com/40190772/89172022-434ff600-d582-11ea-8d03-e7c15fc878d9.png)


## Contributing

> Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Check out our [contributing guidelines](https://github.com/AbdallahHemdan/Istanews/blob/master/CONTRIBUTING.md) for ways to contribute.

## Contributors
> Thanks goes to these wonderful people in the frontend team.
<table>
  <tr>
    <td align="center">
    <a href="https://github.com/AbdallahHemdan" target="_black">
    <img src="https://avatars1.githubusercontent.com/u/40190772?s=460&v=4" width="150px;" alt="abdallah hemdan"/>
    <br />
    <sub><b>Abdallah Hemdan</b></sub></a><a href="https://github.com/AbdallahHemdan/Instanews/commits/master?author=AbdallahHemdan" title="Leader">🎯</a><a href="https://github.com/AbdallahHemdan/Instanews/commits/master?author=AbdallahHemdan" title="Code">💻</a><a href="https://github.com/AbdallahHemdan/Instanews/pulls?q=is%3Apr+author%3AAbdallahHemdan" title="Reviewed Pull Requests">👀</a><br />
    </td>
  </tr>
 </table>
 
## License

> This software is licensed under MIT License, See [License](https://github.com/AbdallahHemdan/Instanews/blob/master/LICENSE) for more information ©AbdallahHemdan.
