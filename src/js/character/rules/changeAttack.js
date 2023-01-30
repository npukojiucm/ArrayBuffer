const attackRules = {
  setAttack(distance) {
    const validDistance = {
      1: 1,
      2: 0.9,
      3: 0.8,
      4: 0.7,
      5: 0.6,
    };
    if (validDistance[distance]) {
      this.attack *= validDistance[distance];
      return this.attack;
    }
    throw new Error('Out of range');
  },

  getAttack() {
    return this.attack;
  },
};
export default attackRules;
