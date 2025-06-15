# Desafio técnico Easysecrets - Graph Easysecrets

## 📌 **Objetivos do projeto**
O Graph EasySecrets é um sistema de visualização de dados que permite aos usuários selecionar diferentes tipos de gráficos (linha, barra e área) e exportá-los em formatos SVG. O projeto tem como objetivo principal servir de avaliação para a vaga de estágio front-end na Easysecrets.

---

## 🔗 **Link do projeto em produção**
Acesse o projeto online no link a seguir: 
<a href="" target="_blank">📊 Graph Easysecrets<a/>


---


## ⬇️ Como rodar o projeto localmente:

### 🔧 **Pré-requisitos**

- Node.js 18+
- Gerenciador de pacotes (npm ou yarn)

### 🚀 **Instalação**

- 1. **Clonar o repositório**
``` 
git clone https://github.com/OlucasGarcia/Desafio-tecnico-Easysecrets 
cd graph-easysecrets/ 
```

- 2. **Instalar todas as dependências**
```
npm install --legacy-peer-deps 
#ou com yarn 
yarn install --ignore-engines 
```

- 3. **Executar a aplicação em desenvolvimento**
``` 
npm start 
#ou com yarn 
yarn start
```


---


## 📁 **Estrutura de pastas da aplicação**

graph-easysecrets/
├── public/
│   ├── favicon.svg              # Ícone da aplicação
│   └── index.html               # Arquivo HTML principal
│
├── src/
│   ├── components/              # Componentes reutilizáveis
│   │   ├── Button/              # Componente de botão personalizado
│   │   ├── Charts/              # Componentes de gráficos
│   │   └── Layout/              # Componentes de layout e elementos visuais
│   │       ├── BackgroundChart/ # Gráfico decorativo da Home
│   │       ├── ChartLayout/     # Layout da página de gráficos
│   │       └── Navbar/          # Barra de navegação com controle de tema
│   │
│   ├── data/                    # Dados estáticos
│   │   └── vendas.json          # Dados utilizados nos gráficos
│   │
│   ├── hooks/                   # Hooks personalizados
│   │   └── useTheme.ts          # Hook para controle de tema (Light/Dark)
│   │
│   ├── img/                     # Imagens utilizadas no projeto
│   │   └── logo.svg             # Logo da aplicação
│   │
│   ├── pages/                   # Páginas da aplicação
│   │   ├── Dashboard/           # Tela de gráficos
│   │   ├── Home/                # Tela inicial da aplicação
│   │   └── NotFound/            # Página para rotas inexistentes
│   │
│   ├── utils/                   # Funções utilitárias
│   │   ├── exportPDF.ts         # Função para exportação dos gráficos em PDF ou SVG
│   │   └── formatData.ts        # Função de formatação dos dados dos gráficos
│   │
│   ├── App.tsx                  # Componente raiz da aplicação
│   ├── main.tsx                 # Entrada principal (React + Router)
│   └── index.css                # Estilos globais e definição dos temas
│
├── .gitignore                   # Arquivos e pastas ignorados pelo Git
├── package.json                 # Dependências e scripts do projeto
├── package-lock.json            # Lock das versões das dependências
└── tsconfig.json                # Configuração do TypeScript


---


## 🖼️ Screenshots

### **Home**
 <img src="" width="400px" />

*A tela inicial da aplicação, com acesso rápido às funcionalidades e um gráfico decorativo ao fundo. Interface limpa, com foco na navegação simples e intuitiva.*

---

### **Dashboard - Gráfico de Linhas**
<img src="" width="400px" />

*Exibição dos dados no formato de gráfico de linhas, ideal para acompanhar a evolução dos dados ao longo do tempo.*

---

### **Dashboard - Gráfico de Barras**
<img src="" width="400px" />

*Visualização dos dados no formato de gráfico de barras, facilitando a comparação direta entre diferentes produtos ou períodos.*

---

### **Home - Mobile (Dark Theme)**
<img src="" width="400px" />

*Versão mobile da tela Home utilizando o tema escuro, demonstrando tanto a responsividade quanto a adaptação visual para diferentes preferências de tema.*


---


## 🧑🏼‍💻 **Tecnologias e bibliotecas usadas**

### **Create React App**
- Utilizei o **Create React App** por ser uma ferramenta de build muito leve, de fácil estruturação e que possibilita manter uma escalabilidade ótima para o projeto.

### **React Router DOM**
- O React Router Dom é responsável pelo roteamento da aplicação, permitindo criar múltiplas páginas, o que proporciona uma navegação fluida, dinâmica e que facilita na manutenção de rotas em um possível crescimento do projeto futuramente.

### **Recharts**
- Biblioteca utilizada para a construção dos gráficos responsivos e dinâmicos.
- Escolhida pela facilidade de uso com React, boa documentação e suporte direto a SVG, o que torna os gráficos leves, responsivos e exportáveis.

### **React Icons**
- Implementada para adicionar ícones de forma simples e elegante, contribuindo para uma melhor experiência visual e interatividade nos botões e na interface.

### **Framer Motion**
- Utilizado para adicionar animações suaves na entrada de elementos, melhorando a experiência do usuário.
- Escolhida por sua fácil integração com React e simplicidade de uso na criação de animações declarativas.

### **React Hooks**
- Amplamente utilizado para controle de estados e lógica da aplicação, incluindo a criação de um hook personalizado para alternância de tema (light/dark), além do gerenciamento de filtros, exportação de dados, usode states, location e possibilidade de manipulação de DOM com useEffect.


---


## 💡 **Decisões Técnicas e Arquitetura**

Durante o desenvolvimento deste projeto, tomei algumas decisões técnicas pensando tanto na escalabilidade quanto na organização e experiência do usuário. Abaixo, explico os principais pontos:

### **Separação de funções utilitárias:**  
Optei por criar funções externas dentro da pasta 'utils' para lidar com tarefas específicas, como formatação de dados e exportação de gráficos. Isso evita a poluição dos componentes, mantém o código mais limpo, organizado e de fácil manutenção.

### **Uso do React Router:**  
Mesmo com poucas telas na aplicação, escolhi utilizar o React Router DOM. Essa decisão foi tomada considerando a escalabilidade futura do projeto, além de proporcionar uma navegação clara, fluida e estruturada entre as páginas.

### **Estilização com CSS puro:**  
Decidi construir a estilização e responsividade utilizando CSS modular (CSS Modules) em vez de bibliotecas como styled-components ou Tailwind. Isso me oferece maior controle sobre o comportamento dos elementos, além de ser uma abordagem leve e de fácil manutenção.

### **Variedade de visualização de dados:**  
Implementei três tipos de gráficos (linha, barra e área) para fornecer ao usuário uma experiência mais dinâmica e personalizada. Isso permite que os dados sejam analisados de diferentes perspectivas, tornando a interpretação mais eficiente.


---


## ♟️ **Diferenciais do Projeto**

O projeto Graph Easysecrets não se resume apenas à exibição de dados. Ele foi desenvolvido pensando na experiência do usuário, na estética e na utilidade prática. Abaixo, listo os principais diferenciais que tornam essa aplicação única:

### **Variedade de Tipos de Gráficos:**  
O usuário pode visualizar os dados em diferentes formatos, sendo em gráfico de linha, de barra e de área, tornando a análise muito mais dinâmica e personalizada.

### **Gráficos Específicos por Produto:**  
Além do gráfico geral de vendas, também é possível visualizar gráficos individuais para cada produto, facilitando uma análise detalhada e segmentada.

### **Exportação em SVG:**  
Os gráficos podem ser exportados em formato SVG, o que garante alta qualidade de imagem para utilização externa em relatórios, apresentações ou qualquer outro documento.

### **Tema Light e Dark:**  
A aplicação oferece suporte para modo claro e escuro, permitindo uma experiência visual confortável e personalizada para cada usuário.

### **Criação de uma Marca Fictícia:**  
O projeto foi pensado como um produto real, recebendo uma identidade visual própria, nome, logo e conceito. Assim nasce o Graph Easysecrets, uma solução fictícia para análise de dados.

### **Totalmente Responsivo:**  
A interface foi desenvolvida com foco na responsividade, garantindo uma experiência consistente e agradável em qualquer tamanho de tela, seja desktop, tablet ou smartphone.

### **Animações Suaves:**  
Alguns elementos da aplicação possuem animações sutis de entrada, contribuindo para um visual moderno, agradável e uma interação mais fluida.

### **Feedback Visual nos Botões:**  
Todos os botões da aplicação possuem retorno visual ao serem clicados ou quando estão em estado de hover. Isso melhora a interação e deixa claro para o usuário que sua ação foi reconhecida pela interface.

### **Design Simples, Limpo e Funcional:**  
O layout foi projetado para ser objetivo, com uma paleta de cores bem definida, proporcionando uma navegação intuitiva sem abrir mão da estética.


---


### 🧑🏼‍💻 Desenvolvido por Lucas Gabriel Garcia