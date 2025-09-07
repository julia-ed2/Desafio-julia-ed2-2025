# Abrigo de Animais

## Sobre o Projeto

Este projeto é um desafio técnico de lógica para organizar um abrigo de animais. O objetivo é implementar uma solução em **JavaScript** que, a partir de listas de brinquedos e uma ordem de animais, determina quem pode adotar cada animal ou se ele permanece no abrigo, seguindo regras específicas.

---

## Como Baixar e Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/julia-ed2/Desafio-julia-ed2-2025.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd Desafio-julia-ed2-2025
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Execute os testes:**
   ```bash
   npm test
   ```

---

## Regras do Desafio

- O animal vai para a pessoa que mostrar todos seus brinquedos favoritos na ordem desejada.
- Uma pessoa pode intercalar brinquedos que o animal queira ou não, desde que estejam na ordem desejada.
- Gatos não dividem seus brinquedos.
- Se ambas as pessoas tiverem condições de adoção, ninguém fica com o animal (ele permanece no abrigo).
- Uma pessoa não pode levar mais de três animais para casa.
- O jabuti Loco não se importa com a ordem dos brinquedos, desde que tenha outro animal como companhia.

---

## Animais Disponíveis

| Nome  | Espécie | Brinquedos Favoritos      |
|-------|---------|--------------------------|
| Rex   | cão     | RATO, BOLA               |
| Mimi  | gato    | BOLA, LASER              |
| Fofo  | gato    | BOLA, RATO, LASER        |
| Zero  | gato    | RATO, BOLA               |
| Bola  | cão     | CAIXA, NOVELO            |
| Bebe  | cão     | LASER, RATO, BOLA        |
| Loco  | jabuti  | SKATE, RATO              |

---

## Como Usar

O método principal é `encontraPessoas`, que recebe três parâmetros de texto:

- Brinquedos da primeira pessoa (ex: `'RATO,BOLA'`)
- Brinquedos da segunda pessoa (ex: `'RATO,NOVELO'`)
- Ordem dos animais (ex: `'Rex,Fofo'`)

**Exemplo de uso:**
```js
new AbrigoAnimais().encontraPessoas('RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
```

**Saída esperada:**
```js
{
  lista: ['Fofo - abrigo', 'Rex - pessoa 1']
}
```

---

## Estrutura do Projeto

- `src/abrigo-animais.js` - Arquivo principal da lógica.
- `src/abrigo-animais.test.js` - Testes automatizados com Jest.

---

## Testes

Os testes estão no arquivo `src/abrigo-animais.test.js`. Para rodar os testes, utilize:

```bash
npm test
```

---

## Entrega

- O repositório deve ser **público** e conter o nome e branch conforme instruções do desafio.
- A solução deve estar em **JavaScript** e seguir a estrutura de arquivos indicada.
- O export da classe deve ser:
  ```js
  export { AbrigoAnimais as AbrigoAnimais };
  ```

---

## Referências

- [Node.js](https://nodejs.org/en/)
- [Jest](https://jest-archive-august-2023.netlify.app/pt-BR/docs/getting-started)

---

## Licença

Este projeto é apenas para fins de avaliação técnica.

---

Data: 07/09/2025
