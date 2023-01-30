const stoned = {
  setStoned(distance) {
    this.attack = this.setAttack(distance) - Math.log2(distance) * 5;
    this.attack = Number(this.attack.toFixed());
    return this.attack;
  },
};
export default stoned;
