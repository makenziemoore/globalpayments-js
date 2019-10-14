import assetBaseUrl from "../asset-base-url";

// tslint:disable:object-literal-key-quotes
// tslint:disable:object-literal-sort-keys

const imageBase = assetBaseUrl() + "images/";

export const fieldStyles = {
  "#secure-payment-field": {
    "-o-transition": "border-color ease-in-out .15s,box-shadow ease-in-out .15s",
    "-webkit-box-shadow": "inset 0 1px 1px rgba(0,0,0,.075)",
    "-webkit-transition": "border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s",
    "background-color": "#fff",
    border: "1px solid #cecece",
    "border-radius": "2px",
    "box-shadow": "none",
    "box-sizing": "border-box",
    display: "block",
    "font-family": "'Roboto', sans-serif",
    "font-size": "11px",
    "font-smoothing": "antialiased",
    height: "35px",
    margin: "5px 0 10px 0",
    "max-width": "100%",
    outline: "0",
    padding: "0 10px",
    transition: "border-color ease-in-out .15s,box-shadow ease-in-out .15s",
    "vertical-align": "baseline",
    width: "100%"
  },
  "#secure-payment-field:focus": {
    border: "1px solid lightblue",
    "box-shadow": "0 1px 3px 0 #cecece",
    outline: "none"
},
"#secure-payment-field[type=button]": {
    "-moz-user-select": "none",
    "-ms-touch-action": "manipulation",
    "-ms-user-select": "none",
    "-webkit-user-select": "none",
    background: "transparent url(" + imageBase + "lock-solid.svg) no-repeat 35% center",
    "background-color": "#ffffff",
    "background-size": "15px",
    border: "1px solid #111",
    "box-sizing": "border-box",
    color: "#000",
    cursor: "pointer",
    display: "inline-block",
    "font-size": "13px",
    "font-weight": "500",
    "margin-bottom": "0",
    padding: "0 5%",
    "text-align": "center",
    "text-transform": "none",
    "touch-action": "manipulation",
    "user-select": "none",
    "vertical-align": "middle",
    "white-space": "nowrap"
},
"#secure-payment-field[type=button]:focus": {
    "background-color": "#fff",
    border: "1px solid lightblue",
    "box-shadow": "0 1px 3px 0 #cecece",
    color: "#000",
    outline: "none"
},
"#secure-payment-field[type=button]:hover": {
"background-color": "#fff",
"box-shadow": "0 1px 3px 0 #cecece"
},
".card-cvv": {
  background: "transparent url(" + imageBase + "cvv.png) no-repeat right",
  "background-size": "60px"
},
".card-cvv.card-type-amex": {
  background: "transparent url(" + imageBase + "cvv-amex.png) no-repeat right",
  "background-size": "60px"
},
".card-number": {
  background: "transparent url(" + imageBase + "logo-unknown@2x.png) no-repeat right",
  "background-size": "52px"
},
".card-number.invalid.card-type-amex": {
  background: "transparent url(" + imageBase + "amex-invalid.svg) no-repeat right center",
  "background-position-x": "98%",
  "background-size": "38px"
},
".card-number.invalid.card-type-discover": {
  background: "transparent url(" + imageBase + "discover-invalid.svg) no-repeat right center",
  "background-position-x": "98%",
  "background-size": "60px"
},
".card-number.invalid.card-type-jcb": {
  background: "transparent url(" + imageBase + "jcb-invalid.svg) no-repeat right center",
  "background-position-x": "98%",
  "background-size": "38px"
},
".card-number.invalid.card-type-mastercard": {
  background: "transparent url(" + imageBase + "mastercard-invalid.svg) no-repeat right center",
  "background-position-x": "98%",
  "background-size": "40px"
},
".card-number.invalid.card-type-visa": {
  background: "transparent url(" + imageBase + "visa-invalid.svg) no-repeat center",
  "background-position-x": "98%",
  "background-size": "50px"
},
".card-number.valid.card-type-amex": {
  background: "transparent url(" + imageBase + "amex.svg) no-repeat right center",
  "background-position-x": "98%",
  "background-size": "38px"
},
".card-number.valid.card-type-discover": {
  background: "transparent url(" + imageBase + "discover.svg) no-repeat right center",
  "background-position-x": "98%",
  "background-size": "60px"
},
".card-number.valid.card-type-jcb": {
  background: "transparent url(" + imageBase + "jcb.svg) no-repeat right center",
  "background-position-x": "98%",
  "background-size": "38px"
},
".card-number.valid.card-type-mastercard": {
  background: "transparent url(" + imageBase + "mastercard.svg) no-repeat center",
  "background-position-x": "98%",
  "background-size": "40px"
},
".card-number.valid.card-type-visa": {
  background: "transparent url(" + imageBase + "visa.svg) no-repeat right center",
  "background-position-x": "98%",
  "background-size": "50px"
},
".card-number::-ms-clear": {
  display: "none",
},
"input[placeholder]": {
  "letter-spacing": ".5px",
},
};

export const parentStyles = {
  ".secure-payment-form": {
    "font-family": "'Roboto', sans-serif",
  },

  ".secure-payment-form iframe": {
    width: "100%"
  },

  ".secure-payment-form label": {
    color: "#000",
    "font-size": "12px",
    "font-weight": "600"
  },

  ".secure-payment-form #ss-banner": {
    background: `transparent url(${imageBase}shield-and-logos@2x.png) no-repeat left center`,
    "background-size": "280px 34px",
    height: "40px",
    "margin-bottom": "7px",
  },

  ".secure-payment-form div": {
    display: "block",
  },

  ".secure-payment-form .form-row": {
    "margin-top": "10px",
  },

  ".secure-payment-form .form-wrapper": {
    display: "block",
    margin: "10px auto",
    width: "300px",
  },
  ".sandbox-warning": {
    "background-color": "#ffebeb",
    border: "1px solid red",
    color: "#e20000",
    "font-size": "11px",
    padding: "6px",
    "margin-top": "-1px",
    "text-align": "center"
  }
};
