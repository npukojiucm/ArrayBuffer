import Character from '../character';
import attackRules from '../rules/changeAttack';
import stoned from '../abilitys/stoned';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
Magician.prototype.getAttack = attackRules.getAttack;
Magician.prototype.setAttack = attackRules.setAttack;
Magician.prototype.setStoned = stoned.setStoned;
