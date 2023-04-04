import Swal from "sweetalert2";
import "./custom-styles.css";

function Instructions() {
  Swal.fire({
    title: "Welcome to our online bookstore! ",
    text: "You can buy and sell your favorite novels and earn coins in the process. Here's how it works:",
    confirmButtonText: "Next",
    confirmButtonColor: "#ffa500",
    showCloseButton: true,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      showStepOne();
    }
  });
}

const showStepOne = () => {
  Swal.fire({
    title: "Step 1: Login",
    text: `To start using our platform, login with your Google account. 
    Once you've logged in, you can start exploring our collection of novels and sell your old ones.`,
    confirmButtonText: "Next",
    confirmButtonColor: "#ffa500",
    showCloseButton: true,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      showStepTwo();
    }
  });
};
const showStepTwo = () => {
  Swal.fire({
    title: "Step 2: Sell Your Novels",
    text: `If you have novels that you no longer need, you can sell them on our platform and earn coins. 
    To sell a novel, simply upload a photo of the cover and enter its title, author, condition (Good, Average, Bad) and description.`,
    confirmButtonText: "Next",
    confirmButtonColor: "#ffa500",
    showCloseButton: true,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      showStepThree();
    }
  });
};
const showStepThree = () => {
  Swal.fire({
    title: "Step 3: Earn Coins",
    text: `When someone buys your novel, you'll earn coins that you can use to 
    buy other novels on our platform. The number of coins you earn depends on the price and condition of the novel you sold.`,
    confirmButtonText: "Next",
    confirmButtonColor: "#ffa500",
    showCloseButton: true,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      showStepFour();
    }
  });
};

const showStepFour = () => {
  Swal.fire({
    title: "Step 4: Buy Novels",
    text: `Once you've earned enough coins, you can use them to buy novels on our platform. 
      Simply browse our collection of novels, add the ones you want to your cart, and proceed to checkout. 
      You can use your coins to pay for your purchase, and any remaining balance can be paid 
      with your credit card or other payment methods.`,
    confirmButtonText: "Next",
    confirmButtonColor: "#ffa500",
    allowOutsideClick: false,
    showCloseButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      showStepFive();
    }
  });
};

const showStepFive = () => {
  Swal.fire({
    title: "Step 5: Rate and Review",
    text: `After you've bought a novel, we encourage you to rate and review it helps other users make 
      informed decisions. Your feedback will also help us improve our platform and provide better 
      recommendations for you and other users.`,
    confirmButtonText: "Finish",
    confirmButtonColor: "#ffa500",
    allowOutsideClick: false,
    showCloseButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Lets Start!!!",
        "You are all set for this World of Novels Journey!",
        "success"
      );
    }
  });
};

export default Instructions;
