class WorkItem {
    showDetails() {
      throw new Error("O método showDetails() deve ser implementado.");
    }
  }

  class Task extends WorkItem {
    constructor(name) {
      super();
      this.name = name;
    }
  
    showDetails() {
      console.log(`Tarefa: ${this.name}`);
    }
  }

  class Project extends WorkItem {
    constructor(name) {
      super();
      this.name = name;
      this.items = []; // pode conter Tasks e outros Projects
    }
  
    add(item) {
      this.items.push(item);
    }
  
    remove(item) {
      this.items = this.items.filter(i => i !== item);
    }
  
    showDetails(indent = 0) {
      console.log(`${" ".repeat(indent)}Projeto: ${this.name}`);
      this.items.forEach(item => item.showDetails(indent + 2));
    }
  }

  const t1 = new Task("Escrever documentação");
  const t2 = new Task("Fazer testes");
  const subProject = new Project("Módulo de Login");
  subProject.add(new Task("Criar tela de login"));
  subProject.add(new Task("Implementar autenticação"));
  
  const mainProject = new Project("Lançamento v1.0");
  mainProject.add(t1);
  mainProject.add(t2);
  mainProject.add(subProject);
  
  // Exibe tudo de forma hierárquica
  mainProject.showDetails();
  