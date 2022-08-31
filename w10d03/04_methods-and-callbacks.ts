interface ISmigle {
  flurgnar: boolean;
  replenishFluids: (fluid: string) => boolean;
}

const mySmigle: ISmigle = {
  flurgnar: true,
  replenishFluids: (fluid) => {
    return true;
  }
};

const myHigherOrderFunc = (callback: (num: number) => string) => {
  callback(42);
};
