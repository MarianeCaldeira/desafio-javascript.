function desafio(){
    var regra = "tesoura corta papel, papel cobre veneno, pedra esmaga lagarto, lagarto corta Spock, Spock vaporiza tesoura, tesoura decapita Spock, lagarto come papel, veneno refuta lagarto, Spock vaporiza pedra, veneno esmaga tesoura.";
    console.log(regra);
    var mudar1 = regra.replace("esmaga", "quebra");
    var mudar2 = mudar1.replace("lagarto", "tesoura");
    var mudar3 = mudar2.replace("Spock", "papel");
    var mudar4 = mudar3.replace("vaporiza", "embrulha");
    var mudar5 = mudar4.replace("cobre", "embrulha");
    var mudar6 = mudar5.replace("decapita", "corte");
    var mudar7 = mudar6.replace("come", "troca");
    var mudar8 = mudar7.replace("veneno", "pedra");
    var mudar9 = mudar8.replace("refuta", "quebra");
    console.log(mudar9);
  }