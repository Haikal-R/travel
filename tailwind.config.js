/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily:{
            "inter" :['inter'],
            "Circular" :['Circular']
        }
    },
    colors: {
        "white" : "#ffffff",
        "ungu" : "#5D50C6",
        "pink" : "#F85E9F",
        "orange" : "#FF5722",
        "grey" : "#222831",
        "black" : "#000"
    },
    dropShadow: {
        "sm-shadow" : [
            '0px 0px 0px 0px rgba(0, 0, 0, 0.07)', 
            '0px 34px 75px 0px rgba(0, 0, 0, 0.07)', 
            '0px 137px 137px 0px rgba(0, 0, 0, 0.06)', 
            '0px 308px 185px 0px rgba(0, 0, 0, 0.04)', 
            '0px 548px 219px 0px rgba(0, 0, 0, 0.01)', 
            '0px 856px 240px 0px rgba(0, 0, 0, 0.00)'
        ],
        "lg-shadow": [
            '0px 49px 32px rgba(0, 0, 0, 0.01)',
            '0px 31px 27px rgba(0, 0, 0, 0.05)',
            '0px 16px 20px rgba(0, 0, 0, 0.09)',
            '0px 5px 11px rgba(0, 0, 0, 0.1)',
            '0px 0px 0px rgba(0, 0, 0, 0.1)'
          ],
          
        "xl-shadow" : [
            '0px 0px 0px 0px rgba(0, 0, 0, 0.10)',
            '0px 41px 89px 0px rgba(0, 0, 0, 0.10)'
        ],
        "xxl-shadow" : [
           '0px 0px 0px 0px rgba(0, 0, 0, 0.05)', 
           '0px 32px 71px 0px rgba(0, 0, 0, 0.05)', 
           '0px 128px 128px 0px rgba(0, 0, 0, 0.04)', 
          ' 0px 288px 173px 0px rgba(0, 0, 0, 0.03)', 
           '0px 513px 205px 0px rgba(0, 0, 0, 0.01)', 
          ' 0px 801px 224px 0px rgba(0, 0, 0, 0.00)'
        ]
    },
   
  },
  plugins: [],
}

