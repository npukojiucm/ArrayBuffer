import Character from '../character';
import attackRules from '../rules/changeAttack';
import stoned from '../abilitys/stoned';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
Daemon.prototype.getAttack = attackRules.getAttack;
Daemon.prototype.setAttack = attackRules.setAttack;
Daemon.prototype.setStoned = stoned.setStoned;
