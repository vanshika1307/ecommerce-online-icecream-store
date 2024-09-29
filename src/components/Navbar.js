import React, { useRef, useState } from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import icecreamLogo from "../images/icecream1.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          <Toolbar sx={{ display: "flex", alignItems: "center", flexGrow: 0 }}>
            <motion.img
              src={icecreamLogo}
              alt="Ice Cream Logo"
              style={{ width: "50px", marginRight: "15px" }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "#f45085",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#45c0ae",
                },
              }}
            >
              Frozen-Bites
            </Typography>
          </Toolbar>
          <SlideTabs />
        </Box>
      </Container>
    </AppBar>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <motion.ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex rounded-full p-1"
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(5px)",
        border: "2px solid rgba(255, 255, 255, 0.5)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Tab setPosition={setPosition} to="/">
        Home
      </Tab>
      <Tab setPosition={setPosition} to="/menu">
        Menu
      </Tab>
      <Tab setPosition={setPosition} to="/cart">
        Cart
      </Tab>
      <Tab setPosition={setPosition} to="/about">
        About
      </Tab>
      <Tab setPosition={setPosition} to="/contact">
        Contact
      </Tab>
      <Cursor position={position} />
    </motion.ul>
  );
};

const Tab = ({ children, setPosition, to }) => {
  const ref = useRef(null);
  return (
    <motion.li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-sm font-semibold"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link
        to={to}
        style={{
          textDecoration: "none",
          color: "#45c0ae",
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
        }}
      >
        {children}
      </Link>
    </motion.li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-gradient-to-r from-pink-300 to-blue-300 opacity-60 md:h-10"
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
    />
  );
};

export default Navbar;
