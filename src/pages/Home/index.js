import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as C from "./styles";





const Matricula = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [numeroBilhete, setNumeroBilhete] = useState("");
  const [anoFrequentar, setAnoFrequentar] = useState("");
  const [morada, setMorada] = useState("");
  const [nomePai, setNomePai] = useState("");
  const [nomeMae, setNomeMae] = useState("");
  const [dataNascimento, setDataNascimento] = useState(null);
  const [numeroTelefone, setNumeroTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [matriculaFeita, setMatriculaFeita] = useState(false);

  const handleMatricula = (e) => {
    e.preventDefault();

    if (
      !nomeCompleto ||
      !numeroBilhete ||
      !anoFrequentar ||
      !morada ||
      !nomePai ||
      !nomeMae ||
      !dataNascimento ||
      !numeroTelefone ||
      !email
    ) {
      alert("Preencha todos os campos");
      return;
    }

    setMatriculaFeita(true);
  };

  return (
    <C.Container>
      <C.Title>Matrícula</C.Title>
      {!matriculaFeita ? (
        <C.Form onSubmit={handleMatricula}>
          <C.Input
            type="text"
            placeholder="Nome Completo"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
          />
          <C.Input
            type="text"
            placeholder="Número de Bilhete de Identidade"
            value={numeroBilhete}
            onChange={(e) => setNumeroBilhete(e.target.value)}
          />
          <C.Select
            value={anoFrequentar}
            onChange={(e) => setAnoFrequentar(e.target.value)}
          >
            <option value="">Ano que vai frequentar</option>
            <option value="7º">7º Ano</option>
            <option value="8º">8º Ano</option>
            <option value="9º">9º Ano</option>
            <option value="10º">10º Ano</option>
            <option value="11º">11º Ano</option>
            <option value="12º">12º Ano</option>
          </C.Select>
          <C.Input
            type="text"
            placeholder="Morada"
            value={morada}
            onChange={(e) => setMorada(e.target.value)}
          />
          <C.Input
            type="text"
            placeholder="Nome do Pai"
            value={nomePai}
            onChange={(e) => setNomePai(e.target.value)}
          />
          <C.Input
            type="text"
            placeholder="Nome da Mãe"
            value={nomeMae}
            onChange={(e) => setNomeMae(e.target.value)}
          />
          <DatePicker
            placeholderText="Data de Nascimento"
            selected={dataNascimento}
            onChange={(date) => setDataNascimento(date)}
            dateFormat="dd/MM/yyyy"
          />
          <C.Input
            type="text"
            placeholder="Número de Telefone"
            value={numeroTelefone}
            onChange={(e) => setNumeroTelefone(e.target.value)}
          />
          <C.Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <C.Button type="submit">Matricular-se</C.Button>
        </C.Form>
      ) : (
        <C.SuccessMessage>Matrícula feita com sucesso!</C.SuccessMessage>
        
      )}
    </C.Container>
  );
};

export default Matricula;












