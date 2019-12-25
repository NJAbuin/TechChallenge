class Animal {
    constructor(animalSound) {
      this.animalSound = animalSound
    }
  
    speak(string) {
      return string.replace(/\s/g, ` ${this.animalSound} `)
    }
  }
  
  