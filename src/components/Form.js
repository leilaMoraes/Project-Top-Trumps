import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <label htmlFor="card-name">
          Nome
          <input
            data-testid="name-input"
            id="card-name"
            type="text"
            name="card-name"
          />
        </label>
        <label htmlFor="card-description">
          Descrição
          <input
            data-testid="description-input"
            id="card-description"
            type="textarea"
            name="card-description"
          />
        </label>
        <label htmlFor="card-attr1">
          Attr01
          <input
            data-testid="attr1-input"
            id="card-attr1"
            type="number"
            name="card-attr1"
          />
        </label>
        <label htmlFor="card-attr2">
          Attr02
          <input
            data-testid="attr2-input"
            id="card-attr2"
            type="number"
            name="card-attr2"
          />
        </label>
        <label htmlFor="card-attr3">
          Attr03
          <input
            data-testid="attr3-input"
            id="card-attr3"
            type="number"
            name="card-attr3"
          />
        </label>
        <label htmlFor="card-image">
          Imagem
          <input
            data-testid="image-input"
            id="card-image"
            type="text"
            name="card-image"
          />
        </label>
        <label htmlFor="card-rarity">
          Raridade
          <select
            data-testid="rare-input"
            id="card-rarity"
            name="card-rarity"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="card-trunfo">
          <input
            data-testid="trunfo-input"
            id="card-trunfo"
            type="checkbox"
            name="card-trunfo"
          />
          Super Trybe Trunfo
        </label>
        <button
          data-testid="save-button"
          type="button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
