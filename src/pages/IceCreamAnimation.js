import React from "react";

const IceCreamAnimation = () => {
  return (
    <div className="ice-cream-container">
      <div className="sun"></div>
      <div className="glare"></div>
      <div className="glare2"></div>
      <div className="stick"></div>
      <div className="drip3"></div>
      <div className="icecream"></div>
      <div className="icecream-melt"></div>
      <div className="drip"></div>
      <div className="drip2"></div>
      <style jsx>{`
        body {
          background: linear-gradient(to right, #ffcb70 0%, #ff7070 300%);
        }
        .sun {
          position: absolute;
          top: 0;
          left: 0;
          width: 250px;
          height: 250px;
          border-radius: 0 0 500px;
          opacity: 0.5;
          background-color: yellow;
          animation: sun-ani 5s linear infinite;
        }
        @keyframes sun-ani {
          0% {
            background-color: yellow;
          }
          50% {
            background-color: orange;
          }
          75% {
            background-color: red;
          }
          100% {
            background-color: yellow;
          }
        }
        .glare {
          position: absolute;
          top: 210px;
          left: 43em;
          z-index: 100;
          width: 30px;
          height: 300px;
          background-color: #f4f6cf;
          border-radius: 250px 0px 0px;
          transform: rotate(45deg);
          filter: blur(5px);
          animation: glare-ani 10s linear infinite;
        }
        @keyframes glare-ani {
          0% {
            opacity: 0.5;
            background-color: #f4f6cf;
          }
          50% {
            opacity: 0.1;
            background-color: white;
          }
          100% {
            opacity: 0.5;
            background-color: #f4f6cf;
          }
        }
        .glare2 {
          position: absolute;
          top: 410px;
          left: 45em;
          z-index: 100;
          width: 15px;
          height: 150px;
          background-color: #f4f6cf;
          border-radius: 15px 0px 0px;
          transform: rotate(45deg);
          filter: blur(5px);
          animation: glare2-ani 10s linear infinite;
        }
        @keyframes glare2-ani {
          0% {
            opacity: 0.25;
            background-color: #f4f6cf;
          }
          50% {
            opacity: 0.125;
            background-color: white;
          }
          100% {
            opacity: 0.25;
            background-color: #f4f6cf;
          }
        }
        .icecream {
          position: absolute;
          top: 200px;
          left: 40em;
          width: 250px;
          height: 400px;
          border-radius: 250px 250px 20px 20px;
          background-color: #45c0ae;
          transform: rotate(45deg);
          animation: icecream-ani 10s linear infinite;
        }
        @keyframes icecream-ani {
          0% {
            background-color: #45c0ae;
          }
          50% {
            background-color: #f45085;
          }
          100% {
            background-color: #45c0ae;
          }
        }
        .icecream-melt {
          z-index: -100;
          position: absolute;
          top: 200px;
          left: 40em;
          width: 250px;
          height: 400px;
          border-radius: 250px 250px 30px 30px;
          background-color: #f4f6cf;
          transform: rotate(45deg);
          filter: blur(3px);
          animation: melt-ani 3s linear infinite;
        }
        @keyframes melt-ani {
          0% {
            opacity: 0.5;
            background-color: #45c0ae;
            top: 200px;
          }
          50% {
            opacity: 0.1;
            background-color: #f45085;
            top: 215px;
          }
          100% {
            opacity: 0.5;
            background-color: #45c0ae;
            top: 200px;
          }
        }
        .stick {
          position: absolute;
          top: 500px;
          left: 33em;
          width: 100px;
          height: 200px;
          border-radius: 0px 0px 250px 250px;
          background-color: #fda730;
          transform: rotate(45deg);
        }
        .drip {
          position: absolute;
          top: 20em;
          left: 55em;
          width: 25px;
          height: 50px;
          border-radius: 0 50px 50px 50px;
          background-color: #45c0ae;
          animation: drip-ani 4s linear infinite;
        }
        @keyframes drip-ani {
          0% {
            opacity: 0;
            left: 55em;
            top: 20em;
            background-color: #f45085;
          }
          50% {
            opacity: 1;
            background-color: #45c0ae;
          }
          100% {
            opacity: 0;
            left: 55em;
            top: 40em;
            background-color: #f45085;
          }
        }
        .drip2 {
          position: absolute;
          top: 25em;
          left: 47em;
          width: 20px;
          height: 45px;
          border-radius: 0 50px 50px 50px;
          background-color: #45c0ae;
          animation: drip2-ani 5s linear infinite;
        }
        @keyframes drip2-ani {
          0% {
            opacity: 0;
            left: 47em;
            top: 25em;
            background-color: #f45085;
          }
          50% {
            opacity: 1;
            background-color: #45c0ae;
          }
          100% {
            opacity: 0;
            left: 47em;
            top: 40em;
            background-color: #f45085;
          }
        }
        .drip3 {
          position: absolute;
          top: 30em;
          left: 52em;
          width: 15px;
          height: 35px;
          border-radius: 0 50px 50px 50px;
          background-color: #45c0ae;
          animation: drip3-ani 6s linear infinite;
        }
        @keyframes drip3-ani {
          0% {
            opacity: 0;
            left: 52em;
            top: 30em;
            background-color: #f45085;
          }
          50% {
            opacity: 1;
            background-color: #45c0ae;
          }
          100% {
            opacity: 0;
            left: 52em;
            top: 40em;
            background-color: #f45085;
          }
        }
      `}</style>
    </div>
  );
};

export default IceCreamAnimation;
