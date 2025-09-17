//problemAbstract
class LightButton {
    render() {
      return "Botão branco criado";
    }
  }
  class DarkButton {
    render() {
      return "Botão preto criado";
    }
  }
  
  class LightWindow {
    render() {
      return "Janela clara aberta";
    }
  }
  class DarkWindow {
    render() {
      return "Janela escura aberta";
    }
  }
  
  class UIFactory {
    createButton() {}
    createWindow() {}
  }
  
  class LightUIFactory extends UIFactory {
    createButton() {
      return new LightButton();
    }
  
    createWindow() {
      return new LightWindow();
    }
  }
  
  class DarkUIFactory extends UIFactory {
    createButton() {
      return new DarkButton();
    }
  
    createWindow() {
      return new DarkWindow();
    }
  }

  function renderUI(factory) {
    const button = factory.createButton();
    const windowUI = factory.createWindow();
  
    console.log(button.render());
    console.log(windowUI.render());
  }
  
  const theme = "dark"; 
  
  let factory;
  
  if (theme === "light") {
    factory = new LightUIFactory();
  } else {
    factory = new DarkUIFactory();
  }
  
  renderUI(factory);
  