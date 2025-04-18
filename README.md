# BizTrip – Gerenciador de Credenciais 🔐

Este é um projeto frontend criado com **React**, **Vite**, **TypeScript**, **Stitches** e **Radix UI**, com o objetivo de fornecer uma interface para o **gerenciamento de credenciais**. O sistema permite **listar**, **criar** e **editar** credenciais de forma prática, moderna e interativa.

## ✨ Tecnologias e Ferramentas

- ⚛️ **React 19**
- ⚡ **Vite**
- 🎨 **Stitches** (CSS-in-JS)
- 🧩 **Radix UI** (componentes acessíveis)
- 🧰 **React Hook Form** + **Yup** (formulários e validação)
- 🔐 **JWT Decode**
- 🧪 **Vitest**, **Testing Library** e **Playwright** (testes)
- 📚 **Storybook** (documentação de componentes)
- 📡 **Axios** (requisições)
- 🍞 **React Hot Toast** (feedback visual)
- 📦 **MSW** (mocks de API)

## 📂 Estrutura do Projeto

Organizado em:

- `components/`: componentes reutilizáveis (ex: Button, Dialog, Select)
- `hooks/`: hooks customizados
- `pages/`: telas principais da aplicação
- `services/`: requisições com Axios
- `schema/`: validações com Yup
- `stories/`: documentação dos componentes com Storybook

## 🚀 Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Mareanx/biztrip_frontend_teste.git
cd biztrip_frontend_teste
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar o projeto em modo desenvolvimento

```bash
npm run dev
```
-Acesse em http://localhost:5173.

# 🛠️ Scripts Disponíveis

| Comando                  | Descrição                                         |
|--------------------------|---------------------------------------------------|
| `npm run dev`            | Inicia o projeto em modo de desenvolvimento       |
| `npm run build`          | Gera os arquivos otimizados de produção           |
| `npm run preview`        | Pré-visualiza o build                             |
| `npm run start`          | Pré-visualiza o build (com parâmetro de saída)    |
| `npm run lint`           | Executa o linter (ESLint)                         |
| `npm run storybook`      | Inicia o Storybook na porta 6006                  |
| `npm run build-storybook`| Gera uma versão estática do Storybook             |


# 🧪 Testes

O projeto conta com suporte a testes utilizando:

- **[Vitest](https://vitest.dev/)** e **[@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)** para testes **unitários** e de **integração**.
- **[Playwright](https://playwright.dev/)** para testes de **ponta a ponta (E2E)**.
- **[MSW](https://mswjs.io/)** para simular APIs durante o desenvolvimento e os testes.



# 📖 Storybook
Acesse a documentação interativa dos componentes com:

```bash
npm run storybook
```

# 📦 Build de Produção
Para gerar a aplicação pronta para deploy:

```bash
npm run build
```
Os arquivos serão gerados no diretório dist/.

# 🙌 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, discutir melhorias ou enviar pull requests.

# 📝 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.





