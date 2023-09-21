tailwind.config = {
  theme: {
    extend: {
      // color part start---
      colors: {
        headerColor: "rgba(22, 12, 109, 0.5)",
        headerTextColor: "#FFFFFF",
        bannerP:"#E6E5F3",
        hoverColor: "#1BBF00",
        overLy:"rgb(107, 98, 197,0.9)",
        beforeColor:"rgb(79, 88, 95,0.5)",
        countColor:"#1BBF00",
        counttextColor:"#141135",
        choosetextColor:"#726E9E",
      },

    
   
      // color part end---
      width: {
        container: '1170px',
        bannercontainer: '962px',
        choosecontainer: '1147px',
      },
  //  bannar image----------
  backgroundImage: {
    bannerimage : "url('images/banner.png')",
    counterimage : "url('images/countbg.png')",
    chooseimage : "url('images/choose_bg.png')",
    
  },
  // google font------------
  fontFamily: {
    openF: ["Open Sans, sans-serif"],
    paprika: ["Paprika, cursive"],
  },




    },
  },
};
