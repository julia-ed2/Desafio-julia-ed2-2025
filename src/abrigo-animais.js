const dadosAnimais = {
  Rex: { especie: 'cão', brinquedos: ['RATO', 'BOLA'] },
  Mimi: { especie: 'gato', brinquedos: ['BOLA', 'LASER'] },
  Fofo: { especie: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER'] },
  Zero: { especie: 'gato', brinquedos: ['RATO', 'BOLA'] },
  Bola: { especie: 'cão', brinquedos: ['CAIXA', 'NOVELO'] },
  Bebe: { especie: 'cão', brinquedos: ['LASER', 'RATO', 'BOLA'] },
  Loco: { especie: 'jabuti', brinquedos: ['SKATE', 'RATO'] }
};

// brinquedos validos
const brinquedosValidos = new Set([
  'RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE'
]);

// função que vai percorrer a array 
function isSubcequence(subseq, seq) {
  let i = 0;
  let j = 0
  while (i < subseq.length && j < seq.length) {
    if (subseq[i] === seq[j]) {
      i++;
    }
    j++;
  }
  return i === subseq.length;
};

// verifica duplicatas
function temDuplicatas(array) {
  return new Set(array).size !== array.length;
};

// validação
function validarEntrada(brinquedos1, brinquedos2, animais) {
  if (temDuplicatas(brinquedos1) || temDuplicatas(brinquedos2)) {
    return { erro: 'Brinquedo inválido' };
  }
  if (temDuplicatas(animais)) {
    return { erro: 'Animal inválido' };
  }
  for (const b of brinquedos1) {
    if (!brinquedosValidos.has(b)) {
      return { erro: 'Brinquedo inválido' };
    }
  }
  for (const b of brinquedos2) {
    if (!brinquedosValidos.has(b)) {
      return { erro: 'Brinquedo inválido' };
    }
  }
  for (const a of animais) {
    if (!dadosAnimais.hasOwnProperty(a)) {
      return { erro: 'Animal inválido' };
    }
  }
  return null;
};

// principal
class AbrigoAnimais {
  // recebe os brinquedos, separa e limpa
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const brinquedos1 = brinquedosPessoa1.split(',').map(b => b.trim());
    const brinquedos2 = brinquedosPessoa2.split(',').map(a => a.trim());
    const animais = ordemAnimais.split(',').map(a => a.trim());

    // valida entrda
    const erroValidacao = validarEntrada(brinquedos1, brinquedos2, animais);
    if (erroValidacao) {
      return erroValidacao;
    };

    // animais adotados
    const adotadosPessoa1 = [];
    const adotadosPessoa2 = [];
    // resultado final
    const resultado = [];

    // regra para o Loco
    const podeAdotar = (pessoaBrinquedos, animal, adotaPessoa) => {
      const brinquedosAnimal = dadosAnimais[animal].brinquedos;
      if (animal === 'Loco') {
        // se a pessoa já adotou algum animal ANTES de Loco: pode adotar Loco sem ordem
        if (adotaPessoa.length > 0) {
          return brinquedosAnimal.every(b => pessoaBrinquedos.includes(b));
        } else {
          // se Loco é o primeiro: precisa seguir a ordem
          return isSubcequence(brinquedosAnimal, pessoaBrinquedos);
        }
      } else {
        // ordem correta para os outros animais
        return isSubcequence(brinquedosAnimal, pessoaBrinquedos);
      }
    };

    for (const animal of animais) {
      const pode1 = podeAdotar(brinquedos1, animal, adotadosPessoa1);
      const pode2 = podeAdotar(brinquedos2, animal, adotadosPessoa2);


      // se ambos podem adotar e é gato: fica no abrigo
      if (pode1 && pode2 && dadosAnimais[animal].especie === 'gato') {
        resultado.push(`${animal} - abrigo`);
        continue;
      }

      // ambos podem adotar e não é gato: fica no abrigo
      if (pode1 && pode2) {
        resultado.push(`${animal} - abrigo`);
        continue;
      }

      // pessoa 1 pode adotar e ainda não tem 3 animais: adota
      if (pode1 && adotadosPessoa1.length < 3) {
        adotadosPessoa1.push(animal);
        resultado.push(`${animal} - pessoa 1`);
        continue;
      }

      // pessoa 2 pode adotar e ainda não tem 3 animais: adota
      if (pode2 && adotadosPessoa2.length < 3) {
        adotadosPessoa2.push(animal);
        resultado.push(`${animal} - pessoa 2`);
        continue;
      }

      // niinguem pode adotar: animal fica no abrigo
      resultado.push(`${animal} - abrigo`);
    }

    //oredem alfabetica
    resultado.sort((a, b) => {
      const nomeA = a.split(' - ')[0];
      const nomeB = b.split(' - ')[0];
      return nomeA.localeCompare(nomeB);
    });

    //retorna a lista
    return { lista: resultado };

  }
}

export { AbrigoAnimais as AbrigoAnimais };

