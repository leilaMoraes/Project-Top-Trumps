import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCard: [],
    };
  }

  enableSavedButton = () => {
    const { cardName, cardDescription,
      cardImage, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const name = cardName.length > 0;
    const description = cardDescription.length > 0;
    const image = cardImage.length > 0;
    const value1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= '90';
    const value2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= '90';
    const value3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= '90';
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= '210';
    this.setState({
      isSaveButtonDisabled: !(name && description && image && value1
      && value2 && value3 && sum) });
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.enableSavedButton());
  };

  savingCards = () => {
    const { cardName, cardDescription,
      cardImage, cardAttr1, cardAttr2, cardAttr3, cardRare,
      cardTrunfo } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo };
    this.setState((prevState) => ({
      savedCard: [...prevState.savedCard, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

  checkTrunfo = () => {
    const { savedCard } = this.state;
    return savedCard.some((card) => card.cardTrunfo);
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          hasTrunfo={ this.checkTrunfo() }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.savingCards }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
