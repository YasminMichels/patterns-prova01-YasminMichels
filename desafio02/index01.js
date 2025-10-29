class Message {
    constructor(text) {
      this.text = text;
    }
  
    getText() {
      return this.text;
    }
  }

  class MessageDecorator {
    constructor(message) {
      this.message = message;
    }
  
    getText() {
      return this.message.getText();
    }
  }
  
  //Define o humor da mensagem
  class PositiveMessageDecorator extends MessageDecorator {
    getText() {
      let text = this.message.getText();
      return text.replace(/horrível/gi, "legal :)");
    }
  }
  
  //Coloca tudo em maiúsculas
  class UpperCaseDecorator extends MessageDecorator {
    getText() {
      return this.message.getText().toUpperCase();
    }
  }
  
  //Adiciona uma data
  class DatePrefixDecorator extends MessageDecorator {
    getText() {
      const date = new Date().toLocaleDateString();
      return `[${date}] ${this.message.getText()}`;
    }
  }
  
  let msg = new Message("hoje o dia está horrível");
  
  // Aplicando os decoradores
  msg = new PositiveMessageDecorator(msg);
  msg = new UpperCaseDecorator(msg);
  msg = new DatePrefixDecorator(msg);
  
  console.log(msg.getText());
  