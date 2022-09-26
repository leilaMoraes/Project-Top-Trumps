import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        <label htmlFor="card-name">
          Nome
          <input
            data-testid="name-input"
            id="card-name"
            type="text"
            name="card-name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-description">
          Descrição
          <input
            data-testid="description-input"
            id="card-description"
            type="textarea"
            name="card-description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr1">
          Attr01
          <input
            data-testid="attr1-input"
            id="card-attr1"
            type="number"
            name="card-attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr2">
          Attr02
          <input
            data-testid="attr2-input"
            id="card-attr2"
            type="number"
            name="card-attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr3">
          Attr03
          <input
            data-testid="attr3-input"
            id="card-attr3"
            type="number"
            name="card-attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-image">
          Imagem
          <input
            data-testid="image-input"
            id="card-image"
            type="text"
            name="card-image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-rarity">
          Raridade
          <select
            data-testid="rare-input"
            id="card-rarity"
            name="card-rarity"
            value={ cardRare }
            onChange={ onInputChange }
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
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.boolean.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
