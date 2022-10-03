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
      hasTrunfo,
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
            name="cardName"
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
            name="cardDescription"
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
            name="cardAttr1"
            min="0"
            max="90"
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
            name="cardAttr2"
            min="0"
            max="90"
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
            name="cardAttr3"
            min="0"
            max="90"
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
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-rarity">
          Raridade
          <select
            data-testid="rare-input"
            id="card-rarity"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {(hasTrunfo === true)
          ? <h4>Você já tem um Super Trunfo em seu baralho</h4>
          : (
            <label htmlFor="card-trunfo">
              <input
                data-testid="trunfo-input"
                id="card-trunfo"
                type="checkbox"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trybe Trunfo
            </label>
          )}
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
