# 📱 CondLink – App Morador

Aplicativo mobile desenvolvido com **React Native + Expo** para facilitar a comunicação entre **moradores e administração de condomínios**.

O **CondLink** permite que moradores acessem informações do condomínio, recebam avisos, realizem solicitações e acompanhem serviços diretamente pelo celular.

---

# 🚀 Tecnologias Utilizadas

- ⚛️ React Native
- 🚀 Expo
- 🟦 TypeScript
- 🎨 TailwindCSS com NativeWind
- 📦 Expo Router
- 🧾 React Hook Form
- ✔️ Yup (validação de formulários)
- 🔗 Axios (requisições HTTP)

---

# 📂 Estrutura do Projeto

├── android/  ## Configurações nativas Android
├── app/  ## Rotas e páginas do aplicativo (Expo Router)
│ ├── animais/  ##Módulo de animais do condomínio
│ ├── home.tsx ## Tela principal
│ ├── index.tsx ## Tela inicial
│ └── _layout.tsx ## Layout global das rotas
│
├── assets/ ## Ícones, splash e imagens
│
├── components/ ## Componentes reutilizáveis
│ ├── PageBuilder
│ └── UI
│
├── hooks/ ## Hooks personalizados
│ └── useValidateLogin.ts
│
├── schemas/ ## Schemas de validação
│ └── validationSchemas.tsx
│
├── global.css ## Estilos globais
├── tailwind.config.js ## Configuração do Tailwind
├── metro.config.js ## Configuração do Metro bundler
├── babel.config.js
├── tsconfig.json
└── app.json ## Configuração do Expo


---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/app-morador-condlink.git
cd app-morador-condlink
npm install
```

---

# ▶️ Executando o Projeto

```bash
npx expo start
```

---

# 🧩 Funcionalidades

  - 🔐 Login de moradores
  - 📢 Avisos do condomínio
  - 🐶 Cadastro de animais
  - 📦 Registro de encomendas
  - 📅 Reserva de áreas comuns
  - 🛠️ Abertura de chamados
  - 👤 Perfil do morador

---

# 🧪 Validações

As validações de formulários utilizam:

```
Yup
React Hook Form
```

Os schemas estão localizados em:
```
schemas/validationSchemas.tsx
```

---

# 🎨 Estilização

O projeto utiliza TailwindCSS com NativeWind para estilização.

---

📦 Build do Aplicativo

Para gerar o build Android:
```bash
npx expo run:android
```
